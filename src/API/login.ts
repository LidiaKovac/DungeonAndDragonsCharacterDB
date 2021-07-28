import { encryptPassword } from "../utils";

export const login = async (
  email: String,
  password: String
): Promise<Object> => {
  let isLogged
  try {
    let encrypted = await encryptPassword(password)
  let loginRes = await fetch(process.env.REACT_APP_BE_URL + "user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: encrypted
    })
  })
  isLogged = await loginRes.json()
} catch (error) {
  console.error(error)
}

return isLogged;
};
