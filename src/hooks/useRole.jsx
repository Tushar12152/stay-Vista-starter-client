import { useEffect, useState } from "react"
import useAuth from "./useAuth"
import { GetRole } from "../Api/Auth"

const useRole=()=>{
     const {user,loading}=useAuth()

     const [role,setRole]=useState(null)

     useEffect(()=>{
         GetRole(user?.email)
         .then(data=>{
             setRole(data)
         })
     },[user])
     return [role]
}

export default useRole

