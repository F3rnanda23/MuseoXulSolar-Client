import { useState } from "react";
import { useDispatch } from "react-redux";

import { createReview } from '../../../redux/actions/actions'

import  Cookies  from 'universal-cookie';


const CreateComment = () => {

    const cookies = new Cookies();
    const userId = cookies.get('id');
    const userEmail = cookies.get('email')
    
    
    const dispatch = useDispatch();
    const [selectedRating, setSelectedRating] = useState(0);

    const ratings = [1, 2, 3, 4, 5];

    const currentDate = new Date();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };


    const handleRatingClick = (rating) => {
       
        const  newComment = { ...comment, rating: rating };
        setComment(newComment)
    };

    const handleDescriptionChange = (event) => {
        const newComment = { ...comment, description: event.target.value };
        setComment(newComment);
      };

      const [comment, setComment] = useState({
        description: '',
        date: formatDate(currentDate),
        rating: '',
        UsuarioId: userId,
        email: userEmail,

    });

    const handleSubmit = () => {
      
        dispatch(createReview(comment))
    }


    return (
        <div className="h-screen w-4/5 flex flex-col items-center">

  <h1 className="text-center my-10 text-3xl font-bold">¡Apreciamos tu opinión!</h1>

  <form className="flex flex-col justify-center items-center h-4/6 w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 bg-gray-300 border-2 p-4 rounded-lg shadow-2xl bg-cover">

    <div className="w-full h-full flex flex-col items-center my-2 md:my-3 lg:my-5">

      <label className="mb-4 md:mb-6 lg:mb-8 text-2xl font-bold">Deja tu comentario:</label>
      <input
        type="text"
        maxLength={500}
        className="w-full md:w-2/3 lg:w-3/5 h-1/3 p-2"
        value={comment.description}
        onChange={handleDescriptionChange}
      />

      <div className="mt-5 md:mt-7 lg:mt-10">
        <label className="text-2xl font-bold">Califica tu experiencia</label>
        <div className="flex justify-center items-center rounded-md mt-3 md:mt-4 lg:mt-6" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.5)' }}>
          {ratings.map((rating) => (
            <button
              key={rating}
              onClick={(event) => {
                event.preventDefault()
                handleRatingClick(rating);
                setSelectedRating(rating);
              }}
              className={`w-10 h-10 rounded-full p-2 font-bold ${rating === selectedRating ? 'bg-orange-200' : 'bg-transparent'} border ${rating === selectedRating ? 'border-black' : 'border-gray-300'} cursor-pointer`}
              style={{ boxShadow: `${rating === selectedRating ? '0 0 10px rgba(0,0,0,0.5)' : '0 0 10px rgba(0,0,0,0.2)'}` }}
            >
              {rating}
            </button>
          ))}
        </div>
      </div>

    </div>

    <button
      onClick={handleSubmit}
      className="rounded mt-5 md:mt-7 lg:mt-10 bg-orange-200 p-2 text-white shadow-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-orange-400 w-full md:w-auto"
    >
      Enviar
    </button>
  </form>
</div>

    );
}

export default CreateComment;