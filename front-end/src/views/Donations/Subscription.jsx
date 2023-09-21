import card1 from '../../imagenes/patrocinios/40.jpg'
// import card2 from '../../imagenes/patrocinios/40.jpg'

export const Subscription = () => {
    return (
    <div className="bg-gray-200">
        <h2 className="text-center text-3xl pt-5">HACETE MIEMBRO DEL PAN KLUB</h2>
        <div className=" flex items-center justify-center min-h-screen mx-auto container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="rounded shadow-lg">
                    <div className="p-5 flex flex-col">
                        <div className="rounded overflow-hidden">
                            <img src={card1} alt="" />
                        </div>
                        <h5 className='text-2xl md:text-3xl font-medium mt-3'>Miembro($2/m)</h5>
                        <p className='text-gray-500 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, repudiandae. Ducimus adipisci est maiores minus eaque. </p>
                        <button className='mt-2 text-center text-white bg-orange-200 py-2 rounded font-semibold hover:bg-orange-400 '>SUSCRIBETE</button>
                    </div>
                </div>
                <div className="rounded shadow-lg">
                    <div className="p-5 flex flex-col">
                        <div className="rounded overflow-hidden">
                            <img src={card1} alt="" />
                        </div>
                        <h5 className='text-2xl md:text-3xl font-medium mt-3'>Socio($5/m)</h5>
                        <p className='text-gray-500 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, repudiandae. Ducimus adipisci est maiores minus eaque. </p>
                        <button className='mt-2 text-center text-white bg-orange-200 py-2 rounded font-semibold hover:bg-orange-400 '>SUSCRIBETE</button>
                    </div>
                </div>
                <div className="rounded shadow-lg">
                    <div className="p-5 flex flex-col">
                        <div className="rounded overflow-hidden">
                            <img src={card1} alt="" />
                        </div>
                        <h5 className='text-2xl md:text-3xl font-medium mt-3'>Socio Premium($9/m)</h5>
                        <p className='text-gray-500 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, repudiandae. Ducimus adipisci est maiores minus eaque. </p>
                        <button className='mt-2 text-center text-white bg-orange-200 py-2 rounded font-semibold hover:bg-orange-400 '>SUSCRIBETE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}