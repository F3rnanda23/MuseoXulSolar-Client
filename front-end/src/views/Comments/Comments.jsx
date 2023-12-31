import CreateComment from '../../components/forms/createCommentForm/createCommentForm'

import backgroundImage from '../../imagenes/background/bg1.png';  // Importa la imagen

import { useSelector } from 'react-redux';

const Comments = () => {

    const payloadReducer = useSelector(state => state.Comments)
    console.log(payloadReducer);
    
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };

    return (

        <div className="w-screen h-screen flex flex-col justify-center items-center" style={backgroundStyle}>
            <CreateComment />
        </div>
    );
}

export default Comments;