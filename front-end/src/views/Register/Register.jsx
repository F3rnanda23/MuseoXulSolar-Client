import { RegisterForm } from "../../components/forms/registerForm/registerForm"

export function Register() {
    return(
        <div className="flex w-full h-screen  bg-gray-600">
            <div className="w-full flex align-center justify-center  py-12">
                <RegisterForm/>
            </div>
        </div>
    )

}