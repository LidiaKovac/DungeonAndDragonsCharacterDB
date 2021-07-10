import { encryptPassword } from "../utils";

export const login = async (
  email: String,
  password: String
): Promise<Response> => {
  encryptPassword(password)
    .then((encryptedPass) => {
      fetch(process.env.REACT_APP_BE_URL + "user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: encryptedPass,
        }),
      });
    })
    .catch((e) => console.error(e));
  return new Response();
};