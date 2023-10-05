import axios from 'axios';
import { useState } from 'react';
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux';

import { sendSubsInfo } from '../../redux/actions/actions'
import { FormattedMessage } from 'react-intl';
import img_Bg from '../../imagenes/background/bg1.png'
import { async } from '@firebase/util';
import { func } from 'prop-types';
import swal from 'sweetalert';
import { useNavigate } from 'react-router';


export const Subscription = () => {

    const dispatch = useDispatch();
    const [initPoint, setInitPoint] = useState(false);
    const [price, setPrice] = useState('')
    const navigate = useNavigate();

    const active = useSelector(state => state.active)

    const currentDate = new Date();

    const cookies = new Cookies();
    const userId = cookies.get('id');
    const userEmail = cookies.get('email');
    const userName = cookies.get('name');



    const createPreference = async (subscripcion, price) => {

        try {
            if (!active) {
                swal("error","Para suscribirte debes Iniciar sesión","error");
                navigate('/login')
            } else {
                const response = await axios.post('https://server-xul-solar-ag97.vercel.app/pagar', {
                    description: `Membresia anual de $${price}`,
                    price: price,
                    quantity: 1,
                    usuarioId: userId,
                    email: userEmail,
                    name: userName,
                    subscripcion: price,
                    date: currentDate,
                    tipo: subscripcion,
                },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        }
                    });
                const { init_point } = response.data;
                swal("Espera","Redirigiendo a mercado pago", "success")
                setInitPoint(init_point);
                window.location.href = init_point;
            }
        } catch (error) {
            // window.alert("Usuario ya suscripto")
            throw new Error(error.message)
        }
    }

    const [subs, setSubs] = useState({
        usuarioId: userId,
        email: userEmail,
        name: userName,
        subscripcion: '',
        date: currentDate,
        tipo: `Membresia ${price}`
    })
    console.log(subs);

    const sendSubInfo = () => {
        dispatch(sendSubsInfo(subs))
    }



    return (
        <div className="bg-gray-200 min-h-screen w-full bg-cover"
            >
            <div className='container  max-w-screen-md mx-auto'>
                <h2 className="text-center text-3xl pt-5">
                    <FormattedMessage
                        id='membresia.titulo'
                        defaultMessage='Hacete miembro del Pan Klub'
                    /></h2>
                <p className='my-4'>
                    <FormattedMessage
                        id='membresia.texto'
                        defaultMessage='Obtené una variedad de beneficios que permitirán acceder a una experiencia única dentro del Museo. Desde entradas gratuitas y visitas guiadas exclusivas, hasta descuentos en la tienda, actividades y talleres dentro del museo. Elegí la opción que más te guste a continuación:'
                    />
                </p>
            </div>
            <div className=" flex items-center justify-center min-h-full mx-auto container">
                <div className="max-w-xs sm:max-w-sm grid grid-cols-1 gap-7 md:grid-cols-2 md:max-w-2xl  ">
                    <div className="rounded shadow-2xl my-3 bg-gray-300 hover:scale">
                        <div className="p-5 flex flex-col">
                            <div className="rounded overflow-hidden">
                                <img src="https://res.cloudinary.com/dtsmy1ksn/image/upload/v1694746264/gl/278_ftvkgw.jpg" alt="" />
                            </div>
                            <h5 className='text-xl md:text-2xl font-medium mt-3'>
                                <FormattedMessage
                                    id='membresia.titulocard1'
                                    defaultMessage='Amigos Xul Solar ($30/año)'
                                /></h5>
                            <p className='text-gray-500 text-lg mt-3'>
                                <FormattedMessage
                                    id='membresia.beneficio1card1'
                                    defaultMessage='✔5 entradas gratis al mes'
                                />
                            </p>
                            <p className='text-gray-500 text-lg mt-3'>
                                <FormattedMessage
                                    id='membresia.beneficio2card1'
                                    defaultMessage='✔10% de descuento en la tienda'
                                />
                            </p>
                            <p className='text-gray-500 text-lg mt-3'>
                                <FormattedMessage
                                    id='membresia.beneficio3card1'
                                    defaultMessage='✔10% de descuento en las actividades y espectáculos del Pan Klub'
                                />
                            </p>

                            <button onClick={() => {
                                setPrice(30)
                                createPreference(1, 30)
                                //sendSubsInfo()
                            }}></button>
                            <button onClick={() => {
                                setPrice(30);
                                // setSubs(prevState => ({
                                //     ...prevState,
                                //     tipo: `Membresia ${30}`  // Actualiza el tipo de membresía basado en el nuevo precio
                                // }));
                                createPreference(1, 30);
                                //sendSubInfo();
                            }}
                                className='mt-2 text-center text-white bg-orange-200 py-2 rounded font-semibold hover:bg-orange-400 '>
                                <FormattedMessage
                                    id='membresia.suscribete'
                                    defaultMessage='SUSCRIBETE'
                                /></button>
                        </div>
                    </div>
                    <div className="rounded my-3 shadow-2xl bg-gray-300">
                        <div className="p-5 flex flex-col">
                            <div className="rounded overflow-hidden">
                                <img src="https://res.cloudinary.com/dtsmy1ksn/image/upload/v1694746264/gl/278_ftvkgw.jpg" alt="" />
                            </div>
                            <h5 className='text-xl md:text-2xl font-medium mt-3'>
                                <FormattedMessage
                                    id='membresia.titulocard2'
                                    defaultMessage='Amigos Xul Solar Plus ($50/año)'
                                /></h5>
                            <p className='text-gray-500 text-lg mt-3'>
                                <FormattedMessage
                                    id='membresia.beneficio1card2'
                                    defaultMessage='✔10 entradas gratis al mes'
                                />
                            </p>
                            <p className='text-gray-500 text-lg mt-3'>
                                <FormattedMessage
                                    id='membresia.beneficio2card2'
                                    defaultMessage='✔1 entrada gratis mensual a la visita astrológica'
                                />
                            </p>
                            <p className='text-gray-500 text-lg mt-3'>
                                <FormattedMessage
                                    id='membresia.beneficio3card2'
                                    defaultMessage='✔1 entrada gratis mensual a la visita astrológica'
                                />
                            </p>
                            <p className='text-gray-500 text-lg mt-3'>
                                <FormattedMessage
                                    id='membresia.beneficio4card2'
                                    defaultMessage='✔1 entrada gratis mensual a la visita astrológica'
                                />
                            </p>
                            <button onClick={() => {
                                setPrice(50)
                                createPreference(2, 50)
                                //sendSubInfo()
                            }}
                                className='mt-2 text-center text-white bg-orange-200 py-2 rounded font-semibold hover:bg-orange-400 '>
                                <FormattedMessage
                                    id='membresia.suscribete'
                                    defaultMessage='SUSCRIBETE'
                                /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}