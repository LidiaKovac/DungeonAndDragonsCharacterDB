import { useState } from "react"
import "./Signup.scss"

import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import { NewUserCred, OptionClass, Option } from "../../../interfaces"
import Select from "../../components/Select/Select"
import { signup } from "../../../API/signup"

const Signup = () => {
    const [error, setError] = useState<string | undefined>()
    const [newUser, setNewUser] = useState<NewUserCred>()

    const options = [new OptionClass("she", "She/Her"), new OptionClass("he", "He/Him"), new OptionClass("they", "They/Them")]
    return (
        <div className="login__wrap">
      <div className="login">
        {error && <div className="error">{error}</div>}
        <h3>Email</h3>
        <Input name="email" type="text" handleEdit={(credentials: NewUserCred)=> setNewUser({...newUser, ...credentials})} />
        <h3>Username</h3>
        <Input name="username" type="text" handleEdit={(credentials: NewUserCred)=> setNewUser({...newUser, ...credentials})} />
        <h3>Password</h3>
        <Input name="password" type="password" handleEdit={(credentials: NewUserCred)=> setNewUser({...newUser, ...credentials})} />
        <h3>Pronouns</h3>
        <Select options={options} selectedOpt={(selected:Option)=> setNewUser({...newUser, pronouns: selected.val})} />
        <div onClick={()=> {
          console.log(newUser as NewUserCred);
          
          signup(newUser as NewUserCred)}}>
        <Button text="Create new User"/>
        </div>
      </div>
    </div>
)
}

export default Signup