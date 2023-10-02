import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.products = [...action.payload]
        },
        addProducts: (state, action) => {
            state.products = [...state.products, {...action.payload}]
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product._id !== action.payload)
        }
    }
})

export default productSlice.reducer

export const {getProducts, addProducts, deleteProduct} = productSlice.actions