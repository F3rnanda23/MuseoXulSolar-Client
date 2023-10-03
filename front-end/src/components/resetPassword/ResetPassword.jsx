import axios from 'axios'
import React, { useState } from 'react'
import style from "./ResetPassword.module.css"
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

function ResetPassword() {

    const [email, setEmail] = useState({
        email: "",
    })


    const handlerChange = async (e) => {
        setEmail({
            email: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`https://server-xul-solar.vercel.app/password/restore/${email.email}`);
            setEmail({
                email: ""
            });
            if (response.status === 200 || response.status === 204) {
                swal("success", 'Token enviado a tu correo', "success")
            }
        } catch (error) {
            console.error(error); // Puedes registrar el error en la consola para fines de depuración.
            if (error.response.status === 404) {
                // Manejar la respuesta 401 aquí (inicio de sesión fallido)
                swal("error", 'El email es incorrecto', "error");
            } else {
                // Mostrar una alerta de error genérica en otros casos
                swal("Oops", 'Se produjo un error al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.', "error");
            }
        }
    }


    return (

        <div className={style.container2}>
            <div className={style.back}>
                <div>
                    <Link to="/login"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKNJREFUSEvllMENgCAMRR+b6CY6ipPpJq7iKKaJmoYgAi0ne+Ei//nbTwOdK3TW5z+AAZiArbalJS0S8fUCLLWQL4AWP4DR04FZXH7mzYGL+BvATTwFcBWPAVq8dpbx90/r9QwEsANyWisJEFENkVjOgJzNlUqRKyQX07tdJie5l+zipGRVmJx8AeLBuy+7Oz1d13VzRHPLziSqL5fMwATrDjgBmishGepbbBgAAAAASUVORK5CYII=" alt="" /></Link>
                </div>
            </div>
            <div className={style.container}>
                <h1 className={style.text}>Ingresa tu email para restablecer tu contraseña</h1>
                <div className={style.form}>
                    <form onSubmit={handleSubmit}>
                        <input
                            className={style.input}
                            type="text"
                            placeholder='ingresa tu email...'
                            value={email.email}
                            onChange={handlerChange}
                        />
                        <br />
                        <br />
                        <div className={style.button}>
                            <button type='submit' className={style.boton}>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword