
const CategoryBox = ({label,icon:ICON}) => {
    return (
        <div className="flex flex-col items-center gap2 p-3 border-b-2 hover:text-neutral-800 cursor-pointer transition">
            <ICON size={26}></ICON>
          <div className="text-sm font-medium ">
          {label}
          </div>
        </div>
    );
};

export default CategoryBox;