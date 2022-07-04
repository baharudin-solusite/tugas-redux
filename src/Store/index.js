import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../component/CakeSlice";

const store = configureStore({
    reducer: {
        cake: cakeReducer,
    },
});

export default store;