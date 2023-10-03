import axios from 'axios'
import React, { useState } from 'react';
import style from "./PutToken.module.css";
import swal from 'sweetalert';

function PutToken() {

    const [visible, setVisible] = useState(false)

    const [token, setToken] = useState({
        newPassword: "",
        token: ""
    })

    const showPassword = () => {
        !visible ? setVisible(true)
            : setVisible(false)
    }

    const handlerChange = async (e) => {
        const { name, value } = e.target;
        setToken({
            ...token,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`https://server-xul-solar.vercel.app/password/restablecer/`, token);
            setToken({
                newPassword: "",
                token: ""
            })
            if (response.status === 200 || 204) {
                swal("success", 'Contraseña cambiada con exito', "success")
            }
        } catch (error) {
            console.error(error); // Puedes registrar el error en la consola para fines de depuración.
            if (error.response && error.response.status === 404) {
                // Manejar la respuesta 401 aquí (inicio de sesión fallido)
                swal("Oops", 'Se produjo un error al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.', "error");
            }
        }
    }


    return (
        <div className={style.container}>
            <h1 className={style.text}>Restablece tu contraseña</h1>
            <div className={style.form}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Token de reestablecimiento:</label>
                    <br />
                    <input
                        className={style.input}
                        type="text"
                        name='token'
                        placeholder='Token de restablecimiento'
                        value={token.token}
                        onChange={handlerChange}
                    />
                    <br />
                    <label htmlFor="">Contraseña:</label>
                    <br />
                    <div className={style.inputContainer}>
                        <input
                            className={style.input}
                            type={visible ? "text" : "password"}
                            name='newPassword'
                            placeholder='ingresa tu nueva contraseña...'
                            value={token.newPassword}
                            onChange={handlerChange}
                        />
                        <button className={style.ojo}
                            onClick={showPassword}
                            type="button">
                            {visible ? (<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9UlEQVR4nO2UPQ4BURSFv0I0hkItsRTDdixAiN5Yhh0IVkBlA7qpGBagUJKXnEhw3/OmmSh8yW3euefe9w9/fp02MAQ2wBG4KY4aGyqnNDVgDFyB+5e4Ktd5ougA+4jC97fYyxukC+SGeQn0gIYiBVZGXq4aJglwMEyjwIQmRv5BtT5YeGbuqANz4AwUQKYxx9rwuVovpJ597UnPDM2NOfoer6v5ZOdJSqSfDe0irenxbss0KAztJK0V0yD9sszM0GbSBjFb5DvklbS6mhTGIW9iDjl0TSf4mZa5pqGHttZtSRQDz8yDD62Sr6KSz66S7/pPdTwA4jXIWC41knQAAAAASUVORK5CYII="></img>) : (<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABXElEQVR4nN2Vu0oDQRSGvyJewA2IYlAI5Al8A8EIYq1vIeQJtNHSZ7AQUlmbWIuYysLG9VKpkJDSQoIKgq6s/MgwzNlNhEX0wLAwc875Zs9t4D/KVJHOd4FbYKGom8dAom9F+2XgEHgAnoFXoAccAw1gZhRIxYCsA2/a99cA2AJKw0IWgfcRIQlwDlTznM8DN55h7EAmFMo60ApA7oCa5Tw1vDZuFzsQV7YDuukFoxBgP6B8auTElXbArukrLRk3X5XTbgZkxbBNw/gtJ4bSrM4fM8JVNmw7LqBjKEU672fkZNKorjMXUM/5zb2cxG94kA9g2c9DM+CkpbNxQfoKVzcHchAohq9w+D2QqBR9SZ1eGc14kTUwa2oWH9JWtURK/JpKOBSuMXKkqrZPRlxWnwSlpAE2GMLxE3D/EwgaxQ2N5p5G9YuSfARsAtOBKVzIozUHXAI7/NXnll+RT3SJxryK+e+1AAAAAElFTkSuQmCC"></img>)}</button>
                    </div>
                    <br />
                    <br />
                    <div className={style.button}>
                        <button type='submit' className={style.boton}>Enviar</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default PutToken