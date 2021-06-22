import { ImageRequestBody } from "../interfaces"
import { generateFormData } from "../utils"

require("dotenv").config()

export const generateLink = async(image:File) => {
    try {
        const res = await fetch(process.env.REACT_APP_BE_URL + "image/generate", {
            method: "POST",
            body: generateFormData(new ImageRequestBody("moodboard", image))
        })
        let link = await res.json()
        return link.img
    } catch (error) {
        console.log(error)
    }
}