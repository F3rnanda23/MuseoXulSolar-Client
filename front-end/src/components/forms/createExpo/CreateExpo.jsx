import React, { useState } from 'react';
import axios from "axios"

function CreateExpo() {
    const [expo, setExpo] = useState({
        date: "",
        name: "",
        description: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("https://server-xul-solar.vercel.app/exposiciones/create", expo);
        setExpo({
            date: "",
            name: "",
            description: ""
        })
    }

    const handleChange = async (e) => { }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Fecha</label>
                <input type="text" name="date" value={expo.date} />
                <label htmlFor="">Nombre de la exposiciones</label>
                <input type="text" name="name" value={expo.name} />
                <label htmlFor="">Descripcion de la exposicion</label>
                <input type="text" name="description" value={expo.description} />
                <button type='submit'>Crear</button>
            </form>
        </div>
    )
}

export default CreateExpo