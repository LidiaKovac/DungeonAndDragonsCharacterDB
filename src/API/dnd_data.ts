import { generateOptions } from "../utils"

export const getClasses = async() => {
    let rawRes = await fetch(process.env.REACT_APP_BE_URL + "dnd/classes")
    let classes = await rawRes.json()
    return generateOptions(classes, "index", "name")
}

export const getRaces = async() => {
    let rawRes = await fetch(process.env.REACT_APP_BE_URL + "dnd/races")
    let races = await rawRes.json()
    return generateOptions(races, "index", "name")
}