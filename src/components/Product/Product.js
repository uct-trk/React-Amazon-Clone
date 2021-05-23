import React from 'react'
import { useStateValue } from '../../Context/StateProvider'
import './product.css'

const Product = ({title, price, image, rating, id}) => {

    const [state, dispatch] = useStateValue()

    const {cart} = state
    
    const addToCart = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                id: id,
                
            }
        })
    }


    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>⭐</p>
                    ))}
                    
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToCart}>Add To Cart</button>
        </div>
    )
}

export default Product
