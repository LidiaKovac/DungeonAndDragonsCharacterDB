import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { charSlice } from "./slices/charSlice";
import { passiveSlice } from "./slices/passiveSlice";

const rootReducer = combineReducers({
    character: charSlice,
    passive: passiveSlice
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
export type Dispatch = typeof store.dispatch 
