import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Benefactores.module.css";

function Benefactores() {

    useEffect(() => {
        allPatrocinios()
    }, []);

    const [card, setCard] = useState([])

    const allPatrocinios = async () => {
        const { data } = await axios.get("https://server-xul-solar-ag97.vercel.app/patrocinios/");
        setCard(data)
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.text}>BENEFACTORES</h1>
            <br />
            <br />
            {
                !card.length? (<h1 className={styles.text}>No hay benefactores</h1>): null
            }
            <div className={styles.containerCard}>
                {card.length > 0 ? (
                    card.map((obj) => (
                        <div className={styles.card} key={obj.id}>
                            <p>Nombre: </p>
                            <h1>{obj.name}</h1>
                            <img src={obj.image} alt={obj.name} />
                            <p>Email: </p>
                            <p>{obj.mail}</p>
                            <p>Telefono: </p>
                            <p>{obj.phone}</p>
                        </div>
                    ))
                ) : null}

            </div>
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}

export default Benefactores