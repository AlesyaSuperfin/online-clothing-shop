import { useState } from 'react';
import Cart from './Components/Cart/Cart';
import Clothes from './Components/ClothesComponents/Clothes';
import AllCategories from './Components/Filter/AllCategories';
import ClothesData from './Data/ClothesData';
import AdvertisingBanner from './Components/Advertising/AdvertisingBanner';

const Shop = () => {

  const [clothes, setClothes] = useState(ClothesData);

  const chosenClothes = (searchTerm) => {
    const newClothes = ClothesData.filter(element => element.searchTerm.includes(searchTerm));
    setClothes(newClothes);
  }

    return (
      <div>
        <div>
        <AdvertisingBanner />
        <h2 className='title'>Shop New Collection</h2>
        <hr class="line_big"></hr>
        </div>
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