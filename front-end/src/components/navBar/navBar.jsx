import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import SearchBar from '../searchBar/searchBar';
import allResults from '../../views/Home/allResults';
import SearchResultsBanner from '../../searchResultsBanner/searchResultsBanner';
import museoLetras from '../../imagenes/navbar/panKlub.png';
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
    const [MenuHidden, setMenuHidden] = useState(true);

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
    const admin = cookies.get('admin')

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

    function handleAdmin() {
        navigate('/Admin')
    }


    function signOff() {
        cookies.remove('id', { path: '/' });
        cookies.remove('name', { path: '/' });
        cookies.remove('email', { path: '/' });
        cookies.remove('admin', { path: '/' });
        signOut(auth).then(() => {
            navigate("/")
        })
        navigate('/')
        swal({
            title: "Estas seguro?",
            text: "Deberas iniciar sesion nuevamente!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    dispatch(logOut(false))
                    swal("Listo, sesion cerrada!", {
                        icon: "success",
                    });
                } else {
                    swal("No cerraste sesion!");
                }
            });
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

    const toggleMenu = () => {
        setMenuHidden(!MenuHidden);
    };

    return (

        <div>
            <nav className='bg-gray-200 flex justify-between items-center md:justify-evenly flex-wrap relative'>
                <div className='cursor-pointer w-[90px]  flex flex-shrink-0' onClick={handleLogoClick}>
                    <img src={museoLogo} alt="Logo del museo" />
                </div>
                <div className=' sm:w-1/2  md:mt-9 md:absolute hidden sm:block '>
                    <img src={museoLetras} className='' />
                </div>

                <div className="block mr-2 md:hidden">
                    <button onClick={toggleMenu}
                        className="flex items-center px-3 py-2 border rounded text-orange-200 border-orange-300 hover:text-black hover:border-black">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>

                <div className={`${MenuHidden ? 'hidden' : 'flex flex-col items-center'} w-full  items-center flex-grow  md:items-start md:flex md:flex-row md:justify-evenly md:flex-wrap md:w-auto`}>
                    <div className='text-orange-200 text-sm md:text-base font-bold inline-block hover:transition duration-150 ease-in-out hover:scale-105'>
                        <Link to="/Visits" >
                            <FormattedMessage
                                id='nav.visitas'
                                defaultMessage='Visitas'
                            />
                        </Link>
                    </div>

                    <div className='text-orange-200 text-sm md:text-base  font-bold inline-block hover:transition duration-150 ease-in-out hover:scale-105'>
                        <Link to="/Activities">
                            <FormattedMessage
                                id='nav.actividades'
                                defaultMessage='Actividades'
                            />
                        </Link>
                    </div>

                    <div className='text-orange-200 text-sm md:text-base  font-bold inline-block hover:transition duration-150 ease-in-out hover:scale-105'>
                        <Link to="/Events">
                            <FormattedMessage
                                id='nav.eventos'
                                defaultMessage='Eventos'
                            />
                        </Link>
                    </div>

                    <div className={`relative`}>
                        <button className=" text-orange-200 rounded text-sm md:text-base  font-bold inline-block hover:transition duration-150 ease-in-out hover:scale-105"
                            onClick={handleDropdownMenu}>
                            <FormattedMessage
                                id='nav.apoya'
                                defaultMessage='Apoyá al museo'
                            />
                        </button>
                        <div className={`absolute  mt-2 p-2 rounded shadow-lg group-hover:block z-50 ${!showMenu ? "hidden" : "bg-white"}`}
                        >
                            <ul className='space-y-2'>
                                <li className='hover:bg-gray-200 px-1 text-orange-200 text-sm md:text-base rounded font-bold '
                                    onClick={handleDropdownMenu}>
                                    <Link to="/Donations">
                                        <FormattedMessage
                                            id='nav.donaciones'
                                            defaultMessage='Donaciones'
                                        />
                                    </Link>
                                </li>
                                <li className='hover:bg-gray-200 text-orange-200 text-sm md:text-base  font-bold rounded px-1'
                                    onClick={handleDropdownMenu}>
                                    <Link to="/subscription">
                                        <FormattedMessage
                                            id='nav.membresia'
                                            defaultMessage='Membresía'
                                        />
                                    </Link>
                                </li>
                                <li className='hover:bg-gray-200 text-orange-200 text-sm md:text-base  font-bold rounded px-1'
                                    onClick={handleDropdownMenu}><Link to="/sponsorship">
                                        <FormattedMessage
                                            id='nav.benefactores'
                                            defaultMessage='Benefactores'
                                        /></Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className='text-orange-200 text-sm md:text-base  font-bold inline-block hover:transition duration-150 ease-in-out hover:scale-105'>
                        <Link to="/Biography">
                            Xul Solar
                        </Link>
                    </div>

                    <button onClick={handleSearchClick} className='flex font-bold text-sm md:text-base  text-orange-200 hover:transition duration-150 ease-in-out hover:scale-105 '>
                        <FormattedMessage
                            id='nav.buscar'
                            defaultMessage='Buscar'
                        />
                        <img className='w-5 h-5' src={glass} alt="search" />
                    </button>

                    {español ? (<button onClick={() => {
                        handleLanguageToEnglish()
                    }}
                        className='flex text-orange-200 text-sm md:text-base  font-bold hover:transition duration-150 ease-in-out hover:scale-105'
                    >EN</button>) :
                        (<button onClick={() => {
                            handleLanguageToSpanish()
                        }}
                            className='flex text-orange-200 text-sm md:text-base font-bold hover:transition duration-150 ease-in-out hover:scale-105'>ESP</button>)}

                    {
                        active ?
                            <div className='text-orange-200 font-bold hover:transition duration-150 ease-in-out hover:scale-105'>
                                <Link to="/miPerfil">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </Link>
                            </div> : <div></div>
                    }
                    {admin ? (<button onClick={handleAdmin} className='flex font-bold text-sm md:text-base  text-orange-200 hover:transition duration-150 ease-in-out hover:scale-105 '>
                        Admin
                    </button>) : null}


                    <div className='mt-1 md:mt-5'>
                        {active ? (<button
                            onClick={signOff}
                            type="button"
                            className="inline-block w-24 mb-2 md:mb-0 md:w-32 lg:w-36 h-7 md:h-11  text-white bg-orange-200 bg-opacity-80 rounded bg-primary-100 text-xs md:text-xs lg:text-sm font-bold uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:scale-105 hover:border hover:border-orange-200 hover:bg-gray-200 hover:text-orange-200 hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                            <FormattedMessage
                                id='nav.cerrarsesion'
                                defaultMessage='Cerrar Sesión'
                            />

                        </button>) : (<button
                            onClick={handleClickLogIn}
                            type="button"
                            className=" inline-block w-24 mb-2 md:mb-0 md:w-32 lg:w-36 h-7 md:h-11 text-white bg-orange-200 bg-opacity-80 rounded bg-primary-100 text-xs md:text-xs lg:text-sm font-bold uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border hover:border-orange-200 hover:scale-105  hover:bg-gray-200 hover:text-orange-200 hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                            <FormattedMessage
                                id='nav.iniciarsesion'
                                defaultMessage='Iniciar Sesión'
                            />
                        </button>)}
                    </div>
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