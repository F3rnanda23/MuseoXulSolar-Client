import { useSelector } from 'react-redux';
import { useEffect } from 'react';


import BannedUserCard from '../../components/userCard/bannedUserCard';
import backgroundImage from '../../imagenes/background/bg1.png';

const BannedUsers = () => {


    const bannedList = useSelector(state => state.bannedList);
    console.log('banneado', bannedList);

    useEffect(() => {
        console.log('Banned Users:', bannedList);
    }, []);

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      };

    return (

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 h-screen bg-gray-200" style={backgroundStyle}>
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


