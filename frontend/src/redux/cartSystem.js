import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    cart:[],
    quantity:0,
    totalPrice:0
}

const cartSystem = createSlice({
    name:"AddtoCart",
    initialState,
    reducers:{
        Addcart:(state,action)=>{
            const find = state.cart.findIndex(item=>item.name===action.payload.name)

            if (find>=0) {
                state.cart[find].quantity +=1
            }
            else
            {
                const temp = {...action.payload, quantity:1}
            state.cart.push(temp)
            }

            
        }
    }
})

export const {Addcart}=cartSystem.actions
export default cartSystem.reducer