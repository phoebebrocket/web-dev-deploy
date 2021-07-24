import React from 'react'


const menuItems = [
    {name: "cookie box 1", price: 5.99, category: 'cookie-box'},
    {name: "cookie box 2", price: 9.99, category: 'cookie-box'},
    {name: "cookie box 3", price: 5.99, category: 'cookie-box'},
    {name: "cookie box 4", price: 9.99, category: 'cookie-box'},
    {name: "cookie box 5", price: 5.99, category: 'cookie-box'},
    {name: "cookie box 6", price: 8.99, category: 'cookie-box'},
    {name: "single cookie", price: 1.99, category: 'cookie'}
  ];

const CartItem = () => {
    return (
        <div>
            {menuItems.map(menuItem => (
                <li key={menuItem.name}>
                    {menuItem.name} - £{menuItem.price} - {menuItem.category}
                </li>
            ))}
        </div>
    )
}

export default CartItem
