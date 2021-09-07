import { ImageRequestBody, Option, OptionClass } from "../interfaces";
const bcryptjs = require("bcryptjs")
//CREATES A FORMDATA 
export const generateFormData = (imageData:ImageRequestBody) => {
    let formData = new FormData()
    formData.append(imageData.text, imageData.file)
    return formData
}

export const encryptPassword = async(password:string):Promise<String> => {
    let hashedPassword = bcryptjs.hash(password, 10)
    return hashedPassword
}

export const calcModifier = (value:number):number => {
    return Math.floor((value - 10)/2)
}
export const generateOptions = (elements:Array<any>, valueName:string, displayName: string) => {
    let options:Array<Option> = []
    elements.forEach(opt => {
        let newOpt = new OptionClass(opt[valueName], opt[displayName])
        options.push(newOpt)
    })
    return options
}
