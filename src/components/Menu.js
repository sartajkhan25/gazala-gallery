import React, { useEffect } from 'react'
// import CONSTANTS from '../data/CONSTANTS'

const Menu = () => {
  useEffect(()=>{
    console.log("came")
    // window.open(CONSTANTS.WHATSAPP_URL || "https://www.google.com")
  },[])

  let menu = [
    {
      displayName: "Home",
      slug: "home",
      route: "/"
    },
    {
      displayName: "Products",
      slug: "products",
      route: "/products"
    },
    {
      displayName: "How to Order",
      slug: "how-to-order",
      route: "/how-to-order"
    },
    {
      displayName: "Contact Us",
      slug: "contact",
      route: "/contact"
    },
  ]
  return (
    <div className='menu-main'>
      {menu.map(item => <div className='menu-item'>
        <span>
          {item.displayName}
        </span>
      </div>)}
    </div>
  )
}

export default Menu
