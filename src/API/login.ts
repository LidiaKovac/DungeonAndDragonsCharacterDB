import { encryptPassword } from "../utils";

export const login = async (email: String, password: String) => {
  try {
    let encrypted = await encryptPassword(password);
  let response = await fetch(process.env.REACT_APP_BE_URL + "user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: encrypted,
    }),
  });
  if (response.ok) {
    return await response.json()
  } else return new Error("Invalid credentials")
  } catch (e) {
    console.error(e)
  }
  
  // let response = encryptPassword(password)
  //   .then((encryptedPass) => {
  //     fetch(process.env.REACT_APP_BE_URL + "user/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: email,
  //         password: encryptedPass,
  //       }),
  //     });
  //   })
  //   .then((res)=>{
  //     return res
  //   } )
  //   .catch((e) => {
  //     console.error(e)
  //     return e
  //   });
};
