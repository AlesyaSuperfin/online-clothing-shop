import { useSelector } from 'react-redux';
import { getCartItems, getTotalPrice } from '../../Redux/cartSlice';
import CartItem from './CartItem';
import CartIcon from '../../images/market.png';
import Swal from 'sweetalert2';

const Cart = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    const handleAlert = () => {
        Swal.fire({
            title: "Thanks for the order.",
            text: "Our manager will contact you and discuss the details of your order.",
          });
    }

    return (
        <div className='cartContainer'>
            <div className='cart_total'>
                <img src={CartIcon} alt='cart_icon' className='cart_icon'/>
                <h3>Total: $ {totalPrice}</h3>
            </div>
            <button onClick={handleAlert} className='button_CTA button_Order'>ORDER NOW</button>
            {cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)}
        </div>
    )
}

export default Cart;