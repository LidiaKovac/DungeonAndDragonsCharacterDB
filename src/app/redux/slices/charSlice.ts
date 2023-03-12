import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
const initialState = {
  loading: true,
  newChar: {} as CharBody,
  error: ""
}

const charSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setChar: (state, action) => {
        state.newChar = action.payload
      }
  },
  extraReducers: (builder) => {
   
  },
})
export const {setChar} = charSlice.actions 
export default charSlice.reducer
