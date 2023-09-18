import PropTypes from 'prop-types';
import Gallery from '../../components/galery/galery';
import Footer from '../../components/footer/footer';
import Destacados from '../../components/destacados/Destacados';
import Video from '../../components/video/Video';
import Cookies from 'universal-cookie';
import ImageHome from '../../ImagesHome/image1';

const Home = ({ searchActive }) => {

    const cookies = new Cookies();
    console.log('id' + cookies.get('id'))
    console.log('name' + cookies.get('name'))
    console.log('email' + cookies.get('email'))


    return (
        <div className="h-screen bg-gray-100">


            <Video/>
            <ImageHome/>
            <Destacados />
            <ImageHome/>
            <Gallery />
            <Footer />

        </div>
    )

};

Home.propTypes = {
    cloudinary: PropTypes.object, //indica que esperamos que las props sean tipo object
};

export default Home;