import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ClotheItem = ({clothe}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

    return (
        <div className="clothe_item" >
            <Link to={`about/${clothe.title}`}>
            <img src={`${clothe.image}.jpg`} alt='item_img' className="clothes_img"/>
            </Link>
            <h3 className="itemName">{clothe.name}</h3>
            <p className="itemDescription">Price: $ {clothe.price}</p>
            <p className="itemDescription">Size:<select><option value={clothe.size}></option></select></p>
            <p className="itemDescription"><ChangeQuantity quantity={quantity} setQuantity={setQuantity} /></p>
            <button onClick={() => dispatch(addItemToCart({clothe, quantity}))}>Add to Cart</button>
            
        </div>
    )
}

export default ClotheItem;