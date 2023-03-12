import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const initialState: passiveInitialState = {
    error: "",
    loading: true,
    classes: [] as Array<DNDClass>,
    races: [] as Array<DNDRace>
}


export const fetchClasses = createAsyncThunk("passive/getClasses", (): Promise<Array<DNDClass | string>> => {
    return new Promise(async (res, rej) => {
        let raw = await fetch(`${process.env.REACT_APP_API}passive/class?attributes=name,id&complete=false`)
        if (raw.ok) {
            let foundClasses = await raw.json()
            res(foundClasses)
        } else {
            let error = await raw.text()
            rej(error)
        }
    })
})

export const fetchRaces = createAsyncThunk("passive/getRaces", (): Promise<Array<DNDRace | string>> => {
    return new Promise(async (res, rej) => {
        let raw = await fetch(`${process.env.REACT_APP_API}passive/race`)
        if (raw.ok) {
            let foundRaces = await raw.json()
            res(foundRaces)
        } else {
            let error = await raw.text()
            rej(error)
        }
    })
})



const passiceSlice = createSlice({
    name: "passive",
    initialState,
    reducers: {
        emptyError: (state) => {
            state.error = ""
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchClasses.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchClasses.fulfilled, (state, action) => {
                state.loading = false
                state.classes = action.payload as Array<DNDClass>
                state.error = ""
            })
            .addCase(fetchClasses.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload as string
            })
            .addCase(fetchRaces.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchRaces.fulfilled, (state, action) => {
                state.loading = false
                state.races = action.payload as Array<DNDRace>
                state.error = ""
            })
            .addCase(fetchRaces.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload as string
            })
    },
})
export const { emptyError, setLoading } = passiceSlice.actions

export default passiceSlice.reducer


