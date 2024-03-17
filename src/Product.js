import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

// u need to pass props in curly braces and props are essentially the variables
function Product({id,brandname,title,image,price,rating}) {



  const[{basket}, dispatch]=useStateValue();
console.log(basket);

  const addToBasket=()=>{
    //push/dispatch it into redux/data layer
    dispatch(
      {
        type:"ADD_TO_BASKET",
        item:{
          id: id,
          title: title,
          image:image,
          price:price,
          rating:rating,

        }

      }
    )


  }



  return (
    <div className='product'>
      <div className="product__info">

        {/* use the props here and this prop ke values will come in from home.js where in while making a component call u just pass out the values of all the props */}
        <p className='product__brandname'>{brandname}</p>
        <p>{title}</p>                        
        <p className='product__price'>
            <small>₹</small>
            <strong>{price}</strong>

        </p>
        <div className="product__rating">
            <p>{rating}⭐</p>

            </div>
      </div>
            <img src={image} alt="" />

            {/* on clicking execute the addtobasket function */}
            <button onClick={addToBasket}>Add to Basket</button>
        
    </div>
  )
}

export default Product
