import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice"
import logger from 'redux-logger'

export default configureStore({
    reducer:{
        user:userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false,
    }).concat(logger),
})