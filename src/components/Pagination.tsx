
export const Pagination = ({pokemonPerPage = 0, totalPokemon = 0 }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    <nav>
        <ul className='pagination'>
            {
                pageNumbers.map(nPage =>  (
                    <li key={nPage} className='page-item'>
                        <a href='!#' className='page-link'>
                            {nPage}
                        </a>
                    </li>
                ))
            }
        </ul>
    </nav>

  )
}
