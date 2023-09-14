export function LoginForm() {
    return (
        <div className="border-4 border-black rounded p-8">
            <h2 className="mt-5 text-center text-2xl font-semibold">Iniciar sesión</h2>
            <div className="flex flex-col items-center justify-center p-8" >
                <div className="w-full m-5">
                    <input className='w-full border p-2 border-gray-400 rounded'
                        type="text" placeholder="correo electronico" />
                </div>
                <div className="w-full m-5">
                    <input className='w-full border p-2 border-gray-400 rounded'
                        type="text" placeholder="contraseña" />
                </div>
                <div className="mb-5">
                    <button>¿olvidaste tu contraseña?</button>
                </div>
                <div className="w-full">
                    <button className="w-full border border-black rounded p-2 text-xl">iniciar sesion</button>
                </div>
                <div className="mt-3 ">
                    <p className="font-semibold">O</p>
                </div>
                <div>
                    <button className="flex items-center border border-black rounded p-2 mt-5 h-100 space-x-4">
                        <img className="w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="" />
                        <span className="text-center">iniciar sesion con Google</span>
                    </button>
                </div>
            </div>
        </div>
    )

}