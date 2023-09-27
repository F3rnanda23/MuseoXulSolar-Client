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
        <div className="w-screen flex flex-col justify-center min-h-screen" style={backgroundStyle}>
            comentarios en AD
            {allComments && allComments.map(comment =>
                <CommentCard key={comment.id} comment={comment} />
            )}

        </div >


    );
}

export default ViewComents;