import { BsFillHouseAddFill, BsGraphUp } from "react-icons/bs";
import MenuItem from "./MenuItem";
import { MdHomeWork } from "react-icons/md";

const HostMenu = () => {
    return (
        <>
              <MenuItem
                icon={BsGraphUp}
                label='Statistics'
                address='/dashboard'
              />


                <MenuItem
                icon={BsFillHouseAddFill}
                label='Add Room'
                address='/dashboard/add-room'
              />


                <MenuItem
                icon={MdHomeWork}
                label='My Listing'
                address='/dashboard/mylist'
              />
        </>
    );
};

export default HostMenu;