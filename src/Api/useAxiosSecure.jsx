import axios from "axios";
import { ClearCookie } from "./Auth";
import { Navigate } from "react-router-dom";


const axiosSecure=axios.create({
    baseURL:'http://localhost:8000',
    // import.meta.env.VITE_API_URL,
    withCredentials:true,

})



const useAxiosSecure = () => {

    axiosSecure.interceptors.response.use(response=>response,
         async error=>{
             console.log('error trac in the interceptor', error.response)

             if(error.response&& (error.response.status===401||error.response.status===403)){
                 await ClearCookie()
                 return <Navigate to='/login'></Navigate>
             }

             return Promise.reject(error)
         })


    return axiosSecure
};

export default useAxiosSecure;