import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { charSlice } from "./slices/charSlice";
import { passiveSlice } from "./slices/passiveSlice";
import userSlice from "./slices/userSlice";

const rootReducer = combineReducers({
    character: charSlice,
    passive: passiveSlice,
    user: userSlice
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }) 
    // può esserci solo un valore per reducer nello store
})

export type reduxState = ReturnType<typeof store.getState> //creates the type for the store
export type AppDispatch = typeof store.dispatch 
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<reduxState> = useSelector