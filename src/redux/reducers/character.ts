import { ActionWithPayLoad } from "../../interfaces"
import { ADD_IMAGE, LOADING_FALSE, LOADING_TRUE } from "../actions"

const initial_state = {
        moodboard: [],
        loading: false
    }
    
export const character_reducer = (state= initial_state, action: ActionWithPayLoad) => {
    switch(action.type) {
        case LOADING_TRUE:
            return {
                ...state,
                loading: true
        }
        case LOADING_FALSE: 
            return {
                ...state,
                loading: false
            }
        case ADD_IMAGE: 
            return {
                ...state,
                moodboard: [...state.moodboard, action.payload ]
            }
        default:  return state
    }
}
