import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { resetBanned } from '../../redux/actions/actions'

import BannedUserCard from '../../components/userCard/bannedUserCard'

const BannedUsers = () => {

    const dispatch = useDispatch();

    const bannedList = useSelector(state => state.bannedList);
    console.log('banneado', bannedList);

    useEffect(() => {
        console.log('Banned Users:', bannedList);
    }, []);

   function handleReset() {
        dispatch(resetBanned());
    }


    return (
        <div>
             <button onClick={handleReset}>Resetear</button>
            {bannedList.length > 0 ?
                bannedList.map((banned) =>
                    <BannedUserCard key={banned.id} banned={banned} />
                ) : (
                    <h2>No hay Usuarios Bloqueados</h2>
                )}
           


        </div>
    );
}

export default BannedUsers;