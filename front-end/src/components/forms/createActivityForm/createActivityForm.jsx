import React from "react";
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

            <form class="" onSubmit={handleSubmit}>
                <div>
                    <h2 >Crear actividad </h2>

                    <div class="">
                        <label htmlFor="image" className="">Imagen</label>
                        <br />
                        <input type="text" name="image" id="image" class="border-solid border-2 border-orange-500" value={activitiesData.image} onChange={handlerChange} />

                        <br/>
                        <br/>

                        <label htmlFor="name" class="">Nombre de la actividad: </label>
                        <br />
                        <input type="text" name="name" id="name" class="border-solid border-2 border-orange-500" value={activitiesData.name} onChange={handlerChange} />
                        

                        <br/>
                        <br/>
                        
                        <label htmlFor="date" class="" >Fecha: </label>
                        <br />
                        <input type="date"  name="date" id="date"  class="border-solid border-2 border-orange-500" value={activitiesData.date} onChange={handlerChange} />
                        
                        <br/>
                        <br/>
                        
                        <label htmlFor="description" class="">Descripción: </label>
                        <br />
                        <input type="text"  name="description"  id="description"   class="border-solid border-2 border-orange-500" value={activitiesData.description} onChange={handlerChange} />
                        
                        <br/>
                        <br/>


                        <div>
                            <button class="border-solid border-2 border-gray-500" >Crear actividad</button>

                            <Link to="/" class="" >
                                <button class="border-solid border-2 border-gray-500">Volver a Home</button>
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