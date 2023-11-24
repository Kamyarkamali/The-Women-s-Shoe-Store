import { createSlice } from "@reduxjs/toolkit"


const calclulater=(item:any)=>{
    return item.price * item.quantity
}

const shoppingSlice=createSlice({
    name:"product",
    initialState:{
        shopping:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            // @ts-ignore
            const itemShopping=state.shopping.find((item)=>item.id===action.payload.id)

            if(itemShopping){
                // @ts-ignore
                itemShopping.quantity++
                // @ts-ignore
                itemShopping.totlaprice=calclulater(itemShopping)
            }else{
                // @ts-ignore
                state.shopping.push({...action.payload,quantity:1,titalprice:action.payload.price})
            }

        },
        incerement:(state,action)=>{
            // @ts-ignore
            const item=state.shopping.find((item)=>item.id===action.payload)
            // @ts-ignore
            item.quantity++
        },
        decrements:(state,action)=>{
            // @ts-ignore
            const item=state.shopping.find((item)=>item.id===action.payload)
            // @ts-ignore
            if(item.quantity===1){
                // @ts-ignore
                item.quantity=1
            }else{
                // @ts-ignore
                item.quantity--
            }
        },
        removeItem:(state,action)=>{
            // @ts-ignore
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
