
import ClothesData from "../../Data/ClothesData";

const AllCategories = ({filteredClothes, setClothes}) => {
    return (
        <div>
        <div className="categories_container">
            <button className="category_button person" onClick={() => filteredClothes('woman')}>Woman</button>
            <button className="category_button person"  onClick={() => filteredClothes('man')}>Man</button>
            <button className="category_button person"  onClick={() => filteredClothes('kids')}>Kids</button>
        </div>
        <div className="categories_container">
            <button className="category_button" onClick={() => setClothes(ClothesData)}>All categories</button>
            <button className="category_button" onClick={() => filteredClothes('dress')}>Dress</button>
            <button className="category_button" onClick={() => filteredClothes('pants')}>Pants</button>
            <button className="category_button" onClick={() => filteredClothes('skirt')}>Skirt</button>
            <button className="category_button" onClick={() => filteredClothes('shirt')}>Shirt</button>
            <button className="category_button" onClick={() => filteredClothes('shoes')}>Shoes</button>
        </div>
        </div>
    )
}

export default AllCategories;