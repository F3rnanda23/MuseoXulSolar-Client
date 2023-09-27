import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import CommentCard from '../../components/commentCard/commentCard'
import backgroundImage from '../../imagenes/background/bg1.png'
import { getAllComments } from '../../redux/actions/actions';



const ViewComents = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments());

    }, [dispatch]);

    const allComments = useSelector(state => state.comments)
    console.log(allComments);

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };

    return ( 
      
        <div className="flex flex-col min-h-screen" style={backgroundStyle}>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Comentarios en AD</h1>
        </div>
  
        <div className="flex">
          {/* Contenedor izquierdo */}
          <div className="flex-1 p-4">
            {allComments.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
  
        
          <div className="flex-1 p-4">
          Hola
          </div>
        </div>
      </div>


    );
}

export default ViewComents;