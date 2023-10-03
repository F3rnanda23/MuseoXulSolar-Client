import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { FormattedMessage } from 'react-intl';

export function RegisterForm() {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false)

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const showPassword = (e) => {
        e.preventDefault();
        !visible ? setVisible(true)
            : setVisible(false)
    }

    const onSubmit = async (data) => {
        try {
            const endpoint = 'https://server-xul-solar.vercel.app/usuario/crear'
            const response = await axios.post(endpoint, data)
            if (response.data) swal("exito", 'Usuario Creado', "success")
            navigate('/login')
        } catch (error) {
            swal("Oops", error.response.data, "error")
        }

    }

    return (
        <div className="rounded p-4 sm:p-8 pt-4 bg-gray-700 max-h-[700px] ">
            <h2 className="mt-2 text-center text-base sm:text-2xl lg:text-3xl font-semibold text-white">
                <FormattedMessage
                    id='registro.titulo'
                    defaultMessage='REGISTRATE'
                /></h2>

            <form onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-center justify-center " >
                <div className="flex flex-col w-full m-2 relative">
                    <label className="text-white text-xs sm:text-sm">
                        <FormattedMessage
                            id='registro.labelnombre'
                            defaultMessage='Nombre:'
                        /></label>
                    <input
                        className='w-full p-1 sm:p-2 rounded mb-2 text-xs sm:text-sm lg:text-base'
                        type="text"
                        placeholder="Nombre"
                        {...register("name",
                            {
                                required: true, minLength: 2,
                                pattern: /^[^0-9]*$/
                            })} />
                    {errors.name?.type === "required" && (
                        <span className='text-white text-xs sm:text-sm mt-12 sm:mt-16 absolute ml-1 '>
                            <FormattedMessage
                                id='registro.error1'
                                defaultMessage='*Ingrese su nombre'
                            /></span>
                    )}
                    {errors.name?.type === "minLength" && (
                        <span className='text-white text-xs sm:text-sm mt-12 sm:mt-16 absolute ml-1'>
                            <FormattedMessage
                                id='registro.error2'
                                defaultMessage='*Ingrese al menos 2 caracteres'
                            /></span>
                    )}
                    {errors.name?.type === "pattern" && (
                        <span className='text-white text-xs sm:text-sm mt-12 sm:mt-16 absolute ml-1' >
                            <FormattedMessage
                                id='registro.error3'
                                defaultMessage='*Ingrese solo letras'
                            /></span>
                    )}
                </div>
                <div className="w-full m-2 flex flex-col relative">
                    <label className="text-white text-xs sm:text-sm">
                        <FormattedMessage
                            id='registro.labelcorreo'
                            defaultMessage='Correo electronico:'
                        /></label>
                    <input
                        className='w-full p-1 sm:p-2 rounded mb-2 text-xs sm:text-sm lg:text-base'
                        type="email"
                        placeholder="Correo electronico"
                        {...register("email",
                            { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} />
                    {errors.email?.type === "required" && (
                        <span className='text-white text-xs sm:text-sm mt-12 sm:mt-16 absolute ml-1'>
                            <FormattedMessage
                                id='registro.error4'
                                defaultMessage='*Ingrese su correo electronico'
                            /></span>)}
                    {errors.email?.type === "pattern" && (
                        <span className='text-white text-xs sm:text-sm mt-12 sm:mt-16 absolute ml-1'>
                            <FormattedMessage
                                id='registro.error5'
                                defaultMessage='*Ingrese un correo válido'
                            /></span>)}
                </div>
                <div className="grid grid-cols-2 items-center gap-2 w-full m-2">
                    <div className="flex flex-col relative">
                        <label className="text-white text-xs sm:text-sm">
                            <FormattedMessage
                                id='registro.labelfecha'
                                defaultMessage='Fecha de nacimiento:'
                            /></label>
                        <input
                            className=' p-1 sm:p-2 rounded mb-3 text-xs sm:text-sm lg:text-base'
                            type="date"
                            {...register("birthday",
                                { required: true })} />
                        {errors.birthday?.type === "required" && (
                            <span className='text-white text-xs sm:text-sm mt-12 sm:mt-16 absolute ml-1'>
                                <FormattedMessage
                                    id='registro.error6'
                                    defaultMessage='*Ingrese su fecha de nacimiento'
                                /></span>)}
                    </div>
                    <div className="flex flex-col relative">
                        <label className="text-white text-xs sm:text-sm">
                            <FormattedMessage
                                id='registro.labelcelular'
                                defaultMessage='Celular:'
                            /></label>
                        <input
                            className='p-1 sm:p-2 rounded mb-3 text-xs sm:text-sm lg:text-base'
                            type="text"
                            placeholder="Celular"
                            {...register("phone",
                                { required: true, pattern: /^[0-9]+$/ })} />
                        {errors.phone?.type === "required" && (
                            <span className='text-white text-xs sm:text-sm mt-12 sm:mt-16 absolute ml-1'>
                                <FormattedMessage
                                    id='registro.error7'
                                    defaultMessage='*Ingrese su número de celular'
                                /></span>)}
                        {errors.phone?.type === "pattern" && (
                            <span className='text-white text-xs sm:text-sm mt-12 sm:mt-16 absolute ml-1'>
                                <FormattedMessage
                                    id='registro.error8'
                                    defaultMessage='*Ingrese solo números'
                                /></span>)}
                    </div>
                </div>
                <div className="w-full relative flex flex-col">
                    <label className="text-white text-xs sm:text-sm">
                        <FormattedMessage
                            id='registro.labelcontraseña'
                            defaultMessage='Contraseña:'
                        /></label>
                    <input className='w-full p-1 sm:p-2 rounded mb-2 text-xs sm:text-sm lg:text-base '
                        type={visible ? "text" : "password"}
                        placeholder="Contraseña"
                        {...register("password",
                            { required: true, pattern: /^.{8,}$/ })} />
                    <button className="absolute inset-y-0 right-0 p-2 -mr-1 -mb-3"
                        onClick={(e) => showPassword(e)}>
                        {visible ? (<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9UlEQVR4nO2UPQ4BURSFv0I0hkItsRTDdixAiN5Yhh0IVkBlA7qpGBagUJKXnEhw3/OmmSh8yW3euefe9w9/fp02MAQ2wBG4KY4aGyqnNDVgDFyB+5e4Ktd5ougA+4jC97fYyxukC+SGeQn0gIYiBVZGXq4aJglwMEyjwIQmRv5BtT5YeGbuqANz4AwUQKYxx9rwuVovpJ597UnPDM2NOfoer6v5ZOdJSqSfDe0irenxbss0KAztJK0V0yD9sszM0GbSBjFb5DvklbS6mhTGIW9iDjl0TSf4mZa5pqGHttZtSRQDz8yDD62Sr6KSz66S7/pPdTwA4jXIWC41knQAAAAASUVORK5CYII="></img>) : (<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABXElEQVR4nN2Vu0oDQRSGvyJewA2IYlAI5Al8A8EIYq1vIeQJtNHSZ7AQUlmbWIuYysLG9VKpkJDSQoIKgq6s/MgwzNlNhEX0wLAwc875Zs9t4D/KVJHOd4FbYKGom8dAom9F+2XgEHgAnoFXoAccAw1gZhRIxYCsA2/a99cA2AJKw0IWgfcRIQlwDlTznM8DN55h7EAmFMo60ApA7oCa5Tw1vDZuFzsQV7YDuukFoxBgP6B8auTElXbArukrLRk3X5XTbgZkxbBNw/gtJ4bSrM4fM8JVNmw7LqBjKEU672fkZNKorjMXUM/5zb2cxG94kA9g2c9DM+CkpbNxQfoKVzcHchAohq9w+D2QqBR9SZ1eGc14kTUwa2oWH9JWtURK/JpKOBSuMXKkqrZPRlxWnwSlpAE2GMLxE3D/EwgaxQ2N5p5G9YuSfARsAtOBKVzIozUHXAI7/NXnll+RT3SJxryK+e+1AAAAAElFTkSuQmCC"></img>)}</button>
                    {errors.password?.type === "required" && (
                        <span className='text-white text-xs sm:text-sm mt-12 sm:mt-16 absolute ml-1'>
                            <FormattedMessage
                                id='registro.error9'
                                defaultMessage='*Debe crear una contraseña'
                            /></span>)}
                    {errors.password?.type === "pattern" && (
                        <span className='text-white text-xs sm:text-sm mt-12 sm:mt-16 absolute ml-1'>
                            <FormattedMessage
                                id='registro.error10'
                                defaultMessage='*Debe tener al menos 8 caracteres'
                            /></span>)}
                </div>

                <div className="w-full">
                    <button type='submit' className="w-full mt-4 rounded p-1 sm:p-2 text-white bg-gray-900  active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all text-base sm:text-xl lg:text-2xl">
                        <FormattedMessage
                            id='registro.boton'
                            defaultMessage='REGISTRARSE'
                        /></button>
                </div>
            </form>
        </div>
    )

}

