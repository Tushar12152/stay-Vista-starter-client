import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import Heading from "../Shared/Heading";
import { useSearchParams } from "react-router-dom";
import Loader from "../Shared/Loader";

const Rooms = () => {
  const [params,setParams]=useSearchParams()
  const [loading,setLoading]=useState(false)
  const category=params.get('category')
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    setLoading(true)
    fetch("./rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if(category){
          const filtered=data.filter(room=>room.category===category)
          setRooms(filtered)
        }else setRooms(data)
        setLoading(false)
      });
  }, [category]);

  if(loading){
   return <Loader></Loader>
  }

  // console.log(rooms);
  return (
    <Container>
     {
      rooms&& rooms.length>0?   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 mt-12">
      {rooms.map((room) => (
        <Card key={room._id} room={room}></Card>
      ))}
    </div> :
    <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
      <Heading center={true} title='No rooms Available in this category' subtitle='please select others categories'></Heading>
    </div>
     }
    </Container>
  );
};

export default Rooms;
