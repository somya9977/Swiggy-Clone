import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./LocationSlice"
import dataSlice from "./CacheDataSlice"
import cartSlice from "./CartSlice"

const store = configureStore({
    reducer: {
        location: locationSlice,
        dataSlice: dataSlice,
        cart : cartSlice
    }
})

export default store