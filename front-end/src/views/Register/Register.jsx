import { RegisterForm } from "../../components/forms/registerForm/registerForm";
import {useNavigate} from 'react-router-dom';


export function Register() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login');
    }

    return(
        <div className="flex w-full h-screen  bg-gray-300 relative">
            <div className="hidden lg:block">
                <img src='https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696269510/xulSolarIzqReg_xcaida.png' alt="" />
            </div>
            <div className="absolute left-0 top-0 mt-5 ml-5">
                    <button onClick={handleClick}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKNJREFUSEvllMENgCAMRR+b6CY6ipPpJq7iKKaJmoYgAi0ne+Ei//nbTwOdK3TW5z+AAZiArbalJS0S8fUCLLWQL4AWP4DR04FZXH7mzYGL+BvATTwFcBWPAVq8dpbx90/r9QwEsANyWisJEFENkVjOgJzNlUqRKyQX07tdJie5l+zipGRVmJx8AeLBuy+7Oz1d13VzRHPLziSqL5fMwATrDjgBmishGepbbBgAAAAASUVORK5CYII="/></button>
            </div>
            <div className="w-full flex align-center justify-center  py-12">
                <RegisterForm/>
            </div>
            <div className="hidden lg:block">
                <img src='https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696269503/xulSolarDerReg_uupskn.png' alt="" />
            </div>
        </div>
    )

}