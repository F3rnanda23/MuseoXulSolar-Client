import PropTypes from 'prop-types';

import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/footer';
import Gallery from '../../components/galery/galery';

const Home = ({ cloudinary }) =>{

    return (
        <div className="h-screen w-screen">



            <NavBar />
            <Gallery cloudinary={cloudinary}/>
            <Footer/>

        </div>
    )

};

Home.propTypes = {
    cloudinary: PropTypes.object, //indica que esperamos que las props sean tipo object
  };

export default Home;