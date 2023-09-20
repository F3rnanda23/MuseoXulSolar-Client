import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import SearchBar from '../searchBar/searchBar';
import allResults from '../../views/Home/allResults';
import SearchResultsBanner from '../../searchResultsBanner/searchResultsBanner';

import { useDispatch, useSelector } from 'react-redux'
import Cookies from "universal-cookie";
import museoLogo from '../../imagenes/navbar/museo-logo.png';
import glass from '../../imagenes/navbar/lupa.png'
import style from './navBar.module.css';
import { logOut } from '../../redux/actions/actions';
import { auth } from '../forms/loginForm/config';
import { signOut } from 'firebase/auth';


const NavBar = ({ searchActive, setSearchActive }) => {
    const navigate = useNavigate();

    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [showMenu, setShowMenu] = useState(false)


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



    const dispatch = useDispatch();
    const cookies = new Cookies();
    const active = useSelector((state) => state.active)

    function handleSearchClick() {
        setSearchActive(!searchActive);
    }

    function handleLogoClick() {
        navigate('/');
    }

    function handleClickLogIn() {
        navigate('/login');
    }

    function handleDropdownMenu(){
        showMenu ? setShowMenu(false)
        : setShowMenu(true)
    }

    function signOff() {
        cookies.remove('id', { path: '/' });
        cookies.remove('name', { path: '/' });
        cookies.remove('email', { path: '/' });
        signOut(auth).then(val => {
            console.log(val, "val");
            navigate("/")
        })
        navigate('/')
        alert('Sesión Cerrada')
        dispatch(logOut(false))
    }

    return (

        <div>
            <nav className='bg-gray-300 flex'>
                <div className={style.logoDelMuseo} onClick={handleLogoClick}>
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

                    <li className={`relative ${style.secciones}`}>
                        <button className=" bg-gray-300 text-orange-200 hover:bg-gray-200 rounded"
                        onClick={handleDropdownMenu}>
                            Patrocinios
                        </button>
                        <div className={`absolute  mt-2 p-2 rounded shadow-lg group-hover:block z-50 ${ !showMenu ? "hidden" : "bg-white"}`}
                        >
                            <ul className='space-y-2'>
                                <li className='hover:bg-gray-200 px-1'
                                    onClick={handleDropdownMenu}>
                                    <Link to="/Donations">Donaciones</Link></li>
                                <li className='hover:bg-gray-200'
                                    onClick={handleDropdownMenu}>
                                    <Link to="/subscription">Membresía</Link></li>
                                <li className='hover:bg-gray-200'
                                onClick={handleDropdownMenu}><Link to="/sponsorship">Benefactores</Link></li>
                            </ul>
                        </div>
                    </li>

                    <li className={style.secciones}>
                        <Link to="/xulsolar">Xul Solar</Link>
                    </li>
                </ul>
                <div className='flex ml-auto mr-4'>
                    <button onClick={handleSearchClick} className='flex font-bold text-lg mt-auto mb-5 text-orange-200 mr-4'>
                        Buscar
                        <img className='w-5 h-5' src={glass} alt="search" />
                    </button>

                    <button className='text-orange-200 text-lg font-bold mt-auto mb-5 mr-4'>English</button>

                    {active ? (<button
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

            <div>
                {searchActive && <SearchBar setSearch={setSearch} search={search} onSearch={handleSearch} setShowResults={setShowResults} />}
                {showResults && <SearchResultsBanner searchResults={searchResults} setShowResults={setShowResults} />}

            </div>

        </div>


    )

}

export default NavBar;