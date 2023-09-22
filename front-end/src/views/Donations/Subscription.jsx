import axios from 'axios';
import { useState } from 'react';
import card1 from '../../imagenes/patrocinios/40.jpg'


export const Subscription = () => {

    const [initPoint, setInitPoint] = useState(false);
    const [price, setPrice] = useState(0);

    const handlePrice = (price) => {
        setPrice(price)
    }

    const createPreference = async () => {

        try {
            const response = await axios.post('http://localhost:3001/pagar', {
                description: 'Membresia anual del Pan Klub',
                price: price,
                quantity: 1, 
            }, 
            {
                headers:{
                    "Content-Type": "application/json",
                }
            });

            const {init_point} = response.data;
            setInitPoint(init_point);
            window.location.href = init_point;
        } catch (error) {
            throw new Error(error.message)
        }
    }

    return (
    <div className="bg-gray-200">
        <h2 className="text-center text-3xl pt-5">HACETE MIEMBRO DEL PAN KLUB</h2>
        <div className=" flex items-center justify-center min-h-screen mx-auto container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                <div className="rounded shadow-lg">
                    <div className="p-5 flex flex-col">
                        <div className="rounded overflow-hidden">
                            <img src={card1} alt="" />
                        </div>
                        <h5 className='text-2xl md:text-3xl font-medium mt-3'>Miembro($30/año)</h5>
                        <p className='text-gray-500 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, repudiandae. Ducimus adipisci est maiores minus eaque. </p>
                        <button onClick={() => {handlePrice(30)
                        createPreference()
                            }}
                        className='mt-2 text-center text-white bg-orange-200 py-2 rounded font-semibold hover:bg-orange-400 '>SUSCRIBETE</button>
                    </div>
                </div>
                <div className="rounded shadow-lg">
                    <div className="p-5 flex flex-col">
                        <div className="rounded overflow-hidden">
                            <img src={card1} alt="" />
                        </div>
                        <h5 className='text-2xl md:text-3xl font-medium mt-3'>Socio($50/año)</h5>
                        <p className='text-gray-500 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, repudiandae. Ducimus adipisci est maiores minus eaque. </p>
                        <button onClick={() => {handlePrice(50)
                        createPreference()}}
                        className='mt-2 text-center text-white bg-orange-200 py-2 rounded font-semibold hover:bg-orange-400 '>SUSCRIBETE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}