import { useEffect, useState } from 'react';
import axios from 'axios';

import DonationsCard from '../../components/donationsCard/donationsCard'

const DonationsAdmin = () => {

    const [donations, setDonations] = useState();

    useEffect(() => {

        const fetchData = async () => {
            try {
                const endpoint = 'https://server-xul-solar-ag97.vercel.app/donations/get'
                const { data } = await axios(endpoint);
                setDonations(data)
            } catch (error) {
                throw new Error('Algo Salió mal ' + error)
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {donations && donations.map((donation) => (
                    <DonationsCard key={donation.id} donation={donation}/>
                ))}

            </div>
        </div>
    );
}

export default DonationsAdmin;