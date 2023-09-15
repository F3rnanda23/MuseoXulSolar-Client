import PropTypes from 'prop-types';
import Gallery from '../../components/galery/galery';
import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/footer';
import Destacados from '../../components/destacados/Destacados';
import Video from '../../components/video/Video';

const Home = () =>{

    return (
        <div className="h-screen">

            <NavBar />
            <Video/>
            <Destacados />
            <Gallery />
            <Footer/>

        </div>
    )

};

Home.propTypes = {
    cloudinary: PropTypes.object, //indica que esperamos que las props sean tipo object
  };

export default Home;