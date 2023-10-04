import { FormattedMessage } from 'react-intl';
import img_Bg from '../../imagenes/background/bg1.png'

const Collection = () => {

    return (
        <div className="min-h-screen "
            style={{ backgroundImage: `url(${img_Bg})` }}>
                <h2 className="text-center py-5 font-semibold text-2xl">
                    <FormattedMessage
                        id='colleccion.titulo'
                        defaultMessage='Colección Permanente'
                    />
                </h2>
            <div className='flex flex-col'>
                <div className="flex flex-col">
                    <h3>Obras de 1910 a 1919</h3>
                    <div className="grid grid-cols-3">

                    </div>
                </div>
                <div className="flex flex-col">
                    <h3>Obras de 1920 a 1929</h3>
                    <div className="grid grid-cols-3">

                    </div>
                </div>
                <div className="flex flex-col">
                    <h3>Obras de 1930 a 1939</h3>
                    <div className="grid grid-cols-3">

                    </div>
                </div>
                <div className="flex flex-col">
                    <h3>Obras de 1940 a 1949</h3>
                    <div className="grid grid-cols-3">

                    </div>
                </div>
                <div className="flex flex-col">
                    <h3>Obras de 1950 a 1959</h3>
                    <div className="grid grid-cols-3">

                    </div>
                </div>
                <div className="flex flex-col">
                    <h3>Obras de 1960 a 1962</h3>
                    <div className="grid grid-cols-3">

                    </div>
                </div>
            </div>

        </div>
    )
};

export default Collection;