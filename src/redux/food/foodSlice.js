import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import foodService from "../services/foodService";

export const getFood = createAsyncThunk('GET_FOOD',async(_,thunkApi) => {
    try{
        return foodService.getFood()
    }catch (error) {
     return thunkApi.rejectWithValue(error.response.data)
    }
})

export const createFood = createAsyncThunk('CREATE_FOOD',async(foodData,thunkApi) => {
    try{
        return foodService.createFood(foodData)
    }catch (error) {
     return thunkApi.rejectWithValue(error.response.data)
    }
})

export const updateFood = createAsyncThunk('UPDATE_FOOD',async (foodData, thunkApi) => {
      try {
        await foodService.updateFood(foodData.id, foodData.updateData)
        return foodData.updateData;
      } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
      }
    }
  );

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
            })
            .addCase(createFood.pending,(state) => {
                state.isLoading = true
            })
            .addCase(createFood.fulfilled,(state) => {
                state.isLoading = false
                state.isError = false
            })
            .addCase(createFood.rejected,(state,action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload.message
                state.food = null
            })
            .addCase(updateFood.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateFood.fulfilled, (state,action) => {
                state.isLoading = false
                state.food = action.payload
            })
            .addCase(updateFood.rejected,(state,action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload.message
                state.food = null
            })
    }
});

export default foodSlice.reducer;
