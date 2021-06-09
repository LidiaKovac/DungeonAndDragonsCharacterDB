import { FC, useEffect, useState } from "react";
import { Option, OptionClass } from "../../../interfaces";
import Input from "../Input/Input";
import Select from "../Select/Select";
import "./Modal.scss";
interface ModalProps {
  close: Function;
  type: "new" | "edit";
}

const Modal: FC<ModalProps> = ({ close, type }) => {
  const [mode, setMode] = useState<"idea" | "char" | null>(
    type === "edit" ? "char" : null
  );
  useEffect(()=> {
    console.log(mode);
    
  },[mode])
const options = [new OptionClass("idea", "Brainstorming"), new OptionClass("char", "Building")]
  return (
    <>
      <div className="modal__wrap" onClick={() => close(false)}></div>
      <div className="modal__inner">
        <span className="close" onClick={() => close(false)}>
          ❌
        </span>
        {
          <div className="modal">
            <h2>
              {type === "new"
                ? "Create a new character"
                : "Edit your character"}
            </h2>
            <div className="modal__input-wrap">
              {!mode && <Select options={options} selectedOpt={(mode:Option)=> setMode(mode.val)} />}
              {mode === "idea" ? <div className='idea--wrap'><Input name="Name" type="text"/> <Input type='file' name='Build a moodboard for your character'/> </div> : <div></div>}
            </div>
          </div>
        }
      </div>
    </>
  );
};
export default Modal;
