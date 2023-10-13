import React from 'react'
import battery from "../assest/battery.jpeg"
import tyre from "../assest/wheel.jpeg"
import Navbar2 from './Navbar2';
import {useDispatch} from "react-redux"
import { Addcart } from '../redux/cartSystem';

const Services = () => {

    const data =[
        {id:"1", image:`${battery}`, heading:"Battery", name:"Amarom Batteries", price:"400"},
        {id:"2", image:`${battery}`, heading:"Battery", name:"Exide Batteries", price:"700"},
        {id:"3", image:`${battery}`, heading:"Battery", name:"Lumax Batteries", price:"600"},
        {id:"4", image:`${tyre}`, heading:"Tyre", name:"Apollo Tyre", price:"1000"},
        {id:"5", image:`${tyre}`, heading:"Tyre", name:"MRF Tyre", price:"2100"},
        {id:"6", image:`${tyre}`, heading:"Tyre", name:"Ceat Tyre", price:"1300"},
    ]
const dispatch = useDispatch()


  return (
    <div>
<Navbar2/>
{
    data.map((item)=>
    <div key={item} className="main-card">
    <div><img src={item.image} alt="" /></div>
    <div className='main-card-body'>
    <div>
    <h2 style={{fontWeight:"bolder"}}>{item.heading} </h2>
    <h4>{item.name}</h4>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, adipisci.</p>
    <p>Rs. {item.price}/-</p>
    </div>
    <button className='main-btn btn btn-primary' onClick={()=>dispatch(Addcart(item))}>Add to cart</button> 
    </div>
</div>)
}

    </div>
  )
}

export default Services
