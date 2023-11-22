import { formatDistance } from "date-fns";
import Button from "../Button/Button";
import Calender from "./Calender";
import { useState } from "react";

const RoomReserve = ({roomData}) => {
console.log('reserve',roomData);
//priceCalculation

const totalDay=parseInt(formatDistance(new Date(roomData?.to),new Date(roomData?.from)).split(' ')[0])

const totalPrice=totalDay*roomData?.price

// console.log(totalPrice);

const [value,setValue]=useState({
    startDate:new Date(roomData?.from),
    endDate:new Date(roomData?.to),
    key:'selection',
})


    return (
        <div className="rounded-xl border-[1px] border-neutral-200  overflow-hidden bg-white">

        <div className="flex items-center gap-1 p-4 ">
             <div className="text-2xl font-semibold">
                $ {roomData?.price}
             </div>
             <div className="font-light text-neutral-600">night</div>
        </div>
        <hr />

        <div className="flex justify-center">
        
            <Calender   />
            {/* value={value}  */}
        </div>
        <hr />

        <div className="p-4">
            <Button label={'Reserve'}></Button>
        </div>
        <hr />

        <div className="p-4 flex items-center justify-between font-semibold text-lg">
            <div>Total</div>
            <div>$ {totalPrice}</div>
            {/* {totalPrice} */}
        </div>

        </div>
    );
};

export default RoomReserve;