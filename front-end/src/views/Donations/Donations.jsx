import { initMercadoPago } from '@mercadopago/sdk-react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import img1 from '../../imagenes/patrocinios/pic1.png'
import img2 from '../../imagenes/patrocinios/pic2.png'

const Donations = () => {
    const [initPoint, setInitPoint] = useState(null);
    const [redirecting, setRedirecting] = useState(false);
    const [donationAmount, setDonationAmount] = useState('');

    useEffect(() => {
        initMercadoPago('TEST-e0166f16-2634-4d27-b335-dd9345dc638f');
    }, []);

    const handlePaymentClick = async () => {
        const price = donationAmount; 

        try {
            const response = await axios.post('https://server-xul-solar.vercel.app/pagar', { 
                description: `Donativos - $${donationAmount}`,
                price: price,
                quantity: 1,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const { init_point } = response.data;
            setInitPoint(init_point);
            setRedirecting(true);
            window.location.href = init_point;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    return (
        <div className='bg-gray-200 min-h-screen'>

            <main className="flex flex-row justify-center items-center h-full">
                <div className='h-3/4 flex flex-col justify-center'>
                    <img src={img2} alt="picture" className='mx-10 h-2/4'/>
                </div>
                <div className='w-3/5 flex flex-col items-center h-full'>
                    
            <h2 className="text-black text-2xl font-bold mt-5 md:mt-8 lg:mt-10 mb-5 md:mb-8 lg:mb-10">Gracias por tu apoyo al museo</h2>
            <p className='w-2/3 mb-5 md:mb-8 lg:mb-10 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac pretium magna, vitae feugiat massa. Aenean arcu tortor, aliquet vel pretium sed, auctor ac metus. Morbi pharetra, quam at eleifend lobortis, urna mauris lacinia nunc, in fringilla nulla leo sit amet felis. Morbi ut convallis tellus. Etiam feugiat magna nec lacinia fermentum. In dui neque, facilisis sed mauris non, accumsan viverra nisl. Morbi viverra mauris id mauris malesuada, quis tempus lacus ullamcorper. Vestibulum mollis porta porttitor. </p>
                <section className="flex flex-col justify-center items-center md:flex-row gap-5 py-10 px-5 bg-white rounded-md shadow-lg h-1/2 md:h-1/2 lg:h-1/2 w-3/4 md:max-w-2xl">
    
                    <div className='h-full flex flex-col items-center'>
                       
                        <h2 className='text-lg font-bold'>Selecciona uno de los aportes sugeridos o ingresa tu aporte deseado abajo</h2>
                        <div className='grid grid-cols-5 gap-2 place-items-center mt-5'>
                            <button className='rounded  bg-orange-200 px-3 py-1 text-gray-200 shadow-xl transition-all duration-300 hover:scale-105 w-[60px]'
                                onClick={() => setDonationAmount(10)}>$10</button>
                            <button className='rounded bg-orange-200 px-3 py-1 text-gray-200 shadow-xl transition-all duration-300 hover:scale-105 w-[60px]'
                                onClick={() => setDonationAmount(20)}>$20</button>
                                <button className='rounded  bg-orange-200 px-3 py-1 text-gray-200 shadow-xl transition-all duration-300 hover:scale-105 w-[60px]'
                                onClick={() => setDonationAmount(50)}>$50</button>
                                <button className='rounded  bg-orange-200 px-3 py-1 text-gray-200 shadow-xl transition-all duration-300 hover:scale-105 w-[60px]'
                                onClick={() => setDonationAmount(100)}>$100</button>
                            <button className='rounded  bg-orange-200 px-3 py-1 text-gray-200 shadow-xl transition-all duration-300 hover:scale-105 w-[60px]'
                                onClick={() => setDonationAmount(200)}>$200</button>
                        </div>
                        <input className='mt-5 md:mt-8 lg:mt-10 bg-orange-100 border border-gray-500 p-2 rounded shadow-md'
                            placeholder='$USD'
                            type="number"
                            min="1"
                            value={donationAmount}
                            onChange={(e) => setDonationAmount(Number(e.target.value))}
                        />
                        <button className='mt-4 md:mt-6 lg:mt-8 rounded mr-2 bg-orange-200 px-3 py-1 text-xl text-gray-200 shadow-xl transition-all duration-300 hover:scale-105'
                        onClick={handlePaymentClick}>Donar $ {donationAmount}</button>
                        {redirecting && <span className='bg-orange-200 mt-5 md:mt-8 lg:mt-10'>Redirigiendo a Mercado Pago...</span>}
                    </div>
                </section>
                </div>
                <div className='h-3/4 flex flex-col justify-center'>
                    <img src={img2} alt="picture" className='h-2/4'/>
                </div>
            </main>
        </div>
    );
};

export default Donations;
