import { useSelector } from "react-redux";

import userIconOrange from '../../imagenes/register/userIcon.png'


const UserDetail = () => {

    const userDetail = useSelector(state => state.userDetail);

    console.log(userDetail);


    const formatDate = (dateString) => {
        const date = new Date(dateString);
        if (isNaN(date)) {
            return 'Fecha inválida';
        }
        return date.toISOString().split('T')[0];
    };

    const showSubs = (subs) => {
        return subs.map(sub => {
            let nombreSuscripcion = '';
            if (sub.tipo === '1') {
                nombreSuscripcion = 'Amigos Xul Solar ($30/año)';
            } else if (sub.tipo === '2') {
                nombreSuscripcion = 'Amigos Xul Solar Plus ($50/año)';
            }
            return nombreSuscripcion;
        }).join(', ');
    };

    return (

        <div className="w-80 md:w-96 mt-10 mx-auto">
            {!userDetail ? (
                <div>
                    Selecciona un usuario para ver los detalles.
                </div>

            ) : (
                <div
                    className="block max-w-18 rounded-lg bg-secondary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-gray-600">
                    <div
                        className="border-b-2 border-[#0000002d] px-6 py-3 text-white dark:text-neutral-50">
                        {userDetail.email}
                    </div>

                    <div className="flex justify-center items-center rounded-full bg-orange-100 h-20 w-20 mx-auto mb-4">
                        <img
                            className="max-h-full max-w-full rounded-full"
                            src={userDetail.image ? userDetail.image : userIconOrange}
                            alt="UserIcon"
                        />
                    </div>
                    <div className="p-6">
                        <h5
                            className="mb-2 text-xl font-medium leading-tight text-white dark:text-neutral-50">
                            {userDetail.name}
                        </h5>

                        <h3 className="text-base text-white dark:text-neutral-50">
                            Suscripciones: {userDetail.Suscripciones && userDetail.Suscripciones.length > 0 ? showSubs(userDetail.Suscripciones) : 'Ninguna'}
                        </h3>

                        <h3 className="text-base text-white dark:text-neutral-50">
                            {userDetail.birthday !== null ? formatDate(userDetail.birthday) : 'No registra Fecha de Nacimiento'}

                        </h3>
                        <h3 className="text-base text-white dark:text-neutral-50">
                            {userDetail.phone !== null ? userDetail.phone : 'No registra Telefono'}
                        </h3>


                    </div>
                </div>


            )}
        </div>

    );
}

export default UserDetail;