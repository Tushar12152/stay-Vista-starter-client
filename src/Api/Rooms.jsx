import useAxiosSecure from "./useAxiosSecure"

//fetch all data from db
export const getAllRooms= async()=>{

    const axiosSecure=useAxiosSecure();
    

     const {data}= await axiosSecure('/rooms')

     
     if(data){
         return data
     }
     return null
}

//fetch  single data from  db

export const getRoom= async(id)=>{
    const axiosSecure=useAxiosSecure();
     const {data}= await axiosSecure(`/rooms/${id}`)

     
     if(data){
         return data
     }
     return null
}


 export const addRoom =async (roomdata)=>{
    const axiosSecure=useAxiosSecure();
    const {data}= await axiosSecure.post(`/rooms`,roomdata)

     
     if(data){
         return data
     }
     return null

}
