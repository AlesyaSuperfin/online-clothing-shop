import Cart from './Components/Cart/Cart';
import Clothes from './Components/ClothesComponents/Clothes';
import AllCategories from './Components/Filter/AllCategories';

const Shop = () => {
    return (
      <div>
      <h1>Welcome to "Estetica" Online Store</h1>
      <div className="App">
      <div className='shop_container'>
        <AllCategories />
        <Cart />
      </div>
        <Clothes />
    </div>
  </div>
    )
}

export default Shop;