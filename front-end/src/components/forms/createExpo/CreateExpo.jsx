import React, { useState } from 'react';
import axios from "axios";
import swal from "sweetalert";
import style from "./CreateExpo.module.css";

function CreateExpo() {
    const [expo, setExpo] = useState({
        date: "",
        name: "",
        description: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://server-xul-solar.vercel.app/exposiciones/create", expo);
            setExpo({
                date: "",
                name: "",
                description: ""
            })

            if (response.status === 200 || 204) {
                swal("perfecto", "Exposicion creada", "success");
            }
        } catch (error) {
            swal("Error", "No se pudo crear la exposicion", "error");
        }
    }

    const handleChange = async (e) => {
        setExpo({
            ...expo,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className={style.container}>
            <h1 className={style.text}>Crea tu exposicion</h1>
            <div className={style.form}>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">Fecha</label>
                    <br />
                    <input type="date" name="date" value={expo.date} onChange={handleChange} className={style.input} />
                    <br />
                    <label htmlFor="">Nombre de la exposiciones</label>
                    <br />
                    <input type="text" name="name" value={expo.name} onChange={handleChange} className={style.input} />
                    <br />
                    <label htmlFor="">Descripcion de la exposicion</label>
                    <br />
                    <input type="text" name="description" value={expo.description} onChange={handleChange} className={style.input} />
                    <br />
                    <br />
                    <div className={style.button}>
                        <button type='submit' className={style.boton}>Crear</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateExpo