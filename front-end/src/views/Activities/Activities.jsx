
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllActivities, deteleActivities, filtrarActividades, postAllActivitiesUser } from '../../redux/actions/actions';
import Calendar from 'react-calendar';
const firma6Xul = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696361321/galeria/firma6Xul_mmiu6y.png';
import { BsSun } from 'react-icons/bs';
import Cookies from "universal-cookie";
import toast, { Toaster } from 'react-hot-toast';
import swal from "sweetalert"
import { FormattedMessage } from 'react-intl';
import backgroundImage from '../../imagenes/background/bg1.png'





const Activities = () => {

    const activities = useSelector(state => state.activities);
    const active = useSelector(state => state.active);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [value, onChange] = useState(new Date());
    const ValuePiece = Date | null;
    const [msjInfoActividades, setMsjInfoActividadesonChange] = useState("No hay actividades registradas");

    const Value = ValuePiece | [ValuePiece, ValuePiece];

    const cookies = new Cookies();
    const idUser = cookies.cookies.id;
    const adminTrue = cookies.get('admin');


    useEffect(() => {
        dispatch(getAllActivities());

    }, [dispatch]);

    const handleDelete = (activityId) => {
        swal({
            title: "Estas seguro?",
            text: "una vez eliminado, no podras recuperar los datos!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    dispatch(deteleActivities(activityId));
                    swal("Listo, tu actividad ha sido eliminada!", {
                        icon: "success",
                    });
                } else {
                    swal("No se elimino!");
                }
            });
    };

    const handleReserve = async (idUser, activityId) => {
        if (!active) {
            swal("error", "Para Reservar debes Iniciar sesión", "error");
            navigate('/login')
        } else {
            try {
                // Intenta realizar la reserva
                dispatch(await postAllActivitiesUser(idUser, activityId));
                // Si la reserva es exitosa, muestra una notificación de éxito
                toast.success("Reserva exitosa");
            } catch (error) {
                // Si hay un error, muestra una alerta de error
                console.error("Error al realizar la reserva:", error);
                toast.error("Error al realizar la reserva");
            }
        }

    };



    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const currentMonthName = months[currentMonth];
    const onClick = (date) => {
        const fecha = new Date(date);
        const añoFecha2 = fecha.getUTCFullYear();
        const mesFecha2 = fecha.getUTCMonth() + 1;
        const diaFecha2 = fecha.getUTCDate();


        const activitiesFilter = activities.filter((activity) => {

            const fechaActivity = new Date(activity.date);
            const añoFecha1 = fechaActivity.getUTCFullYear();
            const mesFecha1 = fechaActivity.getUTCMonth() + 1; // Los meses en JavaScript comienzan en 0
            const diaFecha1 = fechaActivity.getUTCDate();
            return añoFecha1 === añoFecha2 && mesFecha1 === mesFecha2 && diaFecha1 === diaFecha2;

        });
        setMsjInfoActividadesonChange("No hay actividades registradas para este día " + diaFecha2 + "/" + mesFecha2 + "/" + añoFecha2);
        dispatch(filtrarActividades(activitiesFilter));

    };

    const handleRefresh = () => {
        window.location.reload();
    };

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      };

    return (

        <div className="flex flex-col min-h-screen" style={backgroundStyle}>

            <h1 className='font-bold text-2xl flex justify-center pt-4 mb-4'>{currentMonthName + ' en el Museo Xul Solar'}</h1>

            <div className="flex justify-end items-end mr-[180px] mt-[30px] ">
                <button onClick={handleRefresh} className=" flex h-[50px] sm:h-[40px] justify-end  rounded  bg-orange-200   px-3 py-1 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-500 hover:text-white">
                    <FormattedMessage
                        id='actividades.boton'
                        defaultMessage='Todas las actividades'
                    /></button>
            </div>

            <div className="grid w-4/4 mb-[0px] sm:grid-cols-1 xl:grid-cols-2 ">


                <div className="grid w-6/6  h-4/6 mr-[50px] md:w-5/6 order-2 mt-[250px] mr-[20px] mb-[20px] xl:order-1 xl:mt-[50px] ">

                    <div className='relative   w-6/6  h-6/6   min-h-screen' >

                        <div className=" grid grid-cols-1 gap-2  w-full h-4/4 mb-[30px]">

                        {activities && activities.length > 0 ? (
                            activities.map(activity => (
                            <div key={activity.name} className="relative flex flex-col w-4/6 sm:flex-row sm:w-full sm:w-6/6 mt-5 ml-5 gap-2 rounded-lg shadow-2xl bg-transparent mb-[30px]">
                               <img src={activity.image} className=" w-2/3 mt-[20px] ml-[5px] sm:w-2/5 sm:h-4/5 rounded-full sm:ml-10 sm:mt-auto mb-auto object-cover transition-all duration-300 group-hover:opacity-90" />
                                    <div className="flex flex-col items-center justify-center gap-4 p-4 w-full sm:w-3/5 ml-0 sm:ml-10 mt-auto mb-auto">
                                        <h2 className="text-2xl font-semibold w-full xl:text-3xl">{activity.name}</h2>
                                        <h2 className='font-semibold w-full xl:text-2xl'>{formatDate(activity.date)}</h2>
                                        <h2 className='font-semibold w-full xl:text-2xl'>{activity.hora} hrs.</h2>
                                        <div className="mr-auto ml-auto justify-center items-center  sm:mr-[30px] sm:grid-cols-2  xl:mr-[30px]">
                                            <div className=" grid  mt-[20px]  ">
                                                <button onClick={() => navigate(`/detail/${activity.id}`)} className="rounded mr-2 bg-orange-400 bg-opacity-50 px-3 py-1 text-gray-600 shadow-xl transition-all duration-300 hover:scale-105 2xl:px-5 ">
                                                    <FormattedMessage
                                                        id='actividades.conocermas'
                                                        defaultMessage='Conocer más'
                                                    />
                                                    </button>
                                                {adminTrue ? <button onClick={() => handleDelete(activity.id)} className="rounded mt-[5px] bg-orange-400 bg-opacity-50 px-3 py-1 text-gray-600 shadow-xl transition-all duration-300 hover:scale-105 2xl:px-5 ">Eliminar</button> : null}
                                            </div>
                                            <div className="mt-[10px] sm:mr-[5px] ">
                                                <button onClick={() => handleReserve(idUser, activity.id)}
                                                    className="rounded bg-orange-400 bg-opacity-50 px-3 py-1 text-gray-600 shadow-xl transition-all duration-300 hover:scale-105 mt-[10px] mr-[10px] sm:mb-[5px] md:px-2 2xl:px-5">
                                                    <FormattedMessage
                                                        id='actividades.reservar'
                                                        defaultMessage='Reservar entrada'
                                                    /></button>
                                                <button onClick={() => window.location.href = 'https://www.eventbrite.com.ar/o/museo-xul-solar-38576839753'} className="rounded mt-[10px] bg-orange-400 bg-opacity-50 px-3 py-1 text-gray-600 shadow-xl transition-all duration-300 hover:scale-105 md:px-2 2xl:px-5">
                                                    <FormattedMessage
                                                        id='actividades.comprar'
                                                        defaultMessage='Comprar entrada'
                                                    /></button>
                                            </div>
                                        </div>

                                    </div>
                            </div>
                            ))
                        ) : (
                            <p className="text-orange-500 text-xl font-bold ml-[30px]">{msjInfoActividades}</p>
                        )}

                           
                        </div>

                    </div>

                </div>



                <div className="grid w-3/3 h-full  ml-[50px] sm:order-1 ">

                    <div className=" relative  w-4/4 h-[500px] bg-gray-200  ml-[-50px] mr-auto mt-[50px] rounded-lg sm:w-4/4  md:ml-auto  xl:w-3/6 ">
                        <h1 className="text-2xl font-bold  text-center font-sans text-gray-700 "><BsSun className="" /> Calendario <BsSun className="ml-auto " /></h1>
                        <div className=" bg-gray-300 mt-[10px]  border-2  p-4 rounded-lg shadow-2xl bg-cover  w-4/4 h-6/6 " >

                            <Calendar
                                onChange={onChange}
                                value={value}
                                onClickDay={onClick}
                                tileContent={({ date, view }) => {
                                    const activity = activities.find((activity) => {
                                        const fechaGMT = new Date(date);
                                        const fechaUTC = new Date(fechaGMT.toISOString())
                                        const añoFecha2 = fechaUTC.getUTCFullYear();
                                        const mesFecha2 = fechaUTC.getUTCMonth() + 1;
                                        const diaFecha2 = fechaUTC.getUTCDate();

                                        const fechaActivity = new Date(activity.date);
                                        const añoFecha1 = fechaActivity.getUTCFullYear();
                                        const mesFecha1 = fechaActivity.getUTCMonth() + 1; // Los meses en JavaScript comienzan en 0
                                        const diaFecha1 = fechaActivity.getUTCDate();

                                        return añoFecha1 === añoFecha2 && mesFecha1 === mesFecha2 && diaFecha1 === diaFecha2;

                                    });


                                    if (activity) {

                                        return (<span id={activity.id} name={date} className=" hover:bg-red-500" onClick={onClick}> <img src={firma6Xul} className="ml-[10px] w-8 o h-5 bg-rgba(253, 124, 4, 0.623) rounded-[10px]  " /></span>)
                                    }

                                }

                                }
                            />
                        </div>

                    </div>
                </div>


            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>

    )
};

export default Activities;





