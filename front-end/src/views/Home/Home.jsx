import { useState } from 'react';

import PropTypes from 'prop-types';
import Gallery from '../../components/galery/galery';
import NavBar from '../../components/navBar/navBar';
import Footer from '../../components/footer/footer';
import Destacados from '../../components/destacados/Destacados';
import Video from '../../components/video/Video';
import Cookies from 'universal-cookie';
import SearchBar from '../../components/searchBar/searchBar';
import allResults from './allResults';
import SearchResultsBanner from '../../searchResultsBanner/searchResultsBanner';

const Home = () => {

    const [searchActive, setSearchActive] = useState(false)
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

  const removeAccents = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const handleSearch = (query) => {
    console.log('aca esta el searchresults');
     const normalizedQuery = removeAccents(query).toLowerCase();

    const filteredResults = allResults.filter((result) =>
    removeAccents(result.title.toLowerCase()).includes(normalizedQuery)
  );
    setSearchResults(filteredResults);
  }


  


    return (
        <div className="h-screen bg-gray-100">

            <NavBar searchActive={searchActive} setSearchActive={setSearchActive} />
            {searchActive && <SearchBar setSearch={setSearch} search={search} onSearch={handleSearch} setShowResults={setShowResults} /> }
            {showResults && <SearchResultsBanner searchResults={searchResults} /> }
            <Video />
            <Destacados />
            <Gallery />
            <Footer />

        </div>
    )

};

Home.propTypes = {
    cloudinary: PropTypes.object, //indica que esperamos que las props sean tipo object
};

export default Home;