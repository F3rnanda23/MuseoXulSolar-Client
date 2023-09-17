// import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Cookies from "universal-cookie";
import museoLogo from '../../imagenes/navbar/museo-logo.png';
import glass from '../../imagenes/navbar/lupa.png'
import style from './navBar.module.css';
import { logOut } from '../../redux/actions/actions';


const NavBar = ({ searchActive, setSearchActive }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cookies = new Cookies();
    const active = useSelector((state) => state.active)
    
    function handleSearchClick(){
        setSearchActive(!searchActive);
    }

    function handleClickLogIn() {
        navigate('/login');
    }

    function signOff(){
        cookies.remove('id', {path: '/'})
        cookies.remove('name', {path: '/'})
        cookies.remove('email',{path: '/'})
        navigate('/')
        alert('Sesión Cerrada')
        dispatch(logOut(false))
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
        <div className='flex ml-auto mr-4'>
        <button onClick={handleSearchClick} className='flex font-bold text-lg mt-auto mb-5 text-orange-200 mr-4'>
               Buscar
                <img className='w-5 h-5'src={glass} alt="search" />
            </button>

            <button className='text-orange-200 text-lg font-bold mt-auto mb-5 mr-4'>English</button>
            {active ? (   <button
                onClick={signOff}
                type="button"
                className="mt-4 md:mt-7 lg:mt-10  mr-2 ainline-block w-8 md:w-36 lg:w-48 h-7 md:h-8 lg:h-11 text-gray-200 bg-orange-200 bg-opacity-80 rounded bg-primary-100 px-6 md:px-1 lg:px-8 pb-2 pt-1.5 md:pt-2 lg:pt-2.5 text-xs md:text-xs lg:text-sm font-bold uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:scale-105 hover:bg-gray-300 hover:text-orange-200 hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                Cerrar Sesión
            </button>) : (<button
                onClick={handleClickLogIn}
                type="button"
                className="mt-4 md:mt-7 lg:mt-10  mr-2 ainline-block w-8 md:w-36 lg:w-48 h-7 md:h-8 lg:h-11 text-gray-200 bg-orange-200 bg-opacity-80 rounded bg-primary-100 px-6 md:px-1 lg:px-8 pb-2 pt-1.5 md:pt-2 lg:pt-2.5 text-xs md:text-xs lg:text-sm font-bold uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:scale-105 hover:bg-gray-300 hover:text-orange-200 hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                Iniciar Sesión
            </button>)}

        </div>
            
        </nav>
    )

}

export default NavBar;