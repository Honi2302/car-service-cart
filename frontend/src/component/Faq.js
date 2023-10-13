import {React, useEffect, useState} from 'react'
import Navbar2 from './Navbar2'

const Faq = () => {

    const [faq, setFAQ] = useState([[]])
    useEffect(()=>{
        showFAQ()
    },[]) 
    
    const showFAQ = async()=>{
        let result = await fetch("https://kv-varlu.vercel.app/api/v1/faq")
        let responce = await result.json()
        const finalResponse = []
        finalResponse.push(responce.faqs)
        setFAQ(finalResponse)
        console.log(finalResponse)
    }
  
    return (
    
    <div>
<Navbar2/>
        <div className='Faq-heading'>
        <h1>Frequently Asked Questions</h1>
        </div>


<div class="accordion accordion-me" id="accordionExample">
 {
    
    faq[0].map((item)=>
    <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <h5>{item.question}</h5>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <h6>{item.answer}</h6>
      </div>
    </div>
  </div>
    )
    
}
</div>
 
  

  
  
</div>
    
  )
}

export default Faq
