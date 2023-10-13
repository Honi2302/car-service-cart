
import {React, useEffect, useState} from 'react'

const Category = () => {
  const [categories, setCategory] = useState([[]])
  useEffect(()=>{
    showCategory()
},[]) 

const showCategory = async()=>{
    let result = await fetch("https://kv-varlu.vercel.app/api/v1/category/all")
    let responce = await result.json()
    const finalResponse = []
    finalResponse.push(responce.categories)
    setCategory(finalResponse)
    console.log(finalResponse)
}


  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid main-category">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="\">Our Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="\">Curated Custom Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="\">How Car Service works?</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="\">Rating & Reviews</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="\">Price List</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="\">FAQ</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="heading">
  <h4> <strong> Car Services Available In Hyderabad</strong></h4>
  <p>
    Get-hassie free and professional car service, car repair, wheel care services, cashless claima and such more in Hyderabad
  </p>
</div>



  <div class="container container-me overflow-hidden text-center category-plain">
  <div class="row gy-5">
  
{categories[0].map((item)=>
  <div class="col-3 col-3-me">
<div class="p-3"><img width="48" height="48" src="https://img.icons8.com/material/96/people-in-car.png" alt="people-in-car"/><h6>{item.name}</h6></div></div>)}
  
  </div>
  </div>


<dir class="warranty">
<div class="card" style={{width: "15vw", marginLeft:"1vw"}}>
  <img src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/02/automobilerepair1-1.jpg" class="card-img-top" alt="..."/>
    </div>

    <div class="card" style={{width: "15vw", marginLeft:"1.5vw"}}>
  <img src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/02/automobilerepair1-1.jpg" class="card-img-top" alt="..."/>
    </div>

    <div class="card" style={{width: "15vw", marginLeft:"1.5vw"}}>
  <img src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/02/automobilerepair1-1.jpg" class="card-img-top" alt="..."/>
    </div> 
</dir>

    </div>
  )
}

export default Category
