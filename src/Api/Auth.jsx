
import axiosSecure from "./useAxiosSecure";


const SaveUser = async(user) => {


    const currentUser={
          email:user.email,
          role:'guest',
          status:'varified'
     
    }

   

    const {data}=await axiosSecure.put(`/users/${user?.email}`,currentUser)

    return data
};

export default SaveUser;



export const GetToken=async email =>{
    
   
    const {data}=await axiosSecure.post(`/jwt`,email)
    console.log(data,'------------------>');
    return data
}



export const ClearCookie=async () =>{
    
   
    const {data}=await axiosSecure.get(`/logout`)
    return data
}


export const GetRole=async email=>{
       const {data}=await axiosSecure(`/user/${email}`)
       return data?.role
}
