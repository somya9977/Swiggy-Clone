import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name : "cart",
    initialState : {
        cartItem : []
    },
    reducers : {
        addToCart : (state, action) => {
              
            const existingItem = state.cartItem.find((item) => {
                return item.id === action.payload.id
            })

        

            if(existingItem)
            {
                existingItem.quantity += 1
            }
            else {
                state.cartItem.push({
                    ...action.payload,
                    quantity : 1
                })
            }
        },
        decreaseQuantity: (state, action) => {

                const item = state.cartItem.find(
                    (item) => item.id === action.payload
                )

                if (item.quantity > 1) {
                    item.quantity -= 1
                } else {
                    state.cartItem = state.cartItem.filter(
                        (item) => item.id !== action.payload
                    )
                }
            }
    }
})


export default CartSlice.reducer
export const {addToCart, decreaseQuantity } = CartSlice.actions