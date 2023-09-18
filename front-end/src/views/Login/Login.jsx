import { LoginForm } from "../../components/forms/loginForm/loginForm"

export function Login() {
    return(
        <div className="flex w-full h-screen ">
            <div className="w-full flex align-center justify-center md:w-1/2 py-12">
                <LoginForm/>
            </div>
            <div className="hidden md:flex h-full w-1/2 items-center justify-center bg-gray-600">
                <div className=""></div>
            </div>
        </div>
    )

}