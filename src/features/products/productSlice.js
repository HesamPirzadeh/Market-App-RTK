import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../../services/config"


const initialState ={
    loader:false,
    products:[],
    error:""
}

const fetchProduct = createAsyncThunk("product/fetchProduct",()=>{
    return api.get("/products")
})

const productSlie = createSlice({
    name:"product",
    initialState,
    extraReducers:builder=>{
       builder.addCase(fetchProduct.pending,(state)=>{
        state.loader =true
       })
       builder.addCase(fetchProduct.fulfilled,(state,action)=>{
        state.loader =false,
        state.error = "",
        state.products = action.payload
       })
       builder.addCase(fetchProduct.rejected,(state,action)=>{
        state.loader =false,
        state.products = [],
        state.error = action.error.message
       })
    }
})

export default productSlie.reducer
export {fetchProduct}