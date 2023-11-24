import { createSlice } from "@reduxjs/toolkit"


const calclulater=(item)=>{
    return item.price * item.quantity
}

const shoppingSlice=createSlice({
    name:"product",
    initialState:{
        shopping:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            const itemShopping=state.shopping.find((item)=>item.id===action.payload.id)

            if(itemShopping){
                itemShopping.quantity++
                itemShopping.totlaprice=calclulater(itemShopping)
            }else{
                state.shopping.push({...action.payload,quantity:1,titalprice:action.payload.price})
            }

        },
        incerement:(state,action)=>{
            const item=state.shopping.find((item)=>item.id===action.payload)
            item.quantity++
        },
        decrements:(state,action)=>{
            const item=state.shopping.find((item)=>item.id===action.payload)

            if(item.quantity===1){
                item.quantity=1
            }else{
                item.quantity--
            }
        },
        removeItem:(state,action)=>{
            const remove=state.shopping.filter((item)=>item.id!==action.payload)
            state.shopping=remove
        },
        fianal:(state)=>{
            state.shopping=[]
        }
    }
})


export const cretReducer=shoppingSlice.reducer

export const {addToCart,incerement,decrements,removeItem,fianal}=shoppingSlice.actions
