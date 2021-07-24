import homecookies from './assets/small/homecookies.jpg'
import bigcookie from './assets/small/bigcookie.jpg'
import cookiepile from './assets/small/cookiepile.jpg'
import flatcookies from './assets/small/flatcookies.jpg'
import cookieboxblue from './assets/cookieboxblue.png'
import cooookies from './assets/small/cooookies.jpg'
import cookiebox from './assets/cookiebox.jpg'
import box2 from './assets/small/box2.jpg'

const data = {
    products: [
        {
            id: '1',
            name: 'Thicc choc chip cookies',
            price: '5.99',
            img:`${cooookies}`,
            
          },
          {
            id: '2',
            name: 'Thin choc chip cookies',
            price: '6.99',
            img:`${bigcookie}`,
          },
          {
            id: '3',
            name: 'Gold leaf cookies',
            price: '70.99',
            img:`${cookiepile}`,
          },
          {
            id: '4',
            name: 'Kinder bueno',
            price: '7.99',
            img:`${homecookies}`,
          },
          {
            id: '5',
            name: 'Mixed cookie box',
            price: '12.99',
            img:`${cookiebox}`,
          },
          {
            id: '6',
            name: 'Mixed cookie box',
            price: '7.99',
            img:`${box2}`,
          }
        ]
}

export default data;