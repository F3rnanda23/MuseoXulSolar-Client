import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Sponsorship.module.css";






const Sponsorship = () => {
    useEffect(() => {
        allPatrocinios()
    }, []);

    const [patro, setPatro] = useState({
        name: "",
        image: "",
        phone: "",
        mail: ""
    })
    const [card, setCard] = useState([])

    const allPatrocinios = async () => {
        const { data } = await axios.get("https://server-xul-solar-ag97.vercel.app/patrocinios/");
        setCard(data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("https://server-xul-solar-ag97.vercel.app/patrocinios/create", patro);
        setPatro({
            name: "",
            image: "",
            phone: "",
            mail: ""
        });
        allPatrocinios()
    };

    const handleChange = async (e) => {
        e.preventDefault();
        setPatro({
            ...patro,
            [e.target.name]: e.target.value,
        });
    };

    const handleDelete = async (id) => {
        // Realiza la solicitud de eliminación
        const response = await axios.delete(`https://server-xul-solar-ag97.vercel.app/patrocinios/${id}`);

        // Filtra el array card para eliminar el objeto con el ID coincidente
        const updatedCard = card.filter((obj) => obj.id !== id);

        // Actualiza el estado card con el nuevo array filtrado
        setCard(updatedCard);
    }



    return (
        <div className={styles.container}>
            <h1 className={styles.text}>Crear Benefactor</h1>
            <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                    <label className={styles.formLabel}>Nombre</label><br />
                    <input onChange={handleChange} placeHolder="introduce tu nombre" name="name" value={patro.name} className={styles.input}></input><br />
                    <label className={styles.formLabel}>Imagen</label><br />
                    <input onChange={handleChange} placeHolder="introduce" name="image" value={patro.image} className={styles.input}></input><br />
                    <label className={styles.formLabel}>Telefono</label><br />
                    <input onChange={handleChange} placeHolder="introduce tu telefono" name="phone" value={patro.phone} className={styles.input}></input><br />
                    <label className={styles.formLabel}>Email</label><br />
                    <input onChange={handleChange} placeHolder="introduce tu email" name="mail" value={patro.mail} className={styles.input}></input><br />
                    <br />
                    <div className={styles.button}>
                        <button type="submit" >Crear</button>
                    </div>
                </form>
            </div>
            <div className={styles.containerCard}>
                {card.length > 0 ? (
                    card.map((obj) => (
                        <div className={styles.card} key={obj.id}>
                            <h1>{obj.name}</h1>
                            <img src={obj.image} alt={obj.name} />
                            <p>{obj.mail}</p>
                            <p>{obj.phone}</p>
                            <div className={styles.button}>
                                <button type="button" onClick={() => handleDelete(obj.id)}>Eliminar</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <h1>Todavía no hay benefactores</h1>
                )}

            </div>
        </div>
    )
};

export default Sponsorship;