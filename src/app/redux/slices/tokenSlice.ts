import {
  createAsyncThunk,
  createSlice,

} from "@reduxjs/toolkit"
const initialState: tokenInitialState = {
  loading: true,
  error: null,
  token: "",
}

export const login = createAsyncThunk(
  "token/login",
  async ({
    email,
    password,
  }: {
    email: string
    password: string
  }, { rejectWithValue }): Promise<{
    token?: string
    me?: any
    error?: string
  }> => {
    return new Promise(async (res, rej) => {
      const resp = await fetch(`${process.env.REACT_APP_API}api/user/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (resp.ok) {
        for (const key of resp.headers.keys()) {
          console.log(key)
        }
        let token = resp.headers.get("token")!
        const loginRes = await fetch(
          `${process.env.REACT_APP_API}api/user/me`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        )
        let me = await loginRes.json()
        res({ token, me })
      } else {
        rej(rejectWithValue(resp.status + " " + resp.statusText))
      }
    })
  }
)

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.error = null
        state.loading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload.token!
        state.error = ""
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})
// export const { emptyError } = tokenSlice.actions

export default tokenSlice.reducer
