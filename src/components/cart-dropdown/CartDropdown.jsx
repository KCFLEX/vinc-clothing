import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
}  from './CartDropdown.styles.jsx'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
      navigate('/checkout')
    }

  return (
    <CartDropdownContainer>
    <CartItems>
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
    </CartItems>
    <Button onClick={goToCheckoutHandler}> TO CHECKOUT </Button>
  </CartDropdownContainer>
);
};


export default CartDropdown