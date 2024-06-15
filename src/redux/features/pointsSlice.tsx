import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PointsFormState } from "@/components/AddVendorpoints/AddVendorpoints";

const initialState = {
    points : 0
}

const PointsSlice = createSlice({
    name : "vendorpoints",
    initialState,
    reducers : {
        setPoints : (state,action : PayloadAction<number>) => {
            state.points = action.payload
        },
    }
})

export const {setPoints} = PointsSlice.actions

export default PointsSlice.reducer
