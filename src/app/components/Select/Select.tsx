import { FC, useState } from "react";
import "./Select.scss";
interface SelectProps {
  options: Array<Option>;
  field: string
  // value: Option
}
export class OptionClass implements Option {
  val: string
  display: string
  constructor(val: string, display: string) {
    this.val = val
    this.display = display
  }
}
const Select: FC<SelectProps> = ({ options,  field }) => {
  const [selected, setSelected] = useState<Option | undefined>(undefined);
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="select">
      <div className="select__wrap" onClick={() => setOpen(!open)}>
        <strong>{selected?.display || "Select one"}</strong>
      </div>
      {open && (
        <div className="select__options">
          {options.map((opt, i) => (
            <div
              key={`race_${opt.display}_${i}`}
              className="single-option"
              onClick={(ev) => {
                setSelected(opt); //set selection in this component
                setOpen(false); //closes component
              }}
            >
              {opt.display}
            </div>
          ))}
        </div>
      )}
      <select name={field} style={{ display: "none" }} value={selected ? selected.val : selected } onChange={ev => console.log(ev.target.value)}>
        {options.map((opt,i) => (
          <option
            key={`select_${opt.display}_${i}`}
            value={opt.val}
          >
            {opt.display}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
