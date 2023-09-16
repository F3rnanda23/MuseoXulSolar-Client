import { useState } from 'react';

import PropTypes from 'prop-types';
import Gallery from '../../components/galery/galery';
import NavBar from '../../components/navBar/navBar';
import Footer from '../../components/footer/footer';
import Destacados from '../../components/destacados/Destacados';
import Video from '../../components/video/Video';
import Cookies from 'universal-cookie';

const Home = () => {

    const [searchActive, setSearchActive] = useState(false)
    const [search, setSearch] = useState('')

    const cookies = new Cookies();
    console.log('id' + cookies.get('id'))
    console.log('name' + cookies.get('name'))
    console.log('email' + cookies.get('email'))

    return (
        <div className="h-screen bg-gray-100">

            <NavBar searchActive={searchActive} setSearchActive={setSearchActive} setSearch={setSearch} />
            {searchActive &&
                <div className='flex items-center justify-center bg-orange-200 h-16'>
                    <img className='w-14 h-14 mr-10' src='https://res.cloudinary.com/dtsmy1ksn/image/upload/v1694823262/gl/buso_s6shhg.png' alt="Bs" />
                    <input placeholder="Busca tu actividad, evento o visita..." onChange={(e) => setSearch(e.target.value)}
                        className='w-3/4 h-4/5 bg-orange-100 border-gray-300 rounded'
                        type="text" />

                </div>
            }

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