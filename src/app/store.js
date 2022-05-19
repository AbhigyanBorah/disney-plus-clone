import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice"
import movieReducer from "../features/movie/movieSlice";
import logger from 'redux-logger'

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(logger),
})