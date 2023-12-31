import { useSearchParams } from "react-router-dom";
import Container from "../../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
    const [params,setParams]=useSearchParams()
    const categor=params.get('category')
     
    return (
        <Container>

            <div className="pt-4 flex items-center justify-between overflow-x-auto">
            {categories.map(category=><CategoryBox
             key={category.label}
              icon={category.icon}
               label={category.label} 
                selected={categor===category.label}
            
            ></CategoryBox>)}
        </div>
        </Container>
    );
};

export default Categories;