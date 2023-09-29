import { useSelector, useDispatch } from "react-redux";

// import { filterUserByEmail } from '../../redux/actions/actions'
import { useEffect } from "react";


const UserDetail = () => {


    // const user = useSelector(state => state.userToFilter);
    // console.log("USER DETAIL", user)






    return (

        <div className="max-w-lg mt-10 mx-auto">
            <div
                className="block max-w-18 rounded-lg bg-secondary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-gray-600">
                <div
                    className="border-b-2 border-[#0000002d] px-6 py-3 text-white dark:text-neutral-50">
                    email@gmail.com
                </div>
                <div className="p-6">
                    <h5
                        className="mb-2 text-xl font-medium leading-tight text-white dark:text-neutral-50">
                        Nombre Completo del usuario
                    </h5>
                    <h3 className="text-base text-white dark:text-neutral-50">
                        Suscripciones: Ninguna
                    </h3>
                    <h3 className="text-base text-white dark:text-neutral-50">
                       Fecha de Nacimiento: 1998/12/22
                    </h3>
                    <h3 className="text-base text-white dark:text-neutral-50">
                       +54 902 546214568
                    </h3>


                </div>
            </div>

        </div>
    );
}

export default UserDetail;