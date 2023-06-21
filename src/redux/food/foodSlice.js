import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import foodService from "../services/foodService";

export const getFood = createAsyncThunk('GET_FOOD',async(_,thunkApi) => {
    try{
        return foodService.getFood()
    }catch (error) {
     return thunkApi.rejectWithValue(error.response.data)
    }
})

export const foodSlice = createSlice({
    name: 'food',
    initialState: {
        food: null,
        isError: false,
        isLoading: false,
        message: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFood.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getFood.fulfilled, (state, action) => {
                state.isLoading = false;
                state.food = action.payload;
            })
            .addCase(getFood.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    }
});

export default foodSlice.reducer;
