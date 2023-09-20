import PropTypes from 'prop-types';

const SearchResultsBanner = ({ searchResults, setShowResults }) => {

  function handleClick(){
    setShowResults(false)
  }

    return (

      <div className='bg-gray-300 flex flex-col h-2/4'>
        <div className='ml-auto mt-2 mr-6'>
        <button
                    onClick={handleClick}
                    type="button"
                    className="ainline-block h-10 text-gray-200 bg-orange-200 bg-opacity-80 rounded bg-primary-100 px-10 pb-2 pt-2.5 text-md font-bold uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:scale-105 hover:bg-gray-300 hover:text-orange-200 hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                    Cerrar
                </button>

        </div>
      
    <div className='bg-gray-300 flex flex-col items-center'>
 <h1 className='font-bold text-3xl mt-2 mb-5'>Resultados de la búsqueda:</h1>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index} className='text-orange-200 font-bold text-2xl mt-1 hover:scale-105'>
            <a href={result.link}>{result.title}</a>
          </li>
        ))}
      </ul>

        </div>

      </div>
    

     );

}

SearchResultsBanner.propTypes = {
    searchResults: PropTypes.array, //indica que esperamos que las props sean tipo object
};
 
export default SearchResultsBanner;