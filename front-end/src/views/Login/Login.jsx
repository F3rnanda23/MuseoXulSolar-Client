import { LoginForm } from "../../components/forms/loginForm/loginForm"

export function Login() {
    return(
        <div className="h-screen bg-orange-300">
            <div className="container mx-auto pt-20">
                <LoginForm/>
            </div>
        </div>
    )

}