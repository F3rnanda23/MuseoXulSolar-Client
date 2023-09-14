export function LoginForm() {
    return (
        <div className="rounded p-8 bg-gray-600 ">
            <h2 className="mt-5 text-center text-2xl font-semibold text-white">Iniciar sesión</h2>
            <div className="flex flex-col items-center justify-center py-8" >
                <div className="w-full m-5">
                    <input className='w-full p-2 rounded'
                        type="text" placeholder="correo electronico" />
                </div>
                <div className="w-full m-5">
                    <input className='w-full p-2 rounded'
                        type="text" placeholder="contraseña" />
                </div>
                <div className="mb-5">
                    <button className="text-white">¿olvidaste tu contraseña?</button>
                </div>
                <div className="w-full">
                    <button className="w-full border border-black rounded p-2 text-lg text-white bg-gray-900 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all">Iniciar sesión</button>
                </div>
                <div className="mt-5 grid grid-cols-3 items-center text-gray-400 gap-1 w-full">
                    <hr className="border-gray-400"/>
                    <p className="text-center">O</p>
                    <hr className="border-gray-400" />
                </div>
                <div>
                    <button className="flex items-center bg-white border border-gray-400 rounded p-2 mt-5 h-100 space-x-4 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all">
                        <img className="w-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="" />
                        <span className="text-center">iniciar sesion con Google</span>
                    </button>
                </div>
            </div>
        </div>
    )

}