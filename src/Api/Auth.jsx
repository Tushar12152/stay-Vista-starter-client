
import useAxiosSecure from "./useAxiosSecure";

const SaveUser = async(user) => {


    const currentUser={
          email:user.email,
          role:'guest',
          status:'varified'
     
    }

    const axiosSecure=useAxiosSecure()

    const {data}=await axiosSecure.put(`/users/${user?.email}`,currentUser)

    return data
};

export default SaveUser;



export const GetToken=async email =>{
    
    const axiosSecure=useAxiosSecure()
    const {data}=await axiosSecure.post(`/jwt`,email)
    console.log(data,'------------------>');
    return data
}