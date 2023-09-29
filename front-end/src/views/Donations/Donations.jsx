// import { initMercadoPago } from '@mercadopago/sdk-react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
import { FormattedMessage } from 'react-intl';
// import img1 from '../../imagenes/patrocinios/pic1.png'
// import img2 from '../../imagenes/patrocinios/pic2.png'

// const Donations = () => {
//     const [initPoint, setInitPoint] = useState(null);
//     const [redirecting, setRedirecting] = useState(false);
//     const [donationAmount, setDonationAmount] = useState('');

//     useEffect(() => {
//         initMercadoPago('TEST-e0166f16-2634-4d27-b335-dd9345dc638f');
//     }, []);

//     const handlePaymentClick = async () => {
//         const price = donationAmount;

//         try {
//             const response = await axios.post('https://server-xul-solar.vercel.app/pagar', {
//                 description: `Donativos - $${donationAmount}`,
//                 price: price,
//                 quantity: 1,
//             }, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 }
//             });

//             const { init_point } = response.data;
//             setInitPoint(init_point);
//             setRedirecting(true);
//             window.location.href = init_point;
//         } catch (error) {
//             throw new Error(error.message);
//         }
//     };

//     return (
//         <div className='bg-gray-200 min-h-screen'>

//             <main className="flex flex-row justify-center items-center h-full">
//                 <div className='h-2/4 flex flex-col justify-center'>
//                     <img src={img2} alt="picture" className='mx-10 h-2/4' />
//                 </div>
//                 <div className='w-3/5 flex flex-col items-center h-full'>

//                     <h2 className="text-black text-2xl font-bold mt-5 md:mt-8 lg:mt-10 mb-5 md:mb-8 lg:mb-10">Hacé tu donación a la Fundación Pan Klub</h2>
//                     <p className='w-2/3 mb-5 md:mb-8 lg:mb-10 text-lg'>Tu apoyo nos ayudará a mantener la programación del museo, así como sustentar el archivo de la Fundación.
//                         Tu contribución es muy importante para nuestro futuro y estamos muy agradecidos por ella.
//                         Muchas gracias.
//                     </p>
//                     <section className="flex flex-col justify-center items-center md:flex-row gap-5 py-10 px-5 bg-white rounded-md shadow-lg h-1/2 md:h-1/2 lg:h-1/2 w-3/4 md:max-w-2xl">

//                         <div className='h-full flex flex-col items-center'>

//                             <h2 className='text-lg font-bold'>Elegí uno de los aportes sugeridos o ingresá tu aporte deseado abajo.</h2>
//                             <div className='grid grid-cols-5 gap-2 place-items-center mt-5'>
//                                 <button className='rounded  bg-orange-200 px-3 py-1 text-gray-200 shadow-xl transition-all duration-300 hover:scale-105 w-[60px]'
//                                     onClick={() => setDonationAmount(5)}>$5</button>
//                                 <button className='rounded bg-orange-200 px-3 py-1 text-gray-200 shadow-xl transition-all duration-300 hover:scale-105 w-[60px]'
//                                     onClick={() => setDonationAmount(10)}>$10</button>
//                                 <button className='rounded  bg-orange-200 px-3 py-1 text-gray-200 shadow-xl transition-all duration-300 hover:scale-105 w-[60px]'
//                                     onClick={() => setDonationAmount(20)}>$20</button>
//                                 <button className='rounded  bg-orange-200 px-3 py-1 text-gray-200 shadow-xl transition-all duration-300 hover:scale-105 w-[60px]'
//                                     onClick={() => setDonationAmount(50)}>$50</button>
//                                 <button className='rounded  bg-orange-200 px-3 py-1 text-gray-200 shadow-xl transition-all duration-300 hover:scale-105 w-[60px]'
//                                     onClick={() => setDonationAmount(100)}>$100</button>
//                             </div>
//                             <input className='mt-5 md:mt-8 lg:mt-10 bg-orange-100 border border-gray-500 p-2 rounded shadow-md'
//                                 placeholder='$USD'
//                                 type="number"
//                                 min="1"
//                                 value={donationAmount}
//                                 onChange={(e) => setDonationAmount(Number(e.target.value))}
//                             />
//                             <button className='mt-4 md:mt-6 lg:mt-8 rounded mr-2 bg-orange-200 px-3 py-1 text-xl text-gray-200 shadow-xl transition-all duration-300 hover:scale-105'
//                                 onClick={handlePaymentClick}>Donar $ {donationAmount} USD</button>
//                             {redirecting && <span className='bg-orange-200 mt-5 md:mt-8 lg:mt-10'>Redirigiendo a Mercado Pago...</span>}
//                         </div>
//                     </section>
//                 </div>
//                 <div className='h-3/4 flex flex-col justify-center'>
//                     <img src={img2} alt="picture" className='h-2/4' />
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default Donations;



// Frontend

// const handlePaymentClick = async () => {
//     const price = donationAmount;

//     try {
//       const response = await axios.post('http://localhost:3001/pagar', {
//         description: `Donativos - $${donationAmount}`,
//         price: price,
//         quantity: 1,
//         userEmail: userEmail
//       }, {
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       });

//       const { init_point, id } = response.data;
//       console.log('====================================');
//       console.log(response.data);
//       console.log('====================================');
//       setInitPoint(init_point);
//       setRedirecting(true);
//       window.location.href = init_point;

//       // Luego, realiza una solicitud al backend para verificar el estado del pago
//       const paymentStatusResponse = await axios.get(`http://localhost:3001/pagar/verificar/${id}`);

//       const paymentStatus = paymentStatusResponse.data.status;
//       console.log(paymentStatus);
//       if (paymentStatus === 'approved') {
//         // El pago está aprobado, puedes realizar acciones adicionales aquí
//         console.log('El pago está aprobado');
//       } else {
//         // El pago no está aprobado
//         console.log('El pago no está aprobado');
//       }
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   };
import { initMercadoPago } from '@mercadopago/sdk-react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import img1 from '../../imagenes/patrocinios/pic1.png';
import img2 from '../../imagenes/patrocinios/pic2.png';
import { auth } from '../../components/forms/loginForm/config';

const Donations = () => {
  const [initPoint, setInitPoint] = useState(null);
  const [redirecting, setRedirecting] = useState(false);
  const [donationAmount, setDonationAmount] = useState('');
  const [userEmail, setUserEmail] = useState('');


  const fetchUserEmail = () => {
    if (auth.currentUser) {
      const email = auth.currentUser.email;
      setUserEmail(email);
    }
  };
  console.log('1', userEmail);

  useEffect(() => {
    initMercadoPago('TEST-e0166f16-2634-4d27-b335-dd9345dc638f');
    fetchUserEmail()
  }, []);

  const handlePaymentClick = async () => {
    const price = donationAmount;

    try {
      const response = await axios.post('http://localhost:3001/pagar', {
        description: `Donativos - $${donationAmount}`,
        price: price,
        quantity: 1,
        userEmail: userEmail
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log('2', userEmail);

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
        <div className='h-2/4 flex flex-col justify-center'>
          <img src={img2} alt="picture" className='mx-10 h-2/4' />
        </div>
        <div className='w-3/5 flex flex-col items-center h-full'>

          <h2 className="text-black text-2xl font-bold mt-5 md:mt-8 lg:mt-10 mb-5 md:mb-8 lg:mb-10">
            <FormattedMessage
              id='donaciones.titulo'
              defaultMessage='Hacé tu donación a la Fundación Pan Klub'
            /></h2>
          <p className='w-2/3 mb-5 md:mb-8 lg:mb-10 text-lg'>
            <FormattedMessage
              id='membresia.texto'
            />
          </p>
          <section className="flex flex-col justify-center items-center md:flex-row gap-5 py-10 px-5 bg-white rounded-md shadow-lg h-1/2 md:h-1/2 lg:h-1/2 w-3/4 md:max-w-2xl">

            <div className='h-full flex flex-col items-center'>

              <h2 className='text-lg font-bold'>
                <FormattedMessage
                  id='donaciones.aportes'
                  defaultMessage='Elegí uno de los aportes sugeridos o ingresá tu aporte deseado abajo.'
                /></h2>
              <div className='grid grid-cols-5 gap-2 place-items-center mt-5'>
                <button className='rounded  bg-orange-200 px-3 py-1 text-gray-200 shadow-xl transition-all duration-300 hover:scale-105 w-[60px]'
                  onClick={() => setDonationAmount(5)}>$5</button>
                <button className='rounded bg-orange-200 px-3 py-1 text-gray-200 shadow-xl transition-all duration-300 hover:scale-105 w-[60px]'
                  onClick={() => setDonationAmount(10)}>$10</button>
                <button className='rounded  bg-orange-200 px-3 py-1 text-gray-200 shadow-xl transition-all duration-300 hover:scale-105 w-[60px]'
                  onClick={() => setDonationAmount(20)}>$20</button>
                <button className='rounded  bg-orange-200 px-3 py-1 text-gray-200 shadow-xl transition-all duration-300 hover:scale-105 w-[60px]'
                  onClick={() => setDonationAmount(50)}>$50</button>
                <button className='rounded  bg-orange-200 px-3 py-1 text-gray-200 shadow-xl transition-all duration-300 hover:scale-105 w-[60px]'
                  onClick={() => setDonationAmount(100)}>$100</button>
              </div>
              <input className='mt-5 md:mt-8 lg:mt-10 bg-orange-100 border border-gray-500 p-2 rounded shadow-md'
                placeholder='$USD'
                type="number"
                min="1"
                value={donationAmount}
                onChange={(e) => setDonationAmount(Number(e.target.value))}
              />
              <button className='mt-4 md:mt-6 lg:mt-8 rounded mr-2 bg-orange-200 px-3 py-1 text-xl text-gray-200 shadow-xl transition-all duration-300 hover:scale-105'
                onClick={handlePaymentClick}>
                <FormattedMessage
                  id='donaciones.donar'
                  defaultMessage='Donar'
                /> $ {donationAmount} USD</button>
              {redirecting && <span className='bg-orange-200 mt-5 md:mt-8 lg:mt-10'>Redirigiendo a Mercado Pago...</span>}
            </div>
          </section>
        </div>
        <div className='h-3/4 flex flex-col justify-center'>
          <img src={img2} alt="picture" className='h-2/4' />
        </div>
      </main>
    </div>
  );
};

export default Donations;

