
import { useState } from 'react';
import { Link  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {  createActivities } from '../../../redux/actions/actions';
import { Image, Transformation } from 'cloudinary-react'; // Importa el componente Image
import swal from 'sweetalert';




const CreateActivityForm= () =>{

    const dispatch = useDispatch();

    const [activitiesData, setActivitiesData] = useState({
        image: '',
        name:'',
        date: '',
        description:'',
        hora:'',
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
            hora:'',
          });
          swal("Listo","Se creó la actividad con exito","success")
    }; 

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
              setActivitiesData({
                ...activitiesData,
                image: result.info.secure_url // Actualiza la URL de la imagen en el estado
          
              });
            }
          }
        );
      };

    return(
        <div className="flex w-full h-screen bg-gray-600 items-center justify-center">

            <form className="bg-gray-700 w-1/2 flex justify-center items-center p-5 rounded" onSubmit={handleSubmit}>
                <div>
                    <h2 className="text-center text-white text-2xl">Crear actividad </h2>

                    <div className="mt-5">
                    <label htmlFor="image" className="text-white">Cargar una imagen: </label>
                         <br />
                          <button type="button" onClick={openCloudinaryWidget} className="border-solid border-2 border-gray-500 text-white p-2" id="btn-foto" value={activitiesData.image} onChange={handlerChange}>Subir foto</button>
                         <br />
                         <br />
                        <label htmlFor="name" className="text-white ">Nombre de la actividad: </label>
                        <br />
                        <input type="text" name="name" id="name" className="w-full px-2 rounded " value={activitiesData.name} onChange={handlerChange} />
                        

                        <br/>
                        <br/>
                        
                        <label htmlFor="date" className="text-white" >Fecha: </label>
                        <br />
                        <input type="date"  name="date" id="date"  className="w-full px-2 rounded" value={activitiesData.date} onChange={handlerChange} />
                        
                        <br/>
                        <br/>

                        <label htmlFor="hora" step="3600" className="text-white" >Hora: </label>
                        <br />
                        <input type="time"  name="hora" id="hora"  className="w-full px-2 rounded" value={activitiesData.hora} onChange={handlerChange} />
                        
                        <br/>
                        <br/>
                        
                        <label htmlFor="description" className="text-white">Descripción: </label>
                        <br />
                        <input type="text"  name="description"  id="description"   className="w-full px-2 rounded" value={activitiesData.description} onChange={handlerChange} />
                        
                        <br/>
                        <br/>


                        <div className="grid grid-cols-2 gap-2">
                            <button className="border-solid border-2 border-gray-500 text-white p-2" >Crear actividad</button>

                            <Link to="/" className="" >
                                <button className="border-solid border-2 border-gray-500 text-white p-2">Volver a Home</button>
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