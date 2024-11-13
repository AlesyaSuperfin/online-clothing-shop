import { useSelector } from 'react-redux';
import { getCartItems, getTotalPrice } from '../../Redux/cartSlice';
import CartItem from './CartItem';
import CartIcon from '../../images/market.png';

const Cart = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return (
        <div className='cartContainer'>
            <img src={CartIcon} alt='cart_icon' className='cart_icon'/>
            <h3>Total: $ {totalPrice}</h3>
            {cartItems.map((cartItem, index) => <CartItem key={index} cartItem={cartItem} />)}
        </div>
    )
}

export default Cart;