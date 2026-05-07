import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./LocationSlice"
import dataSlice from "./CacheDataSlice"

const store = configureStore({
    reducer: {
        location: locationSlice,
        dataSlice: dataSlice
    }
})

export default store