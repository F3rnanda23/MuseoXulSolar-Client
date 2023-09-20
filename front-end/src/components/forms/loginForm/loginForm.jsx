import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form'
import Cookies from "universal-cookie";
import axios from "axios";
import { logIn } from "../../../redux/actions/actions";

import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";



export function LoginForm() {
    const dispatch = useDispatch();

    const [value, setValue] = useState("");
    const [isGoogleLogin, setIsGoogleLogin] = useState(false);
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const cookies = new Cookies();

    const showPassword = () => {
        !visible ? setVisible(true)
            : setVisible(false)
    }

    const onSubmit = async (data) => {
        try {
            const endpoint = 'http://localhost:3001/usuario/login';
            const response = await axios.post(endpoint, data);
            if (response.data.success) {
                cookies.set('id', response.data.id, { path: '/' });
                cookies.set('name', response.data.name, { path: '/' });
                cookies.set('email', response.data.email, { path: '/' });
                dispatch(logIn(true));
                alert(response.data.name + ' inicio sesión');
                navigate('/');
            } else {
                alert('El usuario o la contraseña son incorrectos');
            }
        } catch (error) {
            alert(error);
        }
    }

    const googleHandler = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const data = result.user;
            console.log(data);

            setValue(data.email);
            console.log(setValue);
            localStorage.setItem("email", data.email);

            dispatch(logIn(true));
            alert('inicio sesión con google');
            navigate("/")
        } catch (error) {
            // Manejar errores aquí
            console.error("Error al iniciar sesión con Google:", error);
        }
    }

    useEffect(() => {
        setValue(localStorage.getItem("email"))
    })

    return (
        <div className="rounded p-8 py-2 bg-gray-600 ">
            <h2 className="mt-5 text-center text-2xl font-semibold text-white">Iniciar sesión</h2>

            <form onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-center justify-center py-8" >
                <div className="flex flex-col w-full m-5 relative">
                    <input
                        className='w-full p-2 rounded'
                        type="text"
                        placeholder="correo electronico"
                        {...register("email",
                            { required: true })} />
                    {errors.email?.type === "required" && (
                        <span className="absolute text-white text-sm mt-10">*Ingrese su correo electronico</span>
                    )}
                </div>
                <div className="flex flex-col w-full m-5 relative ">
                    <input
                        className='w-full p-2 rounded '
                        type={visible ? "text" : "password"}
                        placeholder="contraseña"
                        {...register("password",
                            { required: true })} />
                    <button className="absolute inset-y-0 right-0 p-2 -mr-1"
                        onClick={showPassword}
                        type="button">
                        {visible ? (<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9UlEQVR4nO2UPQ4BURSFv0I0hkItsRTDdixAiN5Yhh0IVkBlA7qpGBagUJKXnEhw3/OmmSh8yW3euefe9w9/fp02MAQ2wBG4KY4aGyqnNDVgDFyB+5e4Ktd5ougA+4jC97fYyxukC+SGeQn0gIYiBVZGXq4aJglwMEyjwIQmRv5BtT5YeGbuqANz4AwUQKYxx9rwuVovpJ597UnPDM2NOfoer6v5ZOdJSqSfDe0irenxbss0KAztJK0V0yD9sszM0GbSBjFb5DvklbS6mhTGIW9iDjl0TSf4mZa5pqGHttZtSRQDz8yDD62Sr6KSz66S7/pPdTwA4jXIWC41knQAAAAASUVORK5CYII="></img>) : (<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABXElEQVR4nN2Vu0oDQRSGvyJewA2IYlAI5Al8A8EIYq1vIeQJtNHSZ7AQUlmbWIuYysLG9VKpkJDSQoIKgq6s/MgwzNlNhEX0wLAwc875Zs9t4D/KVJHOd4FbYKGom8dAom9F+2XgEHgAnoFXoAccAw1gZhRIxYCsA2/a99cA2AJKw0IWgfcRIQlwDlTznM8DN55h7EAmFMo60ApA7oCa5Tw1vDZuFzsQV7YDuukFoxBgP6B8auTElXbArukrLRk3X5XTbgZkxbBNw/gtJ4bSrM4fM8JVNmw7LqBjKEU672fkZNKorjMXUM/5zb2cxG94kA9g2c9DM+CkpbNxQfoKVzcHchAohq9w+D2QqBR9SZ1eGc14kTUwa2oWH9JWtURK/JpKOBSuMXKkqrZPRlxWnwSlpAE2GMLxE3D/EwgaxQ2N5p5G9YuSfARsAtOBKVzIozUHXAI7/NXnll+RT3SJxryK+e+1AAAAAElFTkSuQmCC"></img>)}</button>

                    {errors.password?.type === "required" && (
                        <span className="absolute text-white text-sm mt-10">*Ingrese su contraseña</span>)}
                </div>
                <div className="mb-5">
                    <button className="text-white text-sm mt-2">¿Has olvidado tu contraseña?</button>
                </div>
                <div className="w-full">
                    <button
                        type="submit"
                        className="w-full border border-black rounded p-2 text-white bg-gray-900 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all">INICIAR SESIÓN</button>
                </div>
                <div className="mt-5 grid grid-cols-3 items-center text-gray-400 gap-1 w-full">
                    <hr className="border-gray-400" />
                    <p className="text-center">O</p>
                    <hr className="border-gray-400" />
                </div>
                <div>
                    <span className="text-white mr-2">¿No es un miembro?</span>
                    <button className="text-orange-400 hover:text-orange-500" onClick={() => navigate('/register')}>Registrate</button>
                </div>
            </form>
            <div className="w-full">
                <button
                    onClick={googleHandler}
                    className="w-full flex items-center bg-white rounded p-2 mt-5 h-100 mb-5 space-x-4 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all">
                    <img className="w-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="" />
                    <span className="text-center">iniciar sesion con Google</span>
                </button>
            </div>
        </div>
    )

}