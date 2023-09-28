import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import CommentCard from '../../components/commentCard/commentCard'
import backgroundImage from '../../imagenes/background/bg1.png'
import { getAllComments, resetComments } from '../../redux/actions/actions';
import CommentStats from '../../components/commentStats/commentStats';



const ViewComents = () => {

  const dispatch = useDispatch();
  const allComments = useSelector(state => state.comments)

  useEffect(() => {
    dispatch(getAllComments());
    
    // const totalComments = [];
    // for (let i = 1; i < 6; i++) {
    //   const eachRating = allComments.filter(comment => comment.rating === i);
    //   totalComments.push(eachRating.length);
    // }
    // console.log(totalComments);

  }, [dispatch]);


  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  function handleReset() {
    dispatch(resetComments());
  }

  return (

  
    <div className="flex flex-col min-h-screen" style={backgroundStyle}>
      <div className="text-center">
        <h1 className="text-2xl font-bold mt-6 mb-4">Comentarios en AD</h1>
      </div>
      <button className="rounded mt-5 md:mt-7 lg:mt-10 bg-orange-200 p-2 ml-auto md:mx-auto lg:mr-44 text-white shadow-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-orange-400 w-full md:w-36"
        onClick={handleReset}>Borrar Filtros</button>
      <div className="flex flex-col md:flex-row">

        <div className="flex-1 p-4 md:order-2">
          <CommentStats/>
        </div>

        <div className="flex-1 p-4 md:order-1">
          {allComments.map((comment) => (
            <div key={comment.id} className="w-97 mb-4">
              <CommentCard comment={comment} />
            </div>
          ))}
        </div>
      </div>
    </div>


  );
}

export default ViewComents;