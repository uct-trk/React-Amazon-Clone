import React from 'react'
import { useStateValue } from '../../Context/StateProvider'
import CheckoutProduct from '../CheckOutProduct/CheckoutProduct'
import Subtotal from '../Subtotal/Subtotal'
import './checkout.css'

const Checkout = () => {

    const [state, dispatch] = useStateValue()
    const {cart} = state
    console.log(cart)

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/41/prime/garanti/TR21_GARANTIBANK_PRIME_PARTNERSHIP_EventPage_1500x375.jpg" alt="" />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Cart
                    </h2>

                    {cart.map((item, index) => (
                        <CheckoutProduct
                            key={index}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}/>
                    ))}

                    
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
