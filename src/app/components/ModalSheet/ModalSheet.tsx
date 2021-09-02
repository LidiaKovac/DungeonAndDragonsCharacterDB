import Input from "../Input/Input";
import { useState } from "react";
import "./ModalSheet.scss";
import Select from "../Select/Select";

const ModalSheet = () => {
  const [charInfo, setCharInfo] = useState<any>()
  const saveToLocalStorage = (data: any) => {
    setCharInfo({ ...charInfo, ...data })
  }
  return (
    <>
      <div className="sheet__wrap">
        <div className="sheet__info">
          <Input name="Character Name" type="text" handleEdit={(data: any) => saveToLocalStorage(data)} />
          <Input name="LVL" type="number" handleEdit={(data: any) => saveToLocalStorage(data)} />
          {/*<Select options={[]} selectedOpt={()=> {}} />*/}
        </div>
        <div className="sheet__core">
          <Input name="STR" type="number" handleEdit={(data: any) => saveToLocalStorage(data)} />
          <Input name="DEX" type="number" handleEdit={(data: any) => saveToLocalStorage(data)} />
          <Input name="COS" type="number" handleEdit={(data: any) => saveToLocalStorage(data)} />
          <Input name="WIS" type="number" handleEdit={(data: any) => saveToLocalStorage(data)} />
          <Input name="INT" type="number" handleEdit={(data: any) => saveToLocalStorage(data)} />
          
        </div>
      </div>
    </>
  );
};
export default ModalSheet;
