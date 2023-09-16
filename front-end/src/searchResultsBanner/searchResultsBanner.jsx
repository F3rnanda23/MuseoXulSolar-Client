import PropTypes from 'prop-types';

const SearchResultsBanner = ({ searchResults }) => {


    return (

        <div>
 <h2>Resultados de la búsqueda:</h2>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>
            <a href={result.link}>{result.title}</a>
          </li>
        ))}
      </ul>

        </div>

     );

}

SearchResultsBanner.propTypes = {
    searchResults: PropTypes.array, //indica que esperamos que las props sean tipo object
};
 
export default SearchResultsBanner;