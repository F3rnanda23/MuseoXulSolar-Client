import Cookies from "universal-cookie"
import { Navigate } from "react-router-dom"


export const AdminRoute = () => {
    const cookie = new Cookies()

    const admin = cookie.get('admin')

    if(admin){
        Navigate('/admin')
    }else{
        Navigate('/login')
    }
}