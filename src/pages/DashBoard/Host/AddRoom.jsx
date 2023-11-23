import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { useState } from "react";
import { imageUpload } from "../../../Api/utils";
import useAuth from './../../../hooks/useAuth';
import { addRoom } from "../../../Api/Rooms";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {

    const navigate=useNavigate()

 const {user}=useAuth()
//  console.log(user);

const [loading,setLoading]=useState(false)
const [uploadButtonText,setUploadButtonText]=useState('Upload ---> Image')

 const [dates,setDates]=useState({
     startDate:new Date(),
     endDate:new Date(),
     key:'selection'
 })



    const handleSubmit=async(e)=>{
        setLoading(true)
        e.preventDefault()
        console.log('hello');
        const form=e.target;
        const location=form.location.value;
        const category=form.category.value;
        const title=form.title.value;
        const to=dates.endDate;
        const from=dates.startDate;
        const price=form.price.value;
        const guests=form.total_guest.value;
        const bathrooms=form.bathrooms.value;
        const description=form.description.value;
        const bedrooms=form.bedrooms.value;
        const image=form.image.files[0];
        const image_url=await imageUpload(image);
        const host={
             name:user?.displayName,
             image:user?.photoURL,
             email:user?.email,

        }

        const roomData={location,category,title,to,from,price,guests,bathrooms,description,bedrooms,image:image_url?.data?.display_url,host}


       try{
       
        const data=await addRoom(roomData)
        console.log(data);
        setUploadButtonText('Uploaded')
        toast.success('Room Added')
        navigate('/dashboard/mylist')
        
       }catch(error){
             toast.error(error.message)
            console.log(error);
       }finally{
        setLoading(false) 
       }
        console.log(roomData);

    }

    const handleDates=(ranges)=>{
           setDates(ranges.selection)
    }


    const handleImageChange=image=>{
         setUploadButtonText(image.name)
    }

    return (
        <div>
            <Helmet>
                  <title>Add room | Dashboard</title>
            </Helmet>

          <AddRoomForm
         
           handleDates={handleDates}
          handleSubmit={handleSubmit}
          dates={dates}
          handleImageChange={handleImageChange}
          loading={loading}
          uploadButtonText={uploadButtonText}
          ></AddRoomForm>

        </div>
    );
};

export default AddRoom;