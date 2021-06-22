import { Dispatch } from "react"
import { useDispatch } from "react-redux"
import { ActionWithPayLoad, ImageRequestBody } from "../interfaces"
import { ADD_IMAGE } from "../redux/actions"
import { generateFormData } from "../utils"

require("dotenv").config()
export const generateLink = (image:File) => async(dispatch:Dispatch<ActionWithPayLoad>):Promise<void>=> {
    try {
        const res = await fetch(process.env.REACT_APP_BE_URL + "image/generate", {
            method: "POST",
            body: generateFormData(new ImageRequestBody("moodboard", image))
        })
        let link = await res.json()
        dispatch({type: ADD_IMAGE, payload: link.img})
    } catch (error) {
        console.log(error)
    }
}