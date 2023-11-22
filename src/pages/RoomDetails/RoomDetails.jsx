import { useLoaderData } from "react-router-dom";
import Container from "../../components/Shared/Container";

import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import RoomReserve from "../../components/RoomDetails/RoomReserve";
import { useState } from "react";

const RoomDetails = () => {
  const rooms=useLoaderData()



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
                          <RoomReserve roomData={rooms} />
                      
                      </div>

                  </div>
                 
              </div>
        </Container>
    );
};

export default RoomDetails;