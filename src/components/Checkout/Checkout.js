import React from 'react'
import { useStateValue } from '../../Context/StateProvider'
import CheckoutProduct from '../CheckOutProduct/CheckoutProduct'
import Subtotal from '../Subtotal/Subtotal'
import './checkout.css'

const Checkout = () => {

    const [state, dispatch] = useStateValue()
    const {cart, user} = state
    console.log(cart)

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/41/prime/garanti/TR21_GARANTIBANK_PRIME_PARTNERSHIP_EventPage_1500x375.jpg" alt="" />
                <div>
                    <h1>{user && "Hello, " + user.email}</h1>
                    <h2 className="checkout__title">
                        {!cart.length ? (<h1>Your Cart Empty</h1>) : (<h1>Your Cart {cart.length}</h1>)}
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
                {cart.length > 0 ? <Subtotal/> : ""}
            </div>
        </div>
    )
}

export default Checkout
