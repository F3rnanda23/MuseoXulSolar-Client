import React, { useState } from 'react';
import axios from 'axios';
import Cookies from "universal-cookie";
import { useNavigate } from 'react-router-dom';
import style from "./ModificarPerfil.module.css"
import { Image, Transformation } from 'cloudinary-react';

function ModificarPerfil() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    name: "",
    phone: "",
    image: "",
  });
  const cookies = new Cookies();
  console.log(cookies.cookies.id);
  const id = cookies.cookies.id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put(`http://localhost:3001/usuario/editar/${id}`, usuario);
    navigate("/miPerfil")
  }

  const handleChange = async (e) => {
    setUsuario({
      [e.target.name]: e.target.value
    });
  }

  const openCloudinaryWidget = () => {
    // Abre el widget de Cloudinary al hacer clic en el botón
    cloudinary.openUploadWidget(
      {
        cloudName: 'dtsmy1ksn',
        uploadPreset: 'primero',
        sources: ['local', 'url', 'camera', 'facebook', 'dropbox', 'instagram'],
        multiple: false,
        cropping: 'server',
        croppingAspectRatio: 1,
        folder: 'uploads', // Carpeta de destino en Cloudinary
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          // La imagen se ha subido con éxito, puedes manejarla aquí
          setUsuario({
            ...usuario,
            image: result.info.secure_url // Actualiza la URL de la imagen en el estado
          });
        }
      }
    );
  };

  return (
    <div className={style.container}>
      <div className={style.form}>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Nombre</label>
          <br />
          <input className={style.input} type="text" name='name' value={usuario.name} onChange={handleChange} placeholder='Coloca tu nombre...'/>
          <br />
          <label htmlFor="" >Imagen</label>
          <br />
          <div className={style.buttonCloudinary}>
            <button type="button" onClick={openCloudinaryWidget} className="" value={usuario.image} onChange={handleChange}>Subir foto</button>
          </div>
          <br />
          <label htmlFor="">Telefono</label>
          <br />
          <input className={style.input} type="text" name='phone' value={usuario.phone} onChange={handleChange} placeholder='Coloca tu numero celular...'/>
          <br />
          <br />
          <div className={style.button}>
            <button type='submit'>Actualizar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModificarPerfil