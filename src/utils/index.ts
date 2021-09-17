import { ImageRequestBody, Option, OptionClass } from "../interfaces";
const bcryptjs = require("bcryptjs")

//CREATES A FORMDATA 
export const generateFormData = (imageData:ImageRequestBody) => {
    let formData = new FormData()
    formData.append(imageData.text, imageData.file)
    return formData
}
//password encryption done on frontend to better hide the data
export const encryptPassword = async(password:string):Promise<String> => {
    let hashedPassword = bcryptjs.hash(password, 10)
    return hashedPassword
}
//generate options for the hand made select component
export const generateOptions = (elements:Array<any>, valueName:string, displayName: string) => {
    let options:Array<Option> = []
    elements.forEach(opt => {
        let newOpt = new OptionClass(opt[valueName], opt[displayName])
        options.push(newOpt)
    })
    return options
}

// ************************************* DND UTILS *************************************

export const calcModifier = (value:number):number => {
    return Math.floor((value - 10)/2)
}

export const calcProf = (lvl:number) => {
    if(lvl <= 4) {
       return 2 
    }
    if (lvl <=8) {
        return 3
    }
    if (lvl <= 12) {
        return 4
    }
    if (lvl <= 16) {
        return 5
    }
    if (lvl > 16) {
        return 6
    }
}

export const getProfAbilities = (char_class:string) => { //returns an array of abilities based on the class
    if (char_class === "barbarian") {
        return ["str", "cos"]
    }
    if (char_class === "bard") {
        return ["dex", "cha"]
    }
    if (char_class === "cleric") {
        return ["wis", "cha"]
    }
    if (char_class === "druid") {
        return ["int", "wis"]
    }
    if (char_class === "fighter") {
        return ["str", "cos"]
    }
    if (char_class === "monk") {
        return ["str", "dex"]
    }
    if (char_class === "paladin") {
        return ["wis", "cha"]
    }
    if (char_class === "ranger") {
        return ["str", "dex"]
    }
    if (char_class === "rogue") {
        return ["dex", "int"]
    }
    if (char_class === "sorcerer") {
        return ["cos", "cha"]
    }
    if (char_class === "warlock") {
        return ["wis", "cha"]
    }
    if (char_class === "wizard") {
        return ["int", "wis"]
    }
}