import queryString from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoryBox = ({label,icon:ICON,selected}) => {
    const [params,setParams]=useSearchParams()
    const navigate=useNavigate()
    const handleClick=()=>{
        let currentQuery={}

        if(params){
            currentQuery=queryString.parse(params.toString())

            const updateQuery={...currentQuery,category:label}

            const url=queryString.stringifyUrl({
                url:'/',
                query:updateQuery
            })
            navigate(url)
        }
    }
    params.get('category')
    return (
        <div onClick={handleClick} className={`flex flex-col items-center gap2 p-3 border-b-2 hover:text-neutral-800 cursor-pointer transition ${selected?'border-b-neutral-800 text-neutral-800':'border-transparent text-neutral-500'}`}>
            <ICON size={26}></ICON>
          <div className="text-sm font-medium ">
          {label}
          </div>
        </div>
    );
};

export default CategoryBox;