import {configureStore} from "@reduxjs/toolkit"
import cartSystem from "./redux/cartSystem"

 
const store = configureStore({
    reducer:{
        AddtoCart:cartSystem
    }
})

export default store