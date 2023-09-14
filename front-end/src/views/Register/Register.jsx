import { registerForm } from "../../components/forms/registerForm/registerForm"

export function Register() {
    return(
        <div className="flex w-full h-screen  bg-gray-600">
            <div className="w-full  to-yellow-200 flex align-center justify-center md:w-1/2 py-12">
                <registerForm/>
            </div>
            <div className="hidden md:flex h-full w-1/2 items-center justify-center bg-gradient-to-tr from-orange-500">
                <div className="w-60 h-60 bg-gradient-to-tr from-orange-500 to-yellow-200 rounded-full animate-bounce"></div>
            </div>
        </div>
    )

}