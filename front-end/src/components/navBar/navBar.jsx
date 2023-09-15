import { Link, useNavigate } from 'react-router-dom';
import museoLogo from '../../imagenes/navbar/museo-logo.png';
import style from './navBar.module.css';

const NavBar = () => {
    const navigate = useNavigate();

    function handleClickLogIn() {
        navigate('/login');
    }

    return (

        <nav className='bg-gray-300 flex'>
            <div className={style.logoDelMuseo}>
                <img src={museoLogo} alt="Logo del museo" />
            </div>

            <ul className={style.containerSecciones}>
                <li className={style.secciones}>
                    <Link to="/Visits">Visitas</Link>
                </li>

                <li className={style.secciones}>
                    <Link to="/Activities">Actividades</Link>
                </li>

                <li className={style.secciones}>
                    <Link to="/Events">Eventos</Link>
                </li>

                <li className={style.secciones}>
                    <Link to="/Donations">Patrocinios</Link>
                </li>

                <li className={style.secciones}>
                    <Link to="/xulsolar">Xul Solar</Link>
                </li>
            </ul>

            {/* <button className={style.botonNav} onClick={() => navigate('/login')}>Iniciar Sesión</button> */}
            <button
                onClick={handleClickLogIn}
                type="button"
                className="mt-12 ml-auto mr-6 ainline-block h-10 text-gray-200 bg-orange-200 bg-opacity-80 rounded bg-primary-100 px-10 pb-2 pt-2.5 text-sm font-bold uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:scale-105 hover:bg-gray-300 hover:text-orange-200 hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                Iniciar Sesión
            </button>

            <h4 className='text-orange-200 font-bold mt-auto mb-5 mr-3'>English</h4>

        </nav>
    )

}

export default NavBar;