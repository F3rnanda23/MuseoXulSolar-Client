import axios from 'axios';
import { useState } from 'react';
import Cookies from 'universal-cookie';
import { useDispatch } from 'react-redux';

import { sendSubsInfo } from '../../redux/actions/actions'

import img_Bg from '../../imagenes/background/bg1.png'
import { async } from '@firebase/util';
import { func } from 'prop-types';


export const Subscription = () => {

    const dispatch = useDispatch();
    const [initPoint, setInitPoint] = useState(false);
    // const [price, setPrice] = useState('')


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

    const [subs, setSubs] = useState({
        usuarioId: userId,
        email: userEmail,
        name: userName,
        // subscripcion: '',
        date: currentDate,
        // tipo: `Membresia ${price}`
    })
    console.log(subs);

    const sendSubInfo = () => {
        dispatch(sendSubsInfo(subs))
    }


    return (
        <div className="bg-gray-200 min-h-screen w-full bg-cover"
            style={{ backgroundImage: `url(${img_Bg})` }}>
            <div className='container  max-w-screen-md mx-auto'>
                <h2 className="text-center text-3xl pt-5">HACETE MIEMBRO DEL PAN KLUB</h2>
                <p className='my-4'>Obtené una variedad de beneficios que permitirán acceder a una experiencia única dentro del Museo. Desde entradas gratuitas y visitas guiadas exclusivas, hasta descuentos en la tienda, actividades y talleres dentro del museo.
                    Elegí la opción que más te guste a continuación:
                </p>
            </div>
            <div className=" flex items-center justify-center min-h-full mx-auto container">
                <div className="max-w-xs sm:max-w-sm grid grid-cols-1 gap-7 md:grid-cols-2 md:max-w-2xl  ">
                    <div className="rounded shadow-2xl my-3 bg-gray-300 hover:scale">
                        <div className="p-5 flex flex-col">
                            <div className="rounded overflow-hidden">
                                <img src="https://res.cloudinary.com/dtsmy1ksn/image/upload/v1694746264/gl/278_ftvkgw.jpg" alt="" />
                            </div>
                            <h5 className='text-xl md:text-2xl font-medium mt-3'>Amigos Xul Solar($30/año)</h5>
                            <p className='text-gray-500 text-lg mt-3'>
                                -5 entradas gratis al mes<br/>
                                -10% de descuento en la tienda<br/>
                                -10% de descuento en las actividades y espectáculos del Pan Klub
                            </p>
                            <button onClick={() => {
                                setPrice(30)
                                createPreference(30)
                                sendSubsInfo()
                            }}></button>
                            <button onClick={() => {
                                // setPrice(30);
                                // setSubs(prevState => ({
                                //     ...prevState,
                                //     tipo: `Membresia ${30}`  // Actualiza el tipo de membresía basado en el nuevo precio
                                // }));
                                createPreference(30);
                                sendSubInfo();
                            }}
                                className='mt-2 text-center text-white bg-orange-200 py-2 rounded font-semibold hover:bg-orange-400 '>SUSCRIBETE</button>
                        </div>
                    </div>
                    <div className="rounded my-3 shadow-2xl bg-gray-300">
                        <div className="p-5 flex flex-col">
                            <div className="rounded overflow-hidden">
                                <img src="https://res.cloudinary.com/dtsmy1ksn/image/upload/v1694746264/gl/278_ftvkgw.jpg" alt="" />
                            </div>
                            <h5 className='text-xl md:text-2xl font-medium mt-3'>Amigos Xul Solar Plus($50/año)</h5>
                            <p className='text-gray-500 text-lg mt-3'>
                                -10 entradas gratis al mes<br/>
                                -1 entrada gratis mensual a la visita astrológica<br/>
                                -15% de descuento en la tienda<br/>
                                -15% de descuento en las actividades y espectáculos del Pan Klub</p>
                            <button onClick={() => {
                                // setPrice(50)
                                createPreference(50)
                                sendSubInfo()
                            }}
                                className='mt-2 text-center text-white bg-orange-200 py-2 rounded font-semibold hover:bg-orange-400 '>SUSCRIBETE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}