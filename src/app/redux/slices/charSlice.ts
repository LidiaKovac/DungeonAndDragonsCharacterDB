import { PayloadAction } from "@reduxjs/toolkit"
import { CHANGE_CHAR, SET_PROFS } from "../actions"

const initialState = {
    name: "",
    id: "",

    str: 0,
    cos: 0,
    dex: 0,
    int: 0,
    cha: 0,
    wis: 0,
    ab_prof_1: "",
    ab_prof_2: "",
    ab_prof_3: "",
    ab_prof_4: "",
    hit_points: 0,

    level: 1,
    classes: [],
    race: ""
}
export const charSlice = (state = initialState, action: PayloadAction<CharBody>) => {
    switch (action.type) {
        case CHANGE_CHAR:
            return {
                ...state,
                ...action.payload
            }
        case SET_PROFS: 
            return {
                ...state, 
                ...action.payload
            }
        default:
            return state
    }
}