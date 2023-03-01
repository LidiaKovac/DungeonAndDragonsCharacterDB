import { FC, useState } from "react";
import "./Select.scss";
interface SelectProps {
  options: Array<Option>;
  selectedOpt: Function;
  field: string
  value: Option
}
export class OptionClass implements Option {
  val: string
  display: string
  constructor(val: string, display: string) {
      this.val = val
      this.display = display
  }
}
const Select: FC<SelectProps> = ({ options, selectedOpt, field, value }) => {
  const [selected, setSelected] = useState<Option>(value);
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="select">
      <div className="select__wrap" onClick={() => setOpen(!open)}>
        <strong>{selected?.display || "Select one"}</strong>
      </div>
      {open && (
        <div className="select__options">
          {options.map((opt) => (
            <div
              key={opt.display}
              className="single-option"
              onClick={(ev) => {
                selectedOpt(opt, field); //sets selection in parent component
                setSelected(opt); //set selection in this component
                setOpen(false); //closes component
              }}
            >
              {opt.display}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Select;
