import React, { useEffect, useState } from 'react';
import { Routes, Route  } from "react-router-dom";
import { Cloudinary } from '@cloudinary/url-gen';

import Home from './views/Home/Home';
import Visits from './views/Visits/Visits';
import Biography from './views/Biography/Biography';
import Store from './views/Store/Store';
import Museum from './views/Museum/Museum';
import Collection from './views/Collection/Collection';
import { Login } from './views/Login/Login';
import Exhibitions from './views/Exhibitions/Exhibitions';
import Education from './views/Education/Education';
import Activities from './views/Activities/Activities';
import Events from './views/Events/Events'
import Donations from './views/Donations/Donations'
import Faqs from './views/FAQS/FAQS';

import './App.css'

function App() {
  
  const [cloudinaryInstance, setCloudinaryInstance] = useState(null);

  useEffect(() => {
    const cld = new Cloudinary({ cloud: { cloudName: 'dtsmy1ksn' } });
    setCloudinaryInstance(cld);
  }, []);


  return (
      <div>
        <Routes>

          <Route path="/" element={<Home cloudinary={cloudinaryInstance}/>}  />
          <Route path="/login" element={<Login />}  />
          <Route path="/visits" element={<Visits />}  />
          <Route path="/Biography" element={<Biography/>}  />
          <Route path="/Store" element={<Store />}  />
          <Route path="/Museum" element={<Museum />}  />
          <Route path="/Collection" element={<Collection />}  />
          <Route path="/Exhibitions" element={<Exhibitions />}  />
          <Route path="/Education" element={<Education />}  />
          <Route path="/Activities" element={<Activities />}  />
          <Route path="/Events" element={<Events />}  />
          <Route path="/Donations" element={<Donations />}  />
          <Route path="/Faqs" element={<Faqs />}  />

        </Routes>
  
      </div>
      
  )
}

export default App
