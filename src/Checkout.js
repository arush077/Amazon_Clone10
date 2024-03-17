import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'


function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkoutleft">
            {/* <img className='checkout__add' src="https://images-eu.ssl-images-amazon.com/images/G/31/digital/music/merch/India/2018/September/PCstripe.jpg" alt="" /> */}
            

            <div>
                <h2 className="checkout__title">Your Shopping Basket</h2>
                
                
                {/* Basket items will show here */}
            
            
            
            </div>



        </div>


        <div className="checkout__right">
            <Subtotal/>
        </div>
      
    </div>
  )
}

export default Checkout
