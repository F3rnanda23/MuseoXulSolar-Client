
import { useState } from 'react';
import { Link  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {  createActivities } from '../../../redux/actions/actions';




const CreateActivityForm= () =>{

    const dispatch = useDispatch();

    const [activitiesData, setActivitiesData] = useState({
        image: '',
        name:'',
        date: '',
        description:'',
    });

   

    const handlerChange=(event)=>{
        setActivitiesData({
            ...activitiesData,  
            [event.target.name] : event.target.value
        });

    }; 

    const handleSubmit=(event)=>{
        event.preventDefault();

        
        dispatch(createActivities(activitiesData));

        setActivitiesData({ 
            image: '',
            name:'',
            date: '',
            description:'',
          });

    }; 

    return(
        <div>

            <form className="" onSubmit={handleSubmit}>
                <div>
                    <h2 >Crear actividad </h2>

                    <div className="">
                        <label htmlFor="image" className="">Imagen</label>
                        <br />
                        <input type="text" name="image" id="image" className="border-solid border-2 border-orange-500" value={activitiesData.image} onChange={handlerChange} />

                        <br/>
                        <br/>

                        <label htmlFor="name" className="">Nombre de la actividad: </label>
                        <br />
                        <input type="text" name="name" id="name" className="border-solid border-2 border-orange-500" value={activitiesData.name} onChange={handlerChange} />
                        

                        <br/>
                        <br/>
                        
                        <label htmlFor="date" className="" >Fecha: </label>
                        <br />
                        <input type="date"  name="date" id="date"  className="border-solid border-2 border-orange-500" value={activitiesData.date} onChange={handlerChange} />
                        
                        <br/>
                        <br/>
                        
                        <label htmlFor="description" className="">Descripción: </label>
                        <br />
                        <input type="text"  name="description"  id="description"   className="border-solid border-2 border-orange-500" value={activitiesData.description} onChange={handlerChange} />
                        
                        <br/>
                        <br/>


                        <div>
                            <button className="border-solid border-2 border-gray-500" >Crear actividad</button>

                            <Link to="/" className="" >
                                <button className="border-solid border-2 border-gray-500">Volver a Home</button>
                            </Link>
                        </div>

                    </div>

                
            {/* //componente modal */}
                {/* <TourismModal isOpen={modalOfState} onClose={() => dispatch({type: MODAL_TOURISM, payload: false}) } /> */}

                </div>
           
            </form>
        </div>
    )
};

export default CreateActivityForm;