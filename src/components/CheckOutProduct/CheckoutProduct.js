import React from 'react'
import './checkoutProduct.css'
import { useStateValue } from '../../Context/StateProvider';

const CheckoutProduct = ({id, image, title, price, rating, hideButton}) => {

    const [state, dispatch] = useStateValue()
    const {cart} = state

    const removeFromCart = () => {
        // remove item from the cart
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id, 
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image}/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>⭐</p>
                    ))}
                </div>
                {!hideButton && <button onClick={removeFromCart}>Remove From Cart</button>}
            </div>
        </div>
    )
}

export default CheckoutProduct
