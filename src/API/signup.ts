import { NewUserCred } from "../interfaces";
import { encryptPassword } from "../utils";

export const signup = async(userCred: NewUserCred) => {
    console.log(userCred)
    let encrypted = await encryptPassword(userCred.password!)
    let res = await fetch(process.env.REACT_APP_BE_URL + "user/register", {
        method: "POST",
        body: JSON.stringify({...userCred, password: encrypted}),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    })
    let isCreated = await res.json()
    console.log(isCreated)
}