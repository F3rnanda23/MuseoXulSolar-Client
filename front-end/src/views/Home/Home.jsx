import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/footer';
import Destacados from '../../components/destacados/Destacados';

const Home = () =>{

    return (
        <div className="h-screen w-screen">

            <NavBar />
            <Destacados />
            <Footer/>

        </div>
    )

};

export default Home;