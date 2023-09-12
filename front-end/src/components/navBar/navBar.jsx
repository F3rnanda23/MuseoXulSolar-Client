import { Link, useNavigate } from  'react-router-dom';
import museoLogo from '../../imagenes/navbar/museo-logo.png';
import style from './navBar.module.css';

const NavBar = () =>{
    const navigate = useNavigate();
  
  
      return(
        <nav className={style.containerNav}>
            <div className={style.logoDelMuseo}>
                <img src={museoLogo} alt="Logo del museo" />
            </div>

            <ul className={style.containerSecciones}>
                <li className={style.secciones}>
                    <Link to="/visitas">Visitas</Link>
                </li>

                <li className={style.secciones}>
                    <Link to="/actividades">Actividades</Link>
                </li>

                <li className={style.secciones}>
                    <Link to="/eventos">Eventos</Link>
                </li>

                <li className={style.secciones}>
                    <Link to="/patrocinios">Patrocinios</Link>
                </li>

                <li className={style.secciones}>
                    <Link to="/xulsolar">Xul Solar</Link>
                </li>
            </ul>

            <button className={style.botonNav} onClick={() => navigate('/login')}>Iniciar Sesión</button>
   
              
        </nav>
      )
  
  }
  
  export default NavBar;