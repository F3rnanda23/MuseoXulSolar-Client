import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getActivityDetail, clearActivityDetail } from "../../redux/actions/actions";


const ActivityDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const detail = useSelector((state) => state.activityDetail)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getActivityDetail(id))

        return () => { dispatch(clearActivityDetail()) };

    }, [id, dispatch]);




    const formatDate = (dateString) => {
        if (!dateString) return '';

        // Crear un objeto Date a partir de dateString en formato ISO 8601
        const date = new Date(dateString);

        // Verificar si la fecha es válida
        if (isNaN(date.getTime())) return '';

        const year = date.getUTCFullYear();
        const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
        const day = date.getUTCDate().toString().padStart(2, '0');

        return `${year}-${month}-${day}`;
    };


    function handleBackButton() {
        navigate(-1)
    }

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);

    // Limpieza del event listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        
        <div>

            <main className="grid place-items-center min-h-screen bg-gray-100">
                <section className={`flex flex-col md:flex-row gap-11 py-10 px-5 bg-white rounded-md shadow-lg ${isSmallScreen ? 'w-full' : 'w-3/4'} ${isSmallScreen ? 'h-auto' : 'h-3/4 md:max-h-2/4'}`}>
                    <div className={`text-orange-200 ${isSmallScreen ? 'flex flex-col' : 'flex justify-between'} bg-orange-100 min-h-4/5`}>
                        <img
                            className='max-h-full max-w-3/4 object-cover'
                            src={detail.image}
                            alt="imagen"
                        />
                    </div>
                    <div className="text-orange-200 overflow-y-auto md:ml-auto md:mr-8 scrollbar-hide">
                        <small className="uppercase">Museo Xul Solar</small>
                        <h3 className="uppercase text-black text-2xl font-medium">{detail.name}</h3>
                        <h3 className="text-2xl font-semibold mb-7">{formatDate(detail.date)}</h3>
                        <h3 className='font-semibold'>{detail.hora} hrs.</h3>
                        <small className="text-black">{detail.description}</small>

                        <div className="flex gap-0.5 mt-4">
                            <button onClick={handleBackButton} id="backToActivities" className="rounded bg-orange-200 hover:scale-105 focus:outline-none transition text-white uppercase px-8 py-3">Volver a Actividades</button>

                        </div>
                    </div>
                </section>
            </main>

        </div>

    );
}


export default ActivityDetail;