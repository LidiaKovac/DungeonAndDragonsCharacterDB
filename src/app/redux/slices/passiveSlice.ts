import { PayloadAction } from "@reduxjs/toolkit"
import { SET_CLASSES, SET_RACES } from "../actions"

const initialState = {
    classes: [],
    races: []
}
export const passiveSlice = (state = initialState, action: PayloadAction<DNDClass[] | DNDRace[]>) => {
    switch (action.type) {
        case SET_CLASSES:
            return {
                ...state,
                classes: action.payload
            }
        case SET_RACES:
            return {
                ...state,
                races: action.payload
            }
        default:
            return state
    }
}