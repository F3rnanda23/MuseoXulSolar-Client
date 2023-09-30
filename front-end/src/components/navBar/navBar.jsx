import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import SearchBar from '../searchBar/searchBar';
import allResults from '../../views/Home/allResults';
import SearchResultsBanner from '../../searchResultsBanner/searchResultsBanner';

import { useDispatch, useSelector } from 'react-redux'
import Cookies from "universal-cookie";
import museoLogo from '../../imagenes/navbar/logoMuseo.png';
import glass from '../../imagenes/navbar/lupa.png'
import { logOut } from '../../redux/actions/actions';
import { auth } from '../forms/loginForm/config';
import { signOut } from 'firebase/auth';
import swal from 'sweetalert';
import { FormattedMessage } from 'react-intl';
import { langContext } from '../../context/langContext';



const NavBar = ({ searchActive, setSearchActive }) => {
    const navigate = useNavigate();

    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [español, setEspañol] = useState();

    const idioma = useContext(langContext);

    useEffect(() => {
        const storedEspañol = localStorage.getItem("español");
        if (storedEspañol === "true") {
            setEspañol(true);
        } else {
            setEspañol(false);
        }
    }, []);

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
    console.log(cookies);
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

    function handleDropdownMenu() {
        showMenu ? setShowMenu(false)
            : setShowMenu(true)
    }

    function signOff() {
        cookies.remove('id', { path: '/' });
        cookies.remove('name', { path: '/' });
        cookies.remove('email', { path: '/' });
        signOut(auth).then(() => {
            navigate("/")
        })
        navigate('/')
        swal('Sesión Cerrada')
        dispatch(logOut(false))
    }

    function handleLanguageToEnglish() {
        idioma.changeLanguage("en");
        localStorage.setItem("idioma", "en");
        setEspañol(false);
        localStorage.setItem("español", "false");
    }

    function handleLanguageToSpanish() {
        idioma.changeLanguage("es");
        localStorage.setItem("idioma", "es");
        setEspañol(true);
        localStorage.setItem("español", "true");
    }

    return (

        <div>
            <nav className='bg-gray-300 flex items-center justify-evenly flex-wrap'>
                <div className='cursor-pointer w-1/12  flex flex-shrink-0' onClick={handleLogoClick}>
                    <img src={museoLogo} alt="Logo del museo" />
                </div>

                <div class="block lg:hidden">
                    <button id='boton' class="flex items-center px-3 py-2 border rounded text-orange-200 border-orange-300 hover:text-white hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>

                <div className='text-orange-200 text-base lg:text-lg font-bold'>
                    <Link to="/Visits">
                        <FormattedMessage
                            id='nav.visitas'
                            defaultMessage='Visitas'
                        />
                    </Link>
                </div>

                <div className='text-orange-200 text-base lg:text-lg font-bold'>
                    <Link to="/Activities">
                        <FormattedMessage
                            id='nav.actividades'
                            defaultMessage='Actividades'
                        />
                    </Link>
                </div>

                <div className='text-orange-200 text-base lg:text-lg font-bold'>
                    <Link to="/Events">
                        <FormattedMessage
                            id='nav.eventos'
                            defaultMessage='Eventos'
                        />
                    </Link>
                </div>

                <div className={`relative`}>
                    <button className=" bg-gray-300 text-orange-200 hover:bg-gray-200 rounded text-base lg:text-lg font-bold"
                        onClick={handleDropdownMenu}>
                        <FormattedMessage
                            id='nav.apoya'
                            defaultMessage='Apoyá al museo'
                        />
                    </button>
                    <div className={`absolute  mt-2 p-2 rounded shadow-lg group-hover:block z-50 ${!showMenu ? "hidden" : "bg-white"}`}
                    >
                        <ul className='space-y-2'>
                            <li className='hover:bg-gray-200 px-1 text-orange-200 text-base lg:text-lg font-bold'
                                onClick={handleDropdownMenu}>
                                <Link to="/Donations">
                                    <FormattedMessage
                                        id='nav.donaciones'
                                        defaultMessage='Donaciones'
                                    />
                                </Link>
                            </li>
                            <li className='hover:bg-gray-200 text-orange-200 text-base lg:text-lg font-bold'
                                onClick={handleDropdownMenu}>
                                <Link to="/subscription">
                                    <FormattedMessage
                                        id='nav.membresia'
                                        defaultMessage='Membresía'
                                    />
                                </Link>
                            </li>
                            <li className='hover:bg-gray-200 text-orange-200 text-base lg:text-lg font-bold'
                                onClick={handleDropdownMenu}><Link to="/sponsorship">
                                    <FormattedMessage
                                        id='nav.benefactores'
                                        defaultMessage='Benefactores'
                                    /></Link></li>
                        </ul>
                    </div>
                </div>

                <div className='text-orange-200 text-base lg:text-lg font-bold'>
                    <Link to="/xulsolar">
                        Xul Solar
                    </Link>
                </div>

                <button onClick={handleSearchClick} className='flex font-bold text-base lg:text-lg   text-orange-200 '>
                    <FormattedMessage
                        id='nav.buscar'
                        defaultMessage='Buscar'
                    />
                    <img className='w-5 h-5' src={glass} alt="search" />
                </button>

                {español ? (<button onClick={() => {
                    handleLanguageToEnglish()
                }}
                    className='text-orange-200 text-base lg:text-lg font-bold'
                >EN</button>) :
                    (<button onClick={() => {
                        handleLanguageToSpanish()
                    }}
                        className='text-orange-200 text-base lg:text-lg font-bold'>ESP</button>)}

                {
                    active ?
                        <div className='text-orange-200 text-base lg:text-lg font-bold'>
                            <Link to="/miPerfil">
                                <FormattedMessage
                                    id='nav.perfil'
                                    defaultMessage='Perfil'
                                /></Link>
                        </div> : <div></div>
                }

                <div className='flex flex-col '>
                    {active ? (<button
                        onClick={signOff}
                        type="button"
                        className="inline-block w-8 md:w-36 h-7 md:h-8 lg:h-11 text-gray-200 bg-orange-200 bg-opacity-80 rounded bg-primary-100 text-xs md:text-xs lg:text-sm font-bold uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:scale-105 hover:bg-gray-300 hover:text-orange-200 hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                        <FormattedMessage
                            id='nav.cerrarsesion'
                            defaultMessage='Cerrar Sesión'
                        />

                    </button>) : (<button
                        onClick={handleClickLogIn}
                        type="button"
                        className=" mr-2 inline-block w-8 md:w-36 h-7 md:h-8 lg:h-11 text-gray-200 bg-orange-200 bg-opacity-80 rounded bg-primary-100 text-xs md:text-xs lg:text-sm font-bold uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:scale-105 hover:bg-gray-300 hover:text-orange-200 hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                        <FormattedMessage
                            id='nav.iniciarsesion'
                            defaultMessage='Iniciar Sesión'
                        />
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