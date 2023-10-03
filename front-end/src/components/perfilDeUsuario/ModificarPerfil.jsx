import React, { useState } from 'react';
import axios from 'axios';
import Cookies from "universal-cookie";
import { useNavigate } from 'react-router-dom';
import style from "./ModificarPerfil.module.css"
import { Image, Transformation } from 'cloudinary-react';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

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
    try {
      const response = await axios.put(`https://server-xul-solar-ag97.vercel.app/usuario/editar/${id}`, usuario);
      if (response.status === 200 || 204) {
        swal("success", 'Usuario actualizado', "success")
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // Manejar la respuesta 401 aquí (inicio de sesión fallido)
        swal("Oops", 'Se produjo un error al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.', "error");
      }
    }
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
    <div className={style.container2}>
      <div className={style.back}>
        <div>
          <Link to="/miPerfil"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKNJREFUSEvllMENgCAMRR+b6CY6ipPpJq7iKKaJmoYgAi0ne+Ei//nbTwOdK3TW5z+AAZiArbalJS0S8fUCLLWQL4AWP4DR04FZXH7mzYGL+BvATTwFcBWPAVq8dpbx90/r9QwEsANyWisJEFENkVjOgJzNlUqRKyQX07tdJie5l+zipGRVmJx8AeLBuy+7Oz1d13VzRHPLziSqL5fMwATrDjgBmishGepbbBgAAAAASUVORK5CYII=" alt="" /></Link>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.form}>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Nombre</label>
            <br />
            <input className={style.input} type="text" name='name' value={usuario.name} onChange={handleChange} placeholder='Coloca tu nombre...' />
            <br />
            <label htmlFor="" >Imagen</label>
            <br />
            <div className={style.buttonCloudinary}>
              <button type="button" onClick={openCloudinaryWidget} className="" value={usuario.image} onChange={handleChange}>Subir foto</button>
            </div>
            <br />
            <label htmlFor="">Telefono</label>
            <br />
            <input className={style.input} type="text" name='phone' value={usuario.phone} onChange={handleChange} placeholder='Coloca tu numero celular...' />
            <br />
            <br />
            <div className={style.button}>
              <button type='submit'>Actualizar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModificarPerfil