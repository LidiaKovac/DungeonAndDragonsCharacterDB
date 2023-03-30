import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import charSlice from "./slices/charSlice"
import passiveSlice from "./slices/passiveSlice"
import userSlice from "./slices/userSlice"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { encryptTransform } from "redux-persist-transform-encrypt"
import tokenSlice from "./slices/tokenSlice"

const baseReducer = combineReducers({
  character: charSlice,
  passive: passiveSlice,
  user: userSlice,
  token: tokenSlice,
})

const persistedReducer = persistReducer(
  {
    key: "root",
    whitelist: ["token", "passive"],
    transforms: [
      encryptTransform({
        secretKey: process.env.REACT_APP_ENCRYPT_SECRET!,
        onError: (err) => {
          console.log(err)
        },
      }),
    ],
    storage,
  },
  baseReducer
)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === 'development'
  // può esserci solo un valore per reducer nello store
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState> //creates the type for the store
export type AppDispatch = typeof store.dispatch
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
