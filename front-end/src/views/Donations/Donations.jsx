
import { initMercadoPago } from '@mercadopago/sdk-react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Donations = () => {
    const [initPoint, setInitPoint] = useState(null);
    const [redirecting, setRedirecting] = useState(false);

    useEffect(() => {
        initMercadoPago('TEST-e0166f16-2634-4d27-b335-dd9345dc638f');
    }, []);

    const createPreference = async () => {
        try {
            const response = await axios.post('http://localhost:3001/pagar', {
                description: 'Donativos',
                price: 100,
                quantity: 1,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const { init_point } = response.data;
            setInitPoint(init_point);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const handlePaymentClick = () => {
        createPreference();
        if (initPoint) {
            setRedirecting(true);
            window.location.href = initPoint;
        }
    };

    return (
        <div>
            <main className="grid place-items-center h-screen bg-gray-100">
                <section className="flex flex-col justify-center items-center md:flex-row gap-5  py-10 px-5 bg-white rounded-md shadow-lg w-3/4 md:max-w-2xl">
                    <div className='h-full'>
                        <h2 className="text-orange-200 text-2xl font-bold">Gracias por donar al museo</h2>
                        <div className='grid place-items-center bg-gray-100'>
                            <button onClick={handlePaymentClick}>Pagar $100</button>
                           
                        </div>
                        {redirecting && <span className='bg-orange-200'>Redirigiendo a Mercado Pago...</span>}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Donations;