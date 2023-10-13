import React from 'react'

import Navbar2 from './Navbar2';
import {useSelector} from "react-redux"


const YourCart = () => {

const {cart} = useSelector((item)=>item.AddtoCart)
console.log(cart)
const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
<Navbar2/>


<div style={{margin:"2rem"}}>
    <h2>This is your cart</h2>
</div>
<div className="main-div">


<div>
{
    cart?.map((item)=><div className="main-card">
    <div><img src={item.image} alt="" /></div>
    <div className='main-card-body'>
    <div>
    <h2 style={{fontWeight:"bolder"}}>{item.heading} </h2>
    <h4>{item.name}</h4>
    <p>Total Price:  Rs. {item.price*item.quantity}/-</p>
    <p>Quantity:  {item.quantity}</p>
    </div>
    
    </div>
</div>
)

}
</div>
<div>
<div class="card cart-card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Your Cart</h5>
    <p class="card-text">Final Amount:   Rs. {totalAmount}/-</p>
    <button className='main-btn btn btn-primary' >Buy Now</button> 
  </div>
</div>
</div>

</div>
    </div>
  )
}

export default YourCart
