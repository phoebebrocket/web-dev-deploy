import React from 'react'
import Product from '../Product'
import './styles.css'

const Main = (props) => {
    const {products, onAdd} = props
    return (
        <div className="shop-page">
            <h2 className="title">Products</h2>
            <div className="products">
            <div className="single-product">
                {products.map((product) => (
                    <Product 
                        key={product.id} 
                        product={product}
                        onAdd={onAdd}
                    />
                ))}
            </div>
            </div>

        </div>
    )
}

export default Main
