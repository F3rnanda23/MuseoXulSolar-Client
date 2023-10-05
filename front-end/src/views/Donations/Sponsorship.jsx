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
                    setPatro({
                        ...patro,
                        image: result.info.secure_url // Actualiza la URL de la imagen en el estado
                    });
                }
            }
        );
    };



    return (
        <div className={styles.container}>
            <h1 className={styles.text}>Crear Benefactor</h1>
            <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                    <label className={styles.formLabel}>Nombre</label><br />
                    <input onChange={handleChange} placeHolder="introduce tu nombre" name="name" value={patro.name} className={styles.input}></input><br />
                    <label className={styles.formLabel}>Imagen</label><br />
                    <div className={styles.buttonCloudinary}>
                        <button type="button" onClick={openCloudinaryWidget} value={patro.image} onChange={handleChange}>Subir foto</button><br />
                    </div>
                    {/* <input onChange={handleChange} placeHolder="introduce" name="image" value={patro.image} className={styles.input}></input><br /> */}
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