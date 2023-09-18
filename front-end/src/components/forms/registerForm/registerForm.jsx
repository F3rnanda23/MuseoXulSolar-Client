import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router";
import {useForm} from 'react-hook-form'

export function RegisterForm (){
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false)

    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm();

    const showPassword = (e) => {
        e.preventDefault();
        !visible ? setVisible(true) 
        : setVisible(false)
    }

    const onSubmit = async (data) => {
        try {
            const endpoint = 'http://localhost:3001/usuario/crear'
            const response = await axios.post(endpoint, data)
            if(response.data) alert('Usuario Creado')
            navigate('/login')
        } catch (error) {
            alert(error.response.data)
        }
        
    }

    const googleHandler = async () => {
        try {
            const endpoint = 'http://localhost:3001/auth/google'
            await axios.get(endpoint)
            
        } catch (error) {
            alert(error)
        }
    }
    
    return (
        <div className="rounded p-8 py-2 bg-gray-700 ">
            <h2 className="mt-2 text-center text-2xl font-semibold text-white">REGISTRATE</h2>

            <form onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-center justify-center " >
                <div className=" w-full m-2">
                    <label className="text-white text-sm">Nombre:</label>
                    <input 
                        className='w-full p-2 rounded'
                        type="text"
                        placeholder="Nombre"
                        {...register("name",
                        {required:true, minLength:2, 
                        pattern:/^[^0-9]*$/})}/>
                        {errors.name?.type==="required" && (
                            <span className='text-red-600'>*Ingrese su nombre</span>
                        )}
                        {errors.name?.type==="minLength" && (
                            <span className='text-red-600'>*Ingrese al menos 2 caracteres</span>
                        )}
                        {errors.name?.type==="pattern" && (
                            <span className='text-red-600'>*ingrese solo letras del alfabeto</span>
                        )}
                </div>
                <div className="w-full m-2">
                    <label className="text-white text-sm">Correo electronico:</label>
                    <input 
                        className='w-full p-2 rounded'
                        type="text"
                        placeholder="Correo electronico"
                        {...register("email",
                        { required:true, pattern:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/} )}/>
                        {errors.email?.type==="required" && (
                            <span className='text-red-600'>*Ingrese su correo electronico</span>)}
                        {errors.email?.type==="pattern" && (
                            <span className='text-red-600'>*Ingrese una direccion válida</span>)}
                </div>
                <div className="grid grid-cols-2 items-center gap-2 w-full m-2">
                    <div className="flex flex-col">
                        <label className="text-white text-sm">Fecha de nacimiento:</label>
                        <input 
                            className=' p-2 rounded'
                            type="date"
                                {...register("birthday",
                                { required:true})}/>
                                {errors.birthday?.type==="required" && (
                            <span className='text-red-600'>*Ingrese su fecha de nacimiento</span>)}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-white text-sm">Celular:</label>
                        <input 
                            className='p-2 rounded '
                            type="text"
                            placeholder="Celular"
                                {...register("phone",
                                { required:true, pattern:/^[0-9]+$/})}/>
                                {errors.phone?.type==="required" && (
                            <span className='text-red-600'>*Ingrese su número de celular</span>)}
                                {errors.phone?.type==="pattern" && (
                            <span className='text-red-600'>*Ingrese solo números</span>)}
                    </div>
                </div>
                <div className="w-full m-2 relative ">
                    <label className="text-white text-sm">Contraseña:</label>
                    <input className='w-full p-2 rounded '
                            type={visible ? "text" : "password"}
                            placeholder="Contraseña" 
                            {...register("password",
                                { required:true})}/>
                        <button className="absolute inset-y-0 right-0 p-2 -mr-1 -mb-6"
                            onClick={(e) => showPassword(e)}> 
                            {visible ? (<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9UlEQVR4nO2UPQ4BURSFv0I0hkItsRTDdixAiN5Yhh0IVkBlA7qpGBagUJKXnEhw3/OmmSh8yW3euefe9w9/fp02MAQ2wBG4KY4aGyqnNDVgDFyB+5e4Ktd5ougA+4jC97fYyxukC+SGeQn0gIYiBVZGXq4aJglwMEyjwIQmRv5BtT5YeGbuqANz4AwUQKYxx9rwuVovpJ597UnPDM2NOfoer6v5ZOdJSqSfDe0irenxbss0KAztJK0V0yD9sszM0GbSBjFb5DvklbS6mhTGIW9iDjl0TSf4mZa5pqGHttZtSRQDz8yDD62Sr6KSz66S7/pPdTwA4jXIWC41knQAAAAASUVORK5CYII="></img>) : (<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABXElEQVR4nN2Vu0oDQRSGvyJewA2IYlAI5Al8A8EIYq1vIeQJtNHSZ7AQUlmbWIuYysLG9VKpkJDSQoIKgq6s/MgwzNlNhEX0wLAwc875Zs9t4D/KVJHOd4FbYKGom8dAom9F+2XgEHgAnoFXoAccAw1gZhRIxYCsA2/a99cA2AJKw0IWgfcRIQlwDlTznM8DN55h7EAmFMo60ApA7oCa5Tw1vDZuFzsQV7YDuukFoxBgP6B8auTElXbArukrLRk3X5XTbgZkxbBNw/gtJ4bSrM4fM8JVNmw7LqBjKEU672fkZNKorjMXUM/5zb2cxG94kA9g2c9DM+CkpbNxQfoKVzcHchAohq9w+D2QqBR9SZ1eGc14kTUwa2oWH9JWtURK/JpKOBSuMXKkqrZPRlxWnwSlpAE2GMLxE3D/EwgaxQ2N5p5G9YuSfARsAtOBKVzIozUHXAI7/NXnll+RT3SJxryK+e+1AAAAAElFTkSuQmCC"></img>)}</button>
                        {errors.password?.type==="required" && (
                            <span className='text-red-600'>*Debe crear una contraseña</span>)}
                </div>

                <div className="w-full">
                    <button type='submit' className="w-full mt-3 rounded p-2 text-white bg-gray-900 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all">REGISTRARSE</button>
                </div>
                <div className="mt-2 grid grid-cols-3 items-center text-gray-400 gap-1 w-full">
                    <hr className="border-gray-400"/>
                    <p className="text-center">O</p>
                    <hr className="border-gray-400" />
                </div>
                <div className="w-full">
                    <button
                        onClick={googleHandler}
                        className="w-full flex items-center justify-center bg-white border border-gray-400 rounded p-2 mt-2  space-x-4 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all">
                        <img className="w-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="" />
                        <span className="text-center">registrarse con Google</span>
                    </button>
                </div>
            </form>
        </div>
    )

}

