import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getActivityDetail } from "../../redux/actions/actions";

const ActivityDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const detail = useSelector((state) => state.activityDetail)
    const dispatch = useDispatch();
    console.log('Aca es', detail);

    useEffect(() => {
        dispatch(getActivityDetail(id))
        // return () => { dispatch(clearDetail())};
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

    return (
        <div>

            <main className="grid place-items-center h-screen bg-gray-100">
                <section className="flex flex-col md:flex-row gap-11 py-10 px-5 bg-white rounded-md shadow-lg w-3/4 md:max-w-2xl">
                    <div className="text-orange-200 flex flex-col justify-between bg-orange-100">
                        <img src={detail.image} alt="" />

                    </div>
                    <div className="text-orange-200">
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