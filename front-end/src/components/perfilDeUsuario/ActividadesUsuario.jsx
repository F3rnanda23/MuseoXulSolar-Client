
import { useEffect, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllActivitiesUser, deteleActivitiesUser } from '../../redux/actions/actions';
import Cookies from "universal-cookie";
import style from './actividadesUsuario.module.css'



const actividadesUsuario = () => {

    const activitiesUser = useSelector(state => state.activitiesUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cookies = new Cookies();
    const idUser = cookies.cookies.id;

    useEffect(() => {
        dispatch(getAllActivitiesUser(idUser));

    }, []);

    const handleDelete = (idUser, activityId) => {
        console.log(activityId, idUser, 'aqui activity y id')
        swal({
            title: "Estas seguro?",
            text: "No podras recuperar los datos!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    dispatch(deteleActivitiesUser(idUser, activityId));
                    swal("Listo, reserva eliminada!", {
                        icon: "success",
                    });
                } else {
                    swal("No eliminaste la reserva!");
                }
            });
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className={style.containerActividadesUser}>
            <br />

            <div className="flex mt-[30px]  md:justify-start md:items-start md:ml-[180px] ">
                <button onClick={() => navigate('/')} className=" flex justify-end  rounded  bg-orange-200  h-[35px] px-3 py-1 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-500 hover:text-white"> Volver a página de inicio</button>
            </div>

            <div className="flex mt-[20px] mb-[30px] md:justify-end md:items-end md:mr-[180px] ">
                <button onClick={handleRefresh} className=" flex justify-end  rounded  bg-orange-200  h-[35px] px-3 py-1 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-500 hover:text-white"> Mostrar todas mis actividades</button>
            </div>

            <h1 className=" flex text-3xl font-bold  text-orange-200 underline ml-[20px] md:justify-center md:items-center  ">Mis actividades agendadas</h1>


            <div className='relative  w-full  h-full' >

                <div className=" grid sm:grid-cols-1 xl:grid-cols-3   gap-0 w-full h-full-">

                    {activitiesUser && activitiesUser.map(activity => (
                    
                        <div key={activity.name} className="relative flex flex-col w-3/4 border-2 shadow-2xl mt-[70px] ml-[50px] mb-[30px]">
                            <img src={activity.image} className=" w-2/5 h-2/3 mt-[20px]  ml-auto mr-auto  rounded-full  object-cover transition-all duration-300 group-hover:opacity-90" />
                            <div className="flex flex-col gap-4 p-4 w-full  justity-center text-center mt-auto mb-auto">
                                <h2 className="text-2xl font-semibold w-full xl:text-3xl">{activity.name}</h2>
                                <h2 className='font-semibold w-full xl:text-2xl'>{formatDate(activity.date)}</h2>
                                <h2 className='font-semibold w-full xl:text-2xl'>{activity.hora} hrs.</h2>
                                <div className="mr-[100px] xl:mr-[30px]">
                                    <div className=" flex justify-center items-center  mt-[20px]  ">
                                        <button onClick={() => navigate(`/detail/${activity.id}`)} className="rounded mr-3 bg-orange-400 bg-opacity-50 w-2/3 py-2 text-gray-600 shadow-xl transition-all duration-300 hover:scale-105 ">Ver detalle</button>
                                        <button onClick={() => handleDelete(idUser, activity.id)} className="rounded  bg-orange-400 bg-opacity-50 w-2/3 py-2 text-gray-600 shadow-xl transition-all duration-300 hover:scale-105 ">Eliminar reserva</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    ))}
                </div>

            </div>


        </div>
    )

}

export default actividadesUsuario;