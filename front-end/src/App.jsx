import React from 'react';
import { Routes, Route  } from "react-router-dom";
import Home from './views/Home/Home';
import { Login } from './views/Login/Login';

import './App.css'

function App() {
  

  return (
      <div>
        <Routes>

          <Route path="/home" element={<Home />}  />
          <Route path="/login" element={<Login />}  />

        </Routes>
  
      </div>
      
  )
}

export default App
