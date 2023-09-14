import { LoginForm } from "../../components/forms/loginForm/loginForm"

export function Login() {
    return(
        <div className="flex w-full h-screen ">
            <div className="w-full flex align-center justify-center md:w-1/2">
                <LoginForm/>
            </div>
            <div className="hidden md:flex h-full w-1/2 items-center justify-center bg-gray-300">
                <p className="text-6xl font-semibold text-red-500  animate-bounce">Diego se la come</p>
            </div>
        </div>
    )

}