import { ChangeEvent, useState } from 'react';
import { Loading } from '../components/Loading';
import { usePokemon } from '../hooks/usePokemon'
import { Pokemon } from '../interfaces/pokemonResponse';

export const HomePage = () => {

    const {loading, pokemons } = usePokemon();
    const [currentPage, setCurrentPage] = useState(0);
    const [search, setSearch] = useState('');


    const filteredPokemons = (): Pokemon[] => {

        if(search.length == 0)
            return pokemons.slice(currentPage, currentPage + 10);
        
        const filtered = pokemons.filter(p => p.name.includes(search) );
        return filtered.slice(currentPage, currentPage + 10);
    }

    const nextPage = () => {
        if(pokemons.filter(p => p.name.includes(search) ).length > currentPage + 10)
            setCurrentPage(currentPage + 10);
    }

    const prevPage = () => {
        if(currentPage > 0) {
            setCurrentPage(currentPage - 10);
        }        
    }

    const onSearchChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        //Desestructurar event a target
        setCurrentPage(0);
        setSearch(target.value);

    }
   
  return (
    <div className='mt-5'> 
        <h1>Lista de Pokemon</h1>
        <hr />

        <input 
            type="text" 
            className='mb-3 form-control'
            placeholder='Buscar Pokemon'
            value={search}
            onChange={onSearchChange}
         />

        <button 
        className='btn btn-primary'
        onClick={prevPage}        
        >Anterior</button>&nbsp;
        
        <button 
        className='btn btn-primary'
        onClick={nextPage}>Siguiente</button>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                {
                    filteredPokemons().map( ({id, name, pic}) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td><img src={pic} alt={name} /></td>
                        </tr>        

                    ))    

                }
                       
            </tbody>
        </table>
        {
           loading && <Loading />
        }

    </div>
  )
}
