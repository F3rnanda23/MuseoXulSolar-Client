import axios from 'axios';
import { useState } from 'react';
import Cookies from 'universal-cookie';

import img_Bg from '../../imagenes/background/bg1.png'


export const Subscription = () => {

    const [initPoint, setInitPoint] = useState(false);
    const [price, setPrice] = useState('')
 

    const currentDate = new Date();
    console.log(currentDate);

    const cookies = new Cookies();
    const userId = cookies.get('id');
    const userEmail = cookies.get('email');
    const userName = cookies.get('name');
  


    const createPreference = async (price) => {

        try {
            const response = await axios.post('https://server-xul-solar.vercel.app/pagar', {
                description: `Membresia anual de $${price}`,
                price: price,
                quantity: 1,
            },
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

            const { init_point } = response.data;
            setInitPoint(init_point);
            window.location.href = init_point;
        } catch (error) {
            throw new Error(error.message)
        }
    }

    const sendSubsInfo = async () => {
        try {
            const subscriptionInfo = await axios.post('http://localhost:3001/suscribe', {
                UsuarioId: userId,
                email: userEmail,
                name: userName,
                Subscription: price,
                date: currentDate,
            })

        } catch (error) {
            throw new Error(error.message);
        }
    }

    return (
        <div className="bg-gray-200 min-h-screen w-full bg-cover"
            style={{ backgroundImage: `url(${img_Bg})` }}>
            <h2 className="text-center text-3xl pt-5">HACETE MIEMBRO DEL PAN KLUB</h2>
            <div className=" flex items-center justify-center min-h-full mx-auto container">
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 max-w-2xl  ">
                    <div className="rounded shadow-2xl my-3 bg-gray-300 hover:scale">
                        <div className="p-5 flex flex-col">
                            <div className="rounded overflow-hidden">
                                <img src="https://res.cloudinary.com/dtsmy1ksn/image/upload/v1694746264/gl/278_ftvkgw.jpg" alt="" />
                            </div>
                            <h5 className='text-2xl md:text-3xl font-medium mt-3'>Miembro($30/año)</h5>
                            <p className='text-gray-500 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, repudiandae. Ducimus adipisci est maiores minus eaque. </p>
                            <button onClick={() => {
                                setPrice(30)
                                createPreference(30)
                                sendSubsInfo()
                            }}
                                className='mt-2 text-center text-white bg-orange-200 py-2 rounded font-semibold hover:bg-orange-400 '>SUSCRIBETE</button>
                        </div>
                    </div>
                    <div className="rounded my-3 shadow-2xl bg-gray-300">
                        <div className="p-5 flex flex-col">
                            <div className="rounded overflow-hidden">
                                <img src="https://res.cloudinary.com/dtsmy1ksn/image/upload/v1694746264/gl/278_ftvkgw.jpg" alt="" />
                            </div>
                            <h5 className='text-2xl md:text-3xl font-medium mt-3'>Socio($50/año)</h5>
                            <p className='text-gray-500 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, repudiandae. Ducimus adipisci est maiores minus eaque. </p>
                            <button onClick={() => {
                                setPrice(50)
                                createPreference(50)
                                sendSubsInfo()
                            }}
                                className='mt-2 text-center text-white bg-orange-200 py-2 rounded font-semibold hover:bg-orange-400 '>SUSCRIBETE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}