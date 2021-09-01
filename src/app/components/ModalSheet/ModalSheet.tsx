import Input from "../Input/Input";
import { useState } from "react";
import "./ModalSheet.scss";

const ModalSheet = () => {
   const [charInfo, setCharInfo] = useState<any>()
  return (
      <>
      <div className="modal__wrap">

        <Input name="STR" type="number" handleEdit={(data:any)=>  setCharInfo(data)} />
        <Input name="DEX" type="number" handleEdit={(data:any)=>  setCharInfo(data)} />
        <Input name="COS" type="number" handleEdit={(data:any)=>  setCharInfo(data)} />
        <Input name="WIS" type="number" handleEdit={(data:any)=>  setCharInfo(data)} />
        <Input name="INT" type="number" handleEdit={(data:any)=>  setCharInfo(data)} />
    
      </div>
    </>
  );
};
export default ModalSheet;
