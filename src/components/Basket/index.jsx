import React from 'react'
import Button from '../Button'
import './styles.css'



const Basket = (props) => {
    const {cartItems, onAdd, onRemove, onSubmit} = props

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    const shippingPrice = 2.99
    const totalPrice = itemsPrice + shippingPrice

    return (
        <aside className="basket">
            <h2>Basket</h2>
            <div className="basket-item">
                {cartItems.length === 0 && <div>Cart is empty</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="item-name">{item.name}</div>
                        <div className="item-quantity">
                                <button className="adjust" onClick={() => onAdd(item)} className="add">
                                    +
                                </button>
                         <div className="item-price">
                                {item.qty} x £{item.price}
                        </div>
                             <button className="adjust" onClick={() => onRemove(item)} className="remove">
                                    -
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className="totals">
                        <div className="indiv-total">
                            <div>Items Price</div>
                            <div>£{itemsPrice.toFixed(2)}</div>
                        </div>
                        <div className="indiv-total">
                            <div>Shipping Price</div>
                            <div>£{shippingPrice}</div>
                        </div>
                        <div className="indiv-total">
                            <div>Total Price</div>
                            <div>£{totalPrice.toFixed(2)}</div>
                        </div>
                    </div>
                    <Button 
                        type="submit" 
                        name="Checkout" 
                        onClick={() => alert('Order complete')}
                    />
                </>
            )}
        </aside>
    )
}

export default Basket
