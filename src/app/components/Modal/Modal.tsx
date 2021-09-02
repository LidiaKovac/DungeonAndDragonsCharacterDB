import React,{ FC, useEffect, useState } from "react";
import { Option, OptionClass } from "../../../interfaces";
import Input from "../Input/Input";
import {IoMdArrowRoundBack} from "react-icons/io"
import ModalNewView from "../ModalNewView/ModalNewView";
import Select from "../Select/Select";
import "./Modal.scss";
import ModalSheet from "../ModalSheet/ModalSheet";
interface ModalProps {
  close: Function;
  type: "new" | "edit";
}

const Modal: FC<ModalProps> = ({ close, type }) => {
  const [mode, setMode] = useState<string | null>(
    type === "edit" ? "char" : null
  );
  useEffect(()=> {
    console.log(mode);
    
  },[mode])
const options = [new OptionClass("new", "Create a new character!"), new OptionClass("idea", "Note down an idea")]
  return (
    <>
      <div className="modal__wrap" onClick={() => close(false)}></div>
      <div className="modal__inner">
        <span className="close" onClick={() => close(false)}>
          ❌
        </span>
        {
          <div className="modal">
            <h2 style={{width: "fit-content",padding: "20px", position: "sticky", top: "0px"}}>
              {type === "new"
                ? "Create a new character"
                : "Edit your character"}
              { mode !== null && <IoMdArrowRoundBack style={{marginLeft: "30px"}}  onClick={()=> setMode(null)}/>}
            </h2>
            <div className="modal__input-wrap">
              {!mode && <Select options={options} selectedOpt={(mode:Option)=> setMode(mode.val)} />}
              {mode === "idea" ? <ModalNewView/> : mode === "new" && <ModalSheet/>}
            </div>
          </div>
        }
      </div>
    </>
  );
};
export default Modal;
