import { combineReducers } from "@reduxjs/toolkit";
import { character_reducer } from "./character";

export default combineReducers({
    character: character_reducer
})

