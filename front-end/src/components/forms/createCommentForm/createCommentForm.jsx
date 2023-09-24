import { useState } from "react";
import { useSelector } from "react-redux";

const CreateComment = () => {

    const [selectedRating, setSelectedRating] = useState(0);

    const handleRatingClick = (rating) => {
        setSelectedRating(rating);
    };

    const ratings = [1, 2, 3, 4, 5];

    const userInfo = useSelector(state => state.loggedUserInfo);
    const userId = userInfo.id;

    const currentDate = new Date();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };

    const [comment, setComment] = useState({
        description: '',
        date: formatDate(currentDate),
        usuarioId: userId,

    });

    return (
        <div className="h-screen w-4/5">

            <h1 className="text-center mb-10 text-3xl font-bold">¡Apreciamos tu opinión!</h1>

            <form className="flex flex-col justify-center items-center h-3/4">

                <div className="w-full h-full flex flex-col items-center my-2 md:my-3 lg:my-5">

                    <label className="mb-4 md:mb-6 lg:mb-8 text-2xl font-bold">Deja tu comentario:</label>
                    <input type="text" maxLength={500} className="w-1/3 h-1/3" />

                    <div className="mt-5 md:mt-7 lg:mt-10">

                    <label className="mb-4 md:mb-6 lg:mb-8 text-2xl font-bold">Califica tu experiencia</label>

                    <div className="mt-5 md:mt-7 lg:mt-10">
                        {ratings.map((rating) => (
                            
                            <button
                                key={rating}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleRatingClick(rating);
                                }}
                                className={`w-10 h-10 rounded-full p-2 font-bold ${rating === selectedRating ? 'bg-orange-200' : 'bg-transparent'} border ${rating === selectedRating ? 'border-black' : 'border-none'} cursor-pointer`}
                            >
                                {rating}
                            </button>
                        ))}
                        <p>Rating seleccionado: {selectedRating}</p>
                    </div>

                </div>

                </div>

              

            </form>
        </div>
    );
}

export default CreateComment;