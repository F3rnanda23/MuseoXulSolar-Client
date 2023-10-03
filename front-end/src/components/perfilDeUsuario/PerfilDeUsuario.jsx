import React, { useEffect } from 'react'
import Cookies from "universal-cookie";
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from "./PerfilDeUsuario.module.css"

function PerfilDeUsuario() {

    const [usuario, setUsuario] = useState({
        name: "",
        image: "",
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
        const response = await axios.get(`https://server-xul-solar.vercel.app/usuario/id/${id}`);
        const { name, phone, birthday, Suscripciones, Comentarios, Actividades, image } = response.data;
        setUsuario({
            name: name,
            phone: phone,
            birthday: birthday,
            image: image,
            Suscripciones: Suscripciones,
            Comentarios: Comentarios,
            Actividades: Actividades
        })
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };

    const showSubs = (subsTipo) => {
        let nombreSuscripcion = '';
    
        if (subsTipo === '1') {
            nombreSuscripcion = 'Amigos Xul Solar ($30/año)';
        } else if (subsTipo === '2') {
            nombreSuscripcion = 'Amigos Xul Solar Plus ($50/año)';
        } else {
            nombreSuscripcion = 'Tipo de suscripción no válido';
        }
    
        return nombreSuscripcion;
    };


    return (
        <div className={style.container2}>
            
            <div className={style.container}>
                <div className={style.card}>
                    <br />
                    <div className={style.h1}>
                        <h1>Tu perfil</h1>
                    </div>
                    <br />
                    <img src={usuario.image} alt="imagen del usuario" className={style.imagen} />
                    <br />
                    <p>Nombre: {usuario.name}</p>
                    <br />
                    <p>Teléfono: {usuario.phone}</p>
                    <br />
                    <p>Fecha de nacimiento: {usuario.birthday}</p>
                    <br />
                    <h2>Suscripciones:</h2>
                    <br />
                    <ul>
                        {usuario.Suscripciones?.map((s, index) => (
                            <li key={index}>
                                <ul>
                                    <li>Tu membresía: {showSubs(s.tipo)}</li>
                                   
                                    <li>Desde: {formatDate(s.date)}</li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                    <br />
                    <h2>Tus comentarios:</h2>
                    <br />
                    <ul>
                        {usuario.Comentarios?.map((s, index) => (
                            <li key={index}>
                                <ul>
                                    <li>Descripcion: {s.description}</li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                    <br />
                    <h2>Tus actividades:</h2>
                    <br />
                    <Link to="/perfilActividades">
                        <button className={style.botonActividades}>Ver mis actividades</button>
                    </Link>
                    <br />

                    <div className={style.button}>
                        <Link to="/modificarPerfil">
                            <button>Modifica tu perfil</button>
                        </Link>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default PerfilDeUsuario