import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useState } from 'react';
import axios from 'axios';

const Donations = () => {

    // const [preferenceId, setPreferenceId] = useState(null);
    const [initPoint, setInitPoint] = useState(false);
    // const [price, setPrice] = useState(0);

    initMercadoPago('TEST-e0166f16-2634-4d27-b335-dd9345dc638f');

    const createPreference = async () => {

        try {
            const response = await axios.post('http://localhost:3001/pagar', {
                description: 'Donativos',
                price: 100,
                quantity: 1,
                // currency: 'COP'
               
            }, 
            {
                headers:{
                    "Content-Type": "application/json",
                }
            });


            const init_point = response.data;
            setInitPoint(init_point);
            // console.log('Preference ID:', id); 
        } catch (error) {

            throw new Error(error.message)
        }
    }


    return (
        <div>
            <main className="grid place-items-center h-screen bg-gray-100">
                <section className="flex flex-col justify-center items-center md:flex-row gap-5  py-10 px-5 bg-white rounded-md shadow-lg w-3/4 md:max-w-2xl">
                    <div className='h-full'>
                        <h2 className="text-orange-200 text-2xl font-bold">Gracias por donar al museo</h2>
                        <div className='grid place-items-center bg-gray-100'>
                            <label htmlFor="amount">Ingresá el monto de la donación:</label>
                            {/* <input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(parseFloat(e.target.value))}
                                placeholder="Ingrese el monto"
                                min="1"
                                step="any"
                                required
                            /> */}
                            <h3>Donacion</h3>
                            <p>100 $</p>
                            <button onClick={createPreference}className="rounded bg-orange-200 hover:scale-105 focus:outline-none transition text-white uppercase px-8 py-3">Donar</button>
                            {/* {initPoint && <Wallet initialization={{ preferenceId, redirectMode: 'modal'}} />} */}
                            {initPoint &&( window.location.href = initPoint)}
                        </div>
                    </div>

                </section>
            </main>
        </div>
    );
}

export default Donations;