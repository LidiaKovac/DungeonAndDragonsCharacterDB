import { useState } from "react";
import { newUser, OptionClass } from "../../../interfaces";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import "./index.scss";

const Register = () => {
  const [user, setUser] = useState<newUser>()
  const options = [new OptionClass("she", "She/Her"), new OptionClass("he", "He/Him"), new OptionClass("they", "They/Them") ]
  return (
  <div className='register__wrap'>
      <Input name='username' type='username' handleEdit={(username:object)=> setUser({...user as newUser, ...username })}/>
      <Input name='email' type='email' handleEdit={(email:object)=> setUser({...user as newUser, ...email })}/>
      <Input name='password' type='password' handleEdit={(password:object)=> setUser({...user as newUser, ...password })}/>
      <Select options={options} selectedOpt={(pronouns: "she" | "he" | "they")=> setUser({...user as newUser, pronouns: pronouns }) }/>
  </div>);
};
export default Register;
