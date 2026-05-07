import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getLocation = createAsyncThunk("LocationThunk", async() => {
    const data = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) =>{
            resolve({
                lat : position.coords.latitude,
                long : position.coords.longitude
            })
        }, (error) => {
            reject(error),
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
            
        })
    })

    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${data.lat}&lon=${data.long}&format=json`)
    const apiRes = await res.json()

    
    data.location = apiRes.display_name

   

    return data
} )

const locationSlice = createSlice({
    name : "Location",
    initialState : {
        loading : false,
        data : {},
        error : null
        
    },
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getLocation.pending, (state) => {
            return {
                ...state,
                loading : true
            }
        })

        .addCase(getLocation.fulfilled, (state, action) => {
            return {
                ...state,
                loading : false,
                data : action.payload
            }
        })

        .addCase(getLocation.rejected, (state, action) => {
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        })
    }
    
})

export default locationSlice.reducer