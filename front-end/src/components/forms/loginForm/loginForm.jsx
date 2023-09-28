import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form'
import Cookies from "universal-cookie";
import axios from "axios";
import { logIn } from "../../../redux/actions/actions";

import { auth, provider } from "./config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import swal from 'sweetalert';



export function LoginForm() {
    const dispatch = useDispatch();

    const [value, setValue] = useState("");
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
            // Verificar si el usuario ya ha iniciado sesión con Google
            const isGoogleLoggedIn = localStorage.getItem("googleLoggedIn");
            const googleEmail = localStorage.getItem("googleEmail");

            if (isGoogleLoggedIn === "true" && data.email === googleEmail) {
                // El usuario ya ha iniciado sesión con Google, mostrar un mensaje de error
                swal("error", "Este correo electrónico ya se ha utilizado para iniciar sesión con Google.", "error");
            } else {
                // Procede con el inicio de sesión manual normal
                const endpoint = 'https://server-xul-solar.vercel.app/usuario/login';
                const response = await axios.post(endpoint, data);

                if (response.data.success) {
                    cookies.set('id', response.data.id, { path: '/' });
                    cookies.set('name', response.data.name, { path: '/' });
                    cookies.set('email', response.data.email, { path: '/' });
                    dispatch(logIn(true));

                    swal("success", response.data.name + ' inicio sesión', "success");
                    navigate('/');
                } else {
                    // Mostrar una alerta de error cuando el inicio de sesión falla
                    swal("error", 'El usuario o la contraseña son incorrectos', "error");
                }
            }
        } catch (error) {
            // Mostrar una alerta de error genérica en caso de otros errores
            console.error(error); // Puedes registrar el error en la consola para fines de depuración.
            if (error.response && error.response.status === 401) {
                // Manejar la respuesta 401 aquí (inicio de sesión fallido)
                swal("error", 'El usuario o la contraseña son incorrectos', "error");
            } else {
                // Mostrar una alerta de error genérica en otros casos
                swal("Oops", 'Se produjo un error al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.', "error");
            }
        }
    }






    const googleHandler = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const data = result.user;
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            localStorage.setItem("googleLoggedIn", "true");
            localStorage.setItem("googleEmail", data.email);
            const createUserResponse = await fetch('https://server-xul-solar.vercel.app/usuario/crear', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: data.displayName?.split(' ')[0],
                    email: data.email,
                    telephone: data.phoneNumber,
                    password: data.uid,

                }),
            });

            if (createUserResponse.ok || createUserResponse.status === 404) {
                // Usuario creado exitosamente, ahora inicia sesión automáticamente
                const loginResponse = await fetch('https://server-xul-solar.vercel.app/usuario/loginGoogle', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({

                        email: data.email,
                        password: data.uid,
                    }),
                });

                if (loginResponse.ok) {
                    // Inicio de sesión exitoso
                    const serverResponse = await loginResponse.json();
                    console.log(serverResponse);

                    cookies.set('id', serverResponse.responseWithUserInfo.id, { path: '/' });
                    cookies.set('name', serverResponse.responseWithUserInfo.name, { path: '/' });
                    cookies.set('email', serverResponse.responseWithUserInfo.email, { path: '/' });

                    localStorage.setItem("googleAccessToken", token);

                    setValue(data.email);
                    localStorage.setItem("email", data.email);
                    setValue(data.id);


                    dispatch(logIn(true));
                    // const { id, name, email } = serverResponse.responseWithUserInfo;
                    // dispatch(guardarUserInfo({ id, name, email }))
                    swal("correct", serverResponse.responseWithUserInfo.name + " " + 'Inicio de sesión con Google exitoso', "success");
                    navigate("/");
                } else {
                    // Manejar errores de inicio de sesión
                    console.error('Error al iniciar sesión después de crear el usuario:', loginResponse.status);
                }
            } else {
                // Manejar errores de creación de usuario
                console.error('Error al crear el usuario en el servidor:', createUserResponse.status);
            }
        } catch (error) {
            // Manejar errores aquí
            console.error("Error al iniciar sesión con Google:", error);
        }
    }

    useEffect(() => {
        setValue(localStorage.getItem("email"))
    }, [])

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
                <div className="w-full">
                    <button
                        onClick={googleHandler}
                        type="button"
                        className="w-full flex items-center bg-white rounded p-2 mt-5 h-100 mb-5 space-x-4 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all">
                        <img className="w-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="" />
                        <span className="text-center">iniciar sesion con Google</span>
                    </button>
                </div>
                <div>
                    <span className="text-white mr-2">¿No es un miembro?</span>
                    <button type="button" className="text-orange-400 hover:text-orange-500" onClick={() => navigate('/register')}>Registrate</button>
g                </div>
            </form>
        </div>
    )

}