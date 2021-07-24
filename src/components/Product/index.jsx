import React from 'react'
import Button from '../Button'
import './styles.css'



const Product = (props) => {
   const {product, onAdd} = props

    return (
        <div className="shop-product">
            <img className="small" src={product.img} alt={product.name}/>
            <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price"> £{product.price} </p>
            </div>
            <div className="product-button">
                <Button 
                    name="Add to cart"
                    onClick={() => onAdd(product)}
                />
            </div>
        </div>

        
    )
}

export default Product
