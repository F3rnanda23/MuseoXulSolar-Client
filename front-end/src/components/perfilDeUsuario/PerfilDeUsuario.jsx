import React, { useEffect } from 'react'
import Cookies from "universal-cookie";
import axios from 'axios';
import { useState } from 'react';


function PerfilDeUsuario() {

    const [usuario, setUsuario] = useState({
        name: "",
        image:"",
        phone: "",
        birthday: "",
        Suscripciones: [],
        Comentarios: [],
        Actividades: []
    });

    const cookies = new Cookies();
    console.log(cookies);
    console.log(cookies.cookies.id);
    const id = cookies.cookies.id;
    useEffect(() => {
        searchUserById(id)
    }, [id]);

    const searchUserById = async (id) => {
        const response = await axios.get(`http://localhost:3001/usuario/id/${id}`);
        const { name, phone, birthday, Suscripciones, Comentarios, Actividades,image } = response.data;
        setUsuario({
            name: name,
            phone: phone,
            birthday: birthday,
            image: image,
            Suscripciones: Suscripciones,
            Comentarios: Comentarios,
            Actividades: Actividades
        })
    }

    // const openCloudinaryWidget = () => {
    //     // Abre el widget de Cloudinary al hacer clic en el botón
    //     cloudinary.openUploadWidget(
    //       {
    //         cloudName: 'dtsmy1ksn',
    //         uploadPreset: 'primero',
    //         sources: ['local', 'url', 'camera', 'facebook', 'dropbox', 'instagram'],
    //         multiple: false,
    //         cropping: 'server',
    //         croppingAspectRatio: 1,
    //         folder: 'uploads', // Carpeta de destino en Cloudinary
    //       },
    //       (error, result) => {
    //         if (!error && result && result.event === 'success') {
    //           // La imagen se ha subido con éxito, puedes manejarla aquí
    //           setActivitiesData({
    //             ...activitiesData,
    //             image: result.info.secure_url // Actualiza la URL de la imagen en el estado
          
    //           });
    //         }
    //       }
    //     );
    //   };

    return (
        <div>
            <h1>Tu perfil</h1>
            <img src={usuario.image} alt="imagen del usuario" />
            <p>Nombre: {usuario.name}</p>
            <p>Teléfono: {usuario.phone}</p>
            <p>Fecha de nacimiento: {usuario.birthday}</p>
            <h2>Suscripciones:</h2>
            <ul>
                {usuario.Suscripciones?.map((s, index) => (
                    <li key={index}>
                        <ul>
                            <li>Tu membresía: {s.tipo}</li>
                            <li>Desde: {s.date}</li>
                        </ul>
                    </li>
                ))}
            </ul>
            <h2>Tus comentarios:</h2>
            <ul>
                {usuario.Comentarios?.map((s, index) => (
                    <li key={index}>
                        <ul>
                            <li>Descripcion: {s.description}</li>
                        </ul>
                    </li>
                ))}
            </ul>
            <h2>Tus actividades:</h2>
            <ul>
                {usuario.Actividades?.map((s, index) => (
                    <li key={index}>
                        <ul>
                            <li>Nombre: {s.name}</li>
                            <li>Fecha: {s.date}</li>
                            <li>Descripcion: {s.description}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PerfilDeUsuario