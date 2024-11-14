import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ChangeSize from "../Cart/ChangeSize";

const ClotheItem = ({clothe}) => {

    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('S');

    const dispatch = useDispatch();

    return (
        <div className="clothe_item" >
            <Link to={`about/${clothe.title}`}>
            <img src={`./${clothe.image}.jpg`} alt='item_img' className="clothes_img"/>
            </Link>
            <h3 className="itemName">{clothe.name}</h3>
            <p className="itemDescription">Price: $ {clothe.price}</p>
            <p className="itemDescription"><ChangeSize size={size} setSize={setSize} /></p>
            <p className="itemDescription"><ChangeQuantity quantity={quantity} setQuantity={setQuantity} /></p>
            <button className='button_CTA' onClick={() => dispatch(addItemToCart({clothe, quantity, size}))}>Add to Cart</button>
        </div>
    )
}

export default ClotheItem;