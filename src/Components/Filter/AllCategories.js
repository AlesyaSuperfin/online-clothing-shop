
import ClothesData from "../../Data/ClothesData";

const AllCategories = ({filteredClothes, setClothes}) => {
    return (
        <div className="categiries_section">
  
        <div className="categories_container">
            <div>
                <h3>TYPE</h3>
                <hr class="line"></hr>   
            </div>
            <button className="category_button" onClick={() => setClothes(ClothesData)}>All categories</button>
            <button className="category_button" onClick={() => filteredClothes('dress')}>Dresses</button>
            <button className="category_button" onClick={() => filteredClothes('shirt')}>Topwear</button>
            <button className="category_button" onClick={() => filteredClothes('pants')}>Pants</button>
            <button className="category_button" onClick={() => filteredClothes('skirt')}>Skirt</button>
            <button className="category_button" onClick={() => filteredClothes('shoes')}>Shoes</button>
        </div>

        <div className="categories_container">
            <div>
                <h3>CATEGORY</h3>
                <hr class="line"></hr>
            </div>
            <button className="category_button" onClick={() => filteredClothes('woman')}>Women</button>
            <button className="category_button"  onClick={() => filteredClothes('man')}>Men</button>
            <button className="category_button"  onClick={() => filteredClothes('kids')}>Kids</button>
        </div>
        </div>
    )
}

export default AllCategories;