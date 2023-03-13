import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const initialState: userInitialState = {
  loading: true,
  logged: {} as User,
  error: ""
}

export const getMe = createAsyncThunk("user/fetchMe", (token: string, {rejectWithValue}): Promise<User | string> => new Promise(async (res, rej) => {
  let raw = await fetch(`${process.env.REACT_APP_API}api/user/me`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  if (raw.ok) {
    let me = await raw.json()
    res(me)
  } else {
    let err = await raw.text()
    rej(rejectWithValue(err))
  }
}))

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMe.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.loading = false
        state.logged = action.payload as User
        // state.token = action.payload?.token!
      })
      .addCase(getMe.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
        // state.token = action.payload?.token!
      })
  },
})
export default userSlice.reducer
