import {useState, useEffect} from "react"
import axios from "axios"






const Sponsorship = () => {
    useEffect(()=>{
    allPatrocinios()

    }, [])
    [patro, setPatro] = useState({
        name: "",
        image: "",
        phone: "",
        mail: ""
    })
    [card, setCard] = useState([])
    const allPatrocinios = ()=>{
        const {data} = axios.get("https://server-xul-solar-ag97.vercel.app/patrocinios/")
        setCard(data)
    }

    const handleSubmit = ()=>{

    }

    const handleChange = ()=>{

    }

    const handleDelete = ()=>{

    }



    return(
        <div>
            <h1>Crear Benefactor</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label><br/>
                <input onChage={handleChange} placeHolder="introduce tu nombre"name={patro.name} value={patro.name}></input><br/>
                <label>Imagen</label><br/>
                <input onChage={handleChange} placeHolder="introduce"name={patro.image} value={patro.image}></input><br/>
                <label>Telefono</label><br/>
                <input onChage={handleChange} placeHolder="introduce tu telefono"name={patro.phone} value={patro.phone}></input><br/>
                <label>Email</label><br/>
                <input onChage={handleChange} placeHolder="introduce tu email"name={patro.mail} value={patro.mail}></input><br/>
                <button type="submit" >Crear</button>
            </form>
        <div>
            {data ? data.map((obj)=>{(
                <div key={obj.id}>
                    <h1>{obj.name}</h1>
                    <img src={obj.image} alt={obj.name}/>
                    <p>{obj.mail}</p>
                    <p>{obj.phone}</p>
                    <button onClick={handleDelete}>Eliminar</button>
                </div>
            )}): <h1>Todavia no hay benefactores</h1>}
        </div>
        </div>
    )
};

export default Sponsorship;
