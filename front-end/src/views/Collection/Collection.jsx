import { useState } from 'react';

import { FormattedMessage } from 'react-intl';
import images from '../../components/galery/links'

const Collection = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    function handleImageClick(image) {
        setSelectedImage(image);
    }

    function handleCloseClick() {
        setSelectedImage(null);
    }

    return (
        <div className="min-h-screen ">
            <h2 className="text-center py-6 font-semibold text-3xl">
                <FormattedMessage
                    id='colleccion.titulo'
                    defaultMessage='Colección Permanente'
                />
            </h2>
            <div className='flex flex-col justify-between '>
                <div className="flex flex-col mb-6">
                    <h3 className='font-semibold text-xl bg-gray-100 p-4 mt-6'>Obras de 1910 a 1919</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-4">
                        {images
                            .filter(image => image.year >= 1910 && image.year <= 1919)
                            .sort((a, b) => a.year - b.year)
                            .map((image, index) => (
                                <div key={index} className='grid place-items-center'>
                                    <img
                                        className="w-auto sm:w-[220px] max-h-72 mt-6 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                                        src={image.img}
                                        alt={image.name}
                                        onClick={() => handleImageClick(image)}
                                    />
                                    <p className='text-lg font-semibold'>{image.name} - {image.year}</p>

                                </div>
                            ))}
                    </div>
                </div>
                <div className="flex flex-col mb-6">
                    <h3 className='font-semibold text-xl  bg-gray-100 p-4 mt-6'>Obras de 1920 a 1929</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-4">
                        {images
                            .filter(image => image.year >= 1920 && image.year <= 1929)
                            .sort((a, b) => a.year - b.year)
                            .map((image, index) => (
                                <div key={index} className='grid place-items-center'>
                                    <img
                                        className="w-auto sm:w-[220px] max-h-72 mt-6 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                                        src={image.img}
                                        alt={image.name}
                                        onClick={() => handleImageClick(image)}
                                    />
                                    <p className='text-lg font-semibold'>{image.name} - {image.year}</p>

                                </div>
                            ))}
                    </div>
                </div>
                <div className="flex flex-col mb-6">
                    <h3 className='font-semibold text-xl  bg-gray-100 p-4 mt-6'>Obras de 1930 a 1939</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-4">
                        {images
                            .filter(image => image.year >= 1930 && image.year <= 1939)
                            .sort((a, b) => a.year - b.year)
                            .map((image, index) => (
                                <div key={index} className='grid place-items-center'>
                                    <img
                                        className="w-auto sm:w-[220px] max-h-72 mt-6 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                                        src={image.img}
                                        alt={image.name}
                                        onClick={() => handleImageClick(image)}
                                    />
                                    <p className='text-lg font-semibold'>{image.name} - {image.year}</p>

                                </div>
                            ))}
                    </div>
                </div>
                <div className="flex flex-col mb-6">
                    <h3 className='font-semibold text-xl  bg-gray-100 p-4 mt-6'>Obras de 1940 a 1949</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-4">
                        {images
                            .filter(image => image.year >= 1940 && image.year <= 1949)
                            .sort((a, b) => a.year - b.year)
                            .map((image, index) => (
                                <div key={index} className='grid place-items-center'>
                                    <img
                                        className="w-auto sm:w-[220px] max-h-72 mt-6 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                                        src={image.img}
                                        alt={image.name}
                                        onClick={() => handleImageClick(image)}
                                    />
                                    <p className='text-lg font-semibold'>{image.name} - {image.year}</p>

                                </div>
                            ))}
                    </div>
                </div>
                <div className="flex flex-col mb-6">
                    <h3 className='font-semibold text-xl  bg-gray-100 p-4 mt-6'>Obras de 1950 a 1959</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-4">
                        {images
                            .filter(image => image.year >= 1950 && image.year <= 1959)
                            .sort((a, b) => a.year - b.year)
                            .map((image, index) => (
                                <div key={index} className='grid place-items-center'>
                                    <img
                                        className="w-auto sm:w-[220px] max-h-72 mt-6 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                                        src={image.img}
                                        alt={image.name}
                                        onClick={() => handleImageClick(image)}
                                    />
                                    <p className='text-lg font-semibold'>{image.name} - {image.year}</p>

                                </div>
                            ))}
                    </div>
                </div>
                <div className="flex flex-col mb-6">
                    <h3 className='font-semibold text-xl  bg-gray-100 p-4 mt-6'>Obras de 1960 a 1962</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-4">
                        {images
                            .filter(image => image.year >= 1960 && image.year <= 1962)
                            .sort((a, b) => a.year - b.year)
                            .map((image, index) => (
                                <div key={index} className='grid place-items-center'>
                                    <img
                                        className="w-auto sm:w-[220px] max-h-72 mt-6 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                                        src={image.img}
                                        alt={image.name}
                                        onClick={() => handleImageClick(image)}
                                    />
                                    <p className='text-lg font-semibold'>{image.name} - {image.year}</p>

                                </div>
                            ))}
                    </div>
                </div>
            </div>
            {selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="max-w-3xl p-4 bg-gray-500 rounded-lg shadow-lg">
                        <img
                            src={selectedImage.img}
                            alt={selectedImage.name}
                            className="w-full  max-h-[400px]"

                        />
                        <button
                            className="mt-4 p-2 bg-orange-200 text-gray-100 rounded hover:bg-gray-100 hover:text-orange-200"
                            onClick={handleCloseClick}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Collection;