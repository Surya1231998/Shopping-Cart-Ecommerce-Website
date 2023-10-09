import React from 'react'

const CartItem = (props) => {

  let totalPay = props.price*props.countOfItem;

  
  return (
   
    <div>
      <h6>Item is added to the cart </h6>
      <h6>Total no of item  in the cart {props.countOfItem}</h6>
      <h6>Price of each Item {props.price}</h6>
       <h6>You have to pay {totalPay}</h6>

    </div>
  )
}

export default CartItem 
