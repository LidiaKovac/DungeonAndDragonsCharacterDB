import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
const initialState = {
  loading: true,
  logged: {},
}

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const res = await fetch(`http://localhost:3001/api/user/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
          
        },
      })
      if(res.ok) {
        for (const key of res.headers.keys()) {
            console.log(key);
            
        };
            
          let token = res.headers.get("token") 
          const loginRes = await fetch("http://localhost:3001/api/user/me", {
              headers: {
                authorization: `Bearer ${token}`,
                },
            })
            let me = await loginRes.json()
            return { token, me }
        } else {

        }
    } catch (error) {
      console.error(error)
    }
  }
)

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.logged = action.payload?.me
        localStorage.setItem("token", action.payload?.token!)
      })
  },
})

export default userSlice.reducer
