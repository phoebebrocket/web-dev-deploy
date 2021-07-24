//import {useState} from "react"

function ShoppingCart()
  return (
    <div>
      Cart
    </div>
  )

export default ShoppingCart;


// const menuItems = [
//   {name: "cookie box 1", price: 5.99, category: 'cookie-box'},
//   {name: "cookie box 2", price: 9.99, category: 'cookie-box'},
//   {name: "cookie box 3", price: 5.99, category: 'cookie-box'},
//   {name: "cookie box 4", price: 9.99, category: 'cookie-box'},
//   {name: "cookie box 5", price: 5.99, category: 'cookie-box'},
//   {name: "cookie box 6", price: 8.99, category: 'cookie-box'},
//   {name: "single cookie", price: 1.99, category: 'cookie'}
// ];

// function ShoppingCart() {

//   const [cart, setCart] = useState([])

//   const addToCart = (menuItem) => {
//     setCart((Cart) => {
//       return [...Cart, menuItem]
//     })
//   }

//   return (
//     <div className="shopping-cart">
//       {menuItems.map(menuItem => (
//         <li key={menuItem.name}>
//           {menuItem.name} - £{menuItem.price} - {menuItem.category}
//           <button onClick={() => addToCart(menuItem)}>Add to cart</button>
//         </li>
//       ))}
//       <h2>Cart</h2>
//       {cart.map(cartItem => (
//         <li key={cartItem.name}>
//           {cartItem.name} - £{cartItem.price} - {cartItem.category}
//         </li>
//       ))}
//     </div>
//   );
// }