import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { resetBanned } from '../../redux/actions/actions'

import BannedUserCard from '../../components/userCard/bannedUserCard'

const BannedUsers = () => {

    // const dispatch = useDispatch();

    const bannedList = useSelector(state => state.bannedList);
    console.log('banneado', bannedList);

    useEffect(() => {
        console.log('Banned Users:', bannedList);
    }, []);

    //    function handleReset() {
    //         dispatch(resetBanned());
    //     }


    return (

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 h-screen bg-gray-200">
            {bannedList.length > 0 ? (
                bannedList.map((banned) => (
                    <BannedUserCard key={banned.id} banned={banned} />
                ))
            ) : (
                <div className="lg:col-span-2 xl:col-span-2 bg-gray-200 flex items-center justify-center h-screen">
                    <h2 className="font-semibold text-2xl">No hay Usuarios Bloqueados</h2>
                </div>
            )}
        </div>

    );
}

export default BannedUsers;


