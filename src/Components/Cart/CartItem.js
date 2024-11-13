import { useDispatch } from "react-redux";
import ClothesData from "../../Data/ClothesData";
import { removeItemFromCart } from "../../Redux/cartSlice";
import removeIcon from '../../images/pngwing.com.png';

const CartItem = ({cartItem}) => {

    const clothes = ClothesData.find(item => item.id === cartItem.clotheID);
    const dispatch = useDispatch();

    return (<div className="cartItemContainer">
        <p>{clothes.name}</p>
        <p className="cartItemInfo">({cartItem.quantity} items)</p>
        <p className="cartItemInfo">Size: {cartItem.size}</p>
        <p className="cartItemInfo">Price: $ {clothes.price * cartItem.quantity}</p>
        <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
        <img src={removeIcon} width="20px" alt="removeIcon" />
        </span>
    </div>)
}

export default CartItem;