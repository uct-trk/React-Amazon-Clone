import React from 'react'
import './product.css'

const Product = ({title, price, image, rating, id}) => {
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
                        <p>⭐</p>
                    ))}
                    
                </div>
            </div>
            <img src={image} alt="" />
            <button>Add To Cart</button>
        </div>
    )
}

export default Product
