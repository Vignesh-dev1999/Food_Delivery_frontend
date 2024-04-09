import { configureStore } from '@reduxjs/toolkit';
import addToCart from "./cartslice";

export default configureStore({
    reducer: {
        addToCart,
    },
});