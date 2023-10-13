import React, { useState, useEffect } from 'react';

function CarSelector() {
  const [selectedManufacturer, setSelectedManufacturer] = useState([]);
  const [selectedModel, setSelectedModel] = useState([]);
  const [selectedFuelType, setSelectedFuelType] = useState('');

  
  const fuelTypes = ['Petrol', 'Diesel', 'CNG'];

  const handleManufacturerChange = (event) => {
    const manufacturer = (event.target.value)
    console.log(manufacturer)
  };

  const handleModelChange = (event) => {
    const Model = (event.target.value)
    console.log(Model)
  };

  const handleFuelTypeChange = (event) => {
    setSelectedFuelType(event.target.value);
  };

  useEffect(()=>{
    getManu()
    getModel()
    
},[]) 

const getManu = async()=>{
    let result = await fetch("https://kv-varlu.vercel.app/api/v1/manufacturer")
    let responce = await result.json()
    setSelectedManufacturer(responce)
    console.log(responce)
}

const getModel = async()=>{
  let result = await fetch("https://kv-varlu.vercel.app/api/v1/model")
  let responce = await result.json()
  setSelectedModel(responce)
  console.log(responce)
}



  return (
    <div className="fixed-container">
        <div className='enquiry-heading'>
        <h2>Book your car service Now!</h2>
        <br />
        <h6>Get instant quotes for your car service</h6>
        </div>

   <div>
    
      <select class="form-select car-category" aria-label="Default select example" value={selectedManufacturer} onChange={handleManufacturerChange}>
        <option>Select your car Manufacture</option>
        {selectedManufacturer.map((item) => (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      <div>
          <select class="form-select car-category" aria-label="Default select example" value={selectedModel} onChange={handleModelChange}>
            <option value="">Select car Model</option>
            {selectedModel.map((item) => (
              <option value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
       

      
        <div>
          <select class="form-select car-category" aria-label="Default select example" value={selectedFuelType} onChange={handleFuelTypeChange}>
            <option value="">Select Fuel Type</option>
            {fuelTypes.map((fuelType) => (
              <option key={fuelType} value={fuelType}>
                {fuelType}
              </option>
            ))}
          </select>
        </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    <div class="input-group input-group-sm mb-3">
  <input type="text" class="car-category-input" placeholder="Enter mobile number"/>
</div>

<div className='enquiry-btn-div'>
<button type="button" class="btn btn-primary btn-sm enquiry-btn">Check your price for free</button>
</div>
    </div>
  );
}

export default CarSelector;
