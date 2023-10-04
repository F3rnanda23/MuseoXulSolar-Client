import { LoginForm } from "../../components/forms/loginForm/loginForm"
import firma from '../../imagenes/login/26.png'
import {useNavigate} from 'react-router-dom'

export function Login() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/')
    }

    return(
        <div className="flex w-full h-screen bg-gray-300 ">
            <div className="w-full flex items-center justify-center md:w-1/2 py-12 relative">
                <div className="absolute left-0 top-0 mt-5 ml-5">
                    <button onClick={handleClick}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKNJREFUSEvllMENgCAMRR+b6CY6ipPpJq7iKKaJmoYgAi0ne+Ei//nbTwOdK3TW5z+AAZiArbalJS0S8fUCLLWQL4AWP4DR04FZXH7mzYGL+BvATTwFcBWPAVq8dpbx90/r9QwEsANyWisJEFENkVjOgJzNlUqRKyQX07tdJie5l+zipGRVmJx8AeLBuy+7Oz1d13VzRHPLziSqL5fMwATrDjgBmishGepbbBgAAAAASUVORK5CYII="/></button>
                </div>
                <LoginForm/>
            </div>
            <div className="hidden md:flex h-full w-1/2 items-center justify-center relative">
                <div className="">
                    <img src='https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696269450/serpiente_qywebh.png' alt="" />
                </div>
                <div className="absolute right-0 bottom-0 mb-10 mr-10">
                    <img src='https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696269474/26_ug37rs.png' alt="firma de xul" className="w-18 h-10"/>
                </div>
            </div>
        </div>
    )

}