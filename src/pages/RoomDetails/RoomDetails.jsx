import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import RoomReserve from "../../components/RoomDetails/RoomReserve";

const RoomDetails = () => {
    const {id}=useParams()
    const [loading,setLoading]=useState(false)
   
    const [rooms, setRooms] = useState({});
    useEffect(() => {
      setLoading(true)
      fetch("/rooms.json")
        .then((res) => res.json())
        .then((data) => {

            const singleRoom=data.find(room=>room._id===id)
            setRooms(singleRoom)
            setLoading(false)
        });
    }, [id]);
  
    if(loading){
     return <Loader></Loader>
    }
 
    return (
        <Container>
            <Helmet>
                 <title>{rooms?.title}</title>
            </Helmet>
              <div className="max-w-screen-lg mx-auto ">
                  <div className="flex flex-col gap-6 ">
                     <Header roomData={rooms}></Header>
                  </div>
                  <div className="grid md:gap-10 mt-10 grid-cols-1 md:grid-cols-7  ">
                     <RoomInfo roomData={rooms}></RoomInfo>
                    
                      <div className="md:col-span-3 order-first md:order-last mb-10">
                          {/* room reservesion  */}
                          <RoomReserve/>
                      
                      </div>

                  </div>
                 
              </div>
        </Container>
    );
};

export default RoomDetails;