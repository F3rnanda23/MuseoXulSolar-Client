import { FormattedMessage } from 'react-intl';
import img_Bg from '../../imagenes/background/bg1.png'
import { Question } from './Question';


const Faqs = () => {

    return (
        <div className='min-h-screen w-full bg-cover'
            style={{ backgroundImage: `url(${img_Bg})` }}>
            <h2 className='py-6 text-center text-2xl font-semibold'>
                <FormattedMessage
                    id='faq.titulo'
                    defaultMessage='Preguntas Frecuentes'
                /></h2>

            <div className='flex flex-col mx-auto w-3/4 lg:w-1/2 '>
                <Question
                    question={<FormattedMessage
                        id='faq.q1'
                        defaultMessage='¿Qué días y horarios está abierto el museo?'
                    />}
                    answer={<FormattedMessage
                        id='faq.a1'
                        defaultMessage='El Museo está abierto de martes a viernes de 12 a 20 hs, y los días sábados de 12 a 19 hs.'
                    />}/>

                <Question
                    question={<FormattedMessage
                        id='faq.q2'
                        defaultMessage='¿Debo sacar mi entrada anticipadamente? ¿Es necesario reservar?'
                    />}
                    answer={<FormattedMessage
                        id='faq.a2'
                        defaultMessage='No, podés adquirir tu entrada al museo en la puerta.'
                    />}/>
                <Question
                    question={<FormattedMessage
                        id='faq.q3'
                        defaultMessage='¿Puedo tomar fotografías?'
                    />}
                    answer={<FormattedMessage
                        id='faq.a3'
                        defaultMessage='Está permitido tomar fotografías sin flash, para uso personal y no-comercial.'
                    />}/>
                <Question
                    question={<FormattedMessage
                        id='faq.q4'
                        defaultMessage='¿Puedo entrar con mi mochila o bolso?'
                    />}
                    answer={<FormattedMessage
                        id='faq.a4'
                        defaultMessage='Cuando llegues podés comentarle al personal que te lo guarden en armarios para que disfrutes tu visita más cómoda.'
                    />}/>
                <Question
                    question={<FormattedMessage
                        id='faq.q5'
                        defaultMessage='¿Puedo comer o tomar bebidas en el museo?'
                    />}
                    answer={<FormattedMessage
                        id='faq.a5'
                        defaultMessage='No, no se permiten comidas y bebidas durante el recorrido.'
                    />}/>
            </div>
        </div>
    )
};

export default Faqs;