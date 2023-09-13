export function LoginForm() {
    return(
        <div className="bg-white border p-8">
                <h2 className="text-center">Iniciar sesión</h2>
            <div className="flex flex-col items-center justify-center m-5">
                <div className="m-5">
                    <input className='border p-1'
                    type="text" placeholder="email" />
                </div>
                <div className="m-5">
                    <input className='border p-1'
                    type="text" placeholder="password" />
                </div>
                <div>
                    <p>or</p>
                </div>
                <div className="w-1/6 " >
                    <button className="flex items-center justify-center m-5">
                        <img className="w-1/5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="" />
                    </button>
                    <p className="text-center">Sign in with Google</p>
                </div>
            </div>
        </div>
    )

}