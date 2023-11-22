import { useState } from "react";
import Heading from "../Shared/Heading"




const Header = ({ roomData }) => {
  console.log(roomData);

// const [room,setRoom]=useState({})


// roomData.map(room=>setRoom(room))


// console.log(room.location);





  return (
    <>
      <Heading title={roomData?.title} subtitle={roomData?.location} />
      <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
        <img
          className='object-cover w-full'
          src={roomData?.image}
          alt='header image'
        />
      </div>
    </>
  )
}

export default Header