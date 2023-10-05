import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { Cloudinary } from '@cloudinary/url-gen';
import Home from './views/Home/Home';
import Visits from './views/Visits/Visits';
import Biography from './views/Biography/Biography';
import Fundacion from './views/Fundacion/Fundacion';
import Museum from './views/Museum/Museum';
import Collection from './views/Collection/Collection';
import { Login } from './views/Login/Login';
import { Register } from './views/Register/Register';
import Exhibitions from './views/Exhibitions/Exhibitions';
import Education from './views/Education/Education';
import Activities from './views/Activities/Activities';
import ActivityDetail from './views/ActivityDetail/ActivityDetail';
import CreateActivityForm from './components/forms/createActivityForm/createActivityForm';
import Events from './views/Events/Events';
import Donations from './views/Donations/Donations';
import Faqs from './views/FAQS/FAQS';
import NavBar from './components/navBar/navBar';
import { Subscription } from './views/Donations/Subscription';
import Sponsorship from './views/Donations/Sponsorship';
import Comments from './views/Comments/Comments';
import ViewComents from './views/Comments/ViewComments';
import ResetPassword from "./components/resetPassword/ResetPassword";
import PutToken from './components/resetPassword/PutToken';
import PerfilDeUsuario from './components/perfilDeUsuario/PerfilDeUsuario';
import AdminDash from './views/AdminDash/AdminDash';
import ModificarPerfil from './components/perfilDeUsuario/ModificarPerfil';
import ActividadesUsuario from './components/perfilDeUsuario/ActividadesUsuario';
import ErrorPage from './views/ErrorPage/ErrorPage';
import Testimonios from './views/Testimonio/Testimonios';
import Esposiciones from './views/Esposiciones/Esposiciones';
import Bibliografia from './views/bibliografia/Bibliografia';
import NotasExposiciones from './views/Esposiciones/NotasExposiciones';

import { Catalog } from './views/Catalog/Catalog';
import './App.css'
import Cookies from 'universal-cookie';


function App() {

  const location = useLocation();

  const [cloudinaryInstance, setCloudinaryInstance] = useState(null);
  const [searchActive, setSearchActive] = useState(false)

  useEffect(() => {
    const cld = new Cloudinary({ cloud: { cloudName: 'dtsmy1ksn' } });
    setCloudinaryInstance(cld);
  }, []);

  const cookies = new Cookies();
  const adminTrue = cookies.get('admin')
  



  return (
    <div>

      {(location.pathname !== '/login' && location.pathname !== '/register') && <NavBar searchActive={searchActive} setSearchActive={setSearchActive} />}
      <Routes>

        <Route path="/" element={<Home cloudinary={cloudinaryInstance} searchActive={searchActive} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/visits" element={<Visits />} />
        <Route path="/Biography" element={<Biography />} />
        <Route path="/fundacion" element={<Fundacion />} />
        <Route path="/Museum" element={<Museum />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/Exhibitions" element={<Exhibitions />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/activities" element={<Activities />} />
        <Route exact path='/detail/:id' element={<ActivityDetail />} />
        <Route path="/createActivities" element={<CreateActivityForm />} />
        <Route path="/Donations" element={<Donations />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/Comments" element={<Comments />} />
        <Route path="/viewComments" element={<ViewComents />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/token" element={<PutToken />} />
        <Route path="/miPerfil" element={<PerfilDeUsuario />} />
        <Route path="/Admin" element={adminTrue ? <AdminDash /> : <Home />} />
        <Route path="/modificarPerfil" element={<ModificarPerfil />} />
        <Route path="/perfilActividades" element={<ActividadesUsuario />} />
        <Route path="/testimonios" element={<Testimonios />} />
        <Route path="/esposiciones" element={<Esposiciones />} />
        <Route path="/Bibliografia" element={<Bibliografia />} />
        <Route path="/notasExposiciones" element={<NotasExposiciones />} />
        <Route path="/catalogoRazonado" element={<Catalog />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App