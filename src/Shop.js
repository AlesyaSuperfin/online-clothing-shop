import { useState } from 'react';
import Cart from './Components/Cart/Cart';
import Clothes from './Components/ClothesComponents/Clothes';
import AllCategories from './Components/Filter/AllCategories';
import ClothesData from './Data/ClothesData';

const Shop = () => {

  const [clothes, setClothes] = useState(ClothesData);

  const chosenClothes = (searchTerm) => {
    const newClothes = ClothesData.filter(element => element.searchTerm.includes(searchTerm));
    setClothes(newClothes);
  }

    return (
      <div>
      <h1>Welcome to "Estetica" Online Store</h1>
      <div className="App">
      <div className='shop_container'>
        <AllCategories filteredClothes={chosenClothes} setClothes={setClothes} />
        <Cart />
      </div>
        <Clothes ClothesData={clothes} />
    </div>
  </div>
    )
}

export default Shop;