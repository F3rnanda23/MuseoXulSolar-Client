import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { Cloudinary } from '@cloudinary/url-gen';
import Home from './views/Home/Home';
import Visits from './views/Visits/Visits';
import Biography from './views/Biography/Biography';
import Store from './views/Store/Store';
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


import './App.css'


function App() {

  const location = useLocation();

  const [cloudinaryInstance, setCloudinaryInstance] = useState(null);
  const [searchActive, setSearchActive] = useState(false)

  useEffect(() => {
    const cld = new Cloudinary({ cloud: { cloudName: 'dtsmy1ksn' } });
    setCloudinaryInstance(cld);
  }, []);


  return (
    <div>

      {(location.pathname !== '/login' && location.pathname !== '/register') && <NavBar searchActive={searchActive} setSearchActive={setSearchActive} />}
      <Routes>

        <Route path="/" element={<Home cloudinary={cloudinaryInstance} searchActive={searchActive} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/visits" element={<Visits />} />
        <Route path="/Biography" element={<Biography />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Museum" element={<Museum />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/Exhibitions" element={<Exhibitions />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/activities" element={<Activities />} />
        <Route exact path='/detail/:id' element={<ActivityDetail/>}/>
        <Route path="/createActivities" element={<CreateActivityForm />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Donations" element={<Donations />} />
        <Route path="/Faqs" element={<Faqs />} />

      </Routes>

    </div>

  )
}

export default App
