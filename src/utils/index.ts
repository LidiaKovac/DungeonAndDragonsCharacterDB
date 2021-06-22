import { ImageRequestBody } from "../interfaces";

//CREATES A FORMDATA 
export const generateFormData = (imageData:ImageRequestBody) => {
    let formData = new FormData()
    formData.append(imageData.text, imageData.file)
    return formData
}