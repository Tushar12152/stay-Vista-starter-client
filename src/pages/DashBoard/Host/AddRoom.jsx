import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { useState } from "react";
import { imageUpload } from "../../../Api/utils";
import useAuth from './../../../hooks/useAuth';

const AddRoom = () => {

 const {user}=useAuth()
//  console.log(user);
 const [dates,setDates]=useState({
     startDate:new Date(),
     endDate:new Date(),
     key:'selection'
 })



    const handleSubmit=async(e)=>{
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

        console.log(roomData);
    }

    const handleDates=(ranges)=>{
           setDates(ranges.selection)
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
          ></AddRoomForm>

        </div>
    );
};

export default AddRoom;