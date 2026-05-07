import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "DataSlice",

    initialState: {
        homeData: null,
        filterData: {}
    },

    reducers: {
        setHomeData: (state, action) => {
            state.homeData = action.payload
        },

        FilterCaheData: (state, action) => {
            const { id, card } = action.payload
            state.filterData[id] = card
        }
    }
})

export const { setHomeData, FilterCaheData } = dataSlice.actions

export default dataSlice.reducer