import PropTypes from 'prop-types';
import Gallery from '../../components/galery/galery';
import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/footer';
import Destacados from '../../components/destacados/Destacados';
import Video from '../../components/video/Video';
import Cookies from 'universal-cookie';

const Home = () =>{

    const cookies = new Cookies();
    console.log('id' + cookies.get('id'))
    console.log('name' + cookies.get('name'))
    console.log('email' + cookies.get('email'))

    return (
        <div className="h-screen bg-gray-100">

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