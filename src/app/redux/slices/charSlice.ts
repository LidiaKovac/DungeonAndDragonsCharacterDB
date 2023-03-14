import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
const initialState: charInitialState = {
  loading: true,
  newChar: {} as CharBody,
  error: "",
  newThrows: {} as Throws,
  myChars: [],
  selectedChar: {} as CharBody
}

export const fetchAllChars = createAsyncThunk("character/fetchAllChars", (token: string, { rejectWithValue }): Promise<CharBody[] | string> => {
  return new Promise(async (res, rej) => {
    let resp = await fetch(`${process.env.REACT_APP_API}api/character`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    if (resp.ok) {
      let chars = await resp.json()
      res(chars)
    } else {
      let err = await resp.text()
      rej(rejectWithValue(err))
    }
  })
})

export const fetchCharById = createAsyncThunk("character/fetchCharById", ({ token, id }: { token: string, id: string }, { rejectWithValue }): Promise<CharBody | string> => {
  return new Promise(async (res, rej) => {
    let resp = await fetch(`${process.env.REACT_APP_API}api/character/${id}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    if (resp.ok) {
      let char = await resp.json()
      res(char)
    } else {
      let err = await resp.text()
      rej(rejectWithValue(err))
    }
  })
})

export const editChar = createAsyncThunk("character/editChar", ({ token, id, data }: { token: string, id: string, data:FormData }, { rejectWithValue }): Promise<CharBody | string> => {
  return new Promise(async (res, rej) => {
    let resp = await fetch(`${process.env.REACT_APP_API}api/character/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`
      },
      body: data
    })
    if (resp.ok) {
      let char = await resp.json()
      res(char)
    } else {
      let err = await resp.text()
      rej(rejectWithValue(err))
    }
  })
})

const charSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setChar: (state, action) => {
      state.newChar = action.payload
    },
    setThrows: (state, action) => {
      state.newThrows = action.payload
    },
    setSingleThrow: (state, { payload: { ab, value } }: PayloadAction<{ ab: string, value: number }>) => {
      state.newThrows[ab] = value
    },

  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllChars.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchAllChars.fulfilled, (state, action) => {
      state.loading = false
      state.myChars = action.payload as CharBody[]
    })
    builder.addCase(fetchAllChars.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload as string
    })
    builder.addCase(fetchCharById.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchCharById.fulfilled, (state, action) => {
      state.selectedChar = action.payload as CharBody
      state.loading = false
    })
    builder.addCase(fetchCharById.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload as string
    })
    builder.addCase(editChar.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(editChar.fulfilled, (state, action) => {
      state.selectedChar = action.payload as CharBody
      state.loading = false
    })
    builder.addCase(editChar.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload as string
    })
  },
})
export const { setChar, setSingleThrow, setThrows, } = charSlice.actions
export default charSlice.reducer
