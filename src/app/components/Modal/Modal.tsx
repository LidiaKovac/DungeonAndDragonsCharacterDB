import { FC, useState } from "react";
import { Stage } from "../Stage/Stage";
import "./Modal.scss";
import { NewCharForm } from "../NewCharForm/NewCharForm";
import { Abilities } from "../Abilities/Abilities";
import { CharacterSummary } from "../CharSummary/CharSummary";

interface ModalProps {
  close: Function;

}

const Modal: FC<ModalProps> = ({ close }) => {
  const [secNum, setSecNum] = useState<number>(1)
  return (
    <>
      <div className="modal__wrap" onClick={() => close(false)}></div>
      <div className="modal__inner">
        <span className="close" onClick={() => close(false)}>
          ❌
        </span>
        {
          <div className="modal">
            {secNum === 1 && <Stage stageNum={1} comps={[<NewCharForm setStageInModal={setSecNum} />]} />}
            {secNum === 2 && <Stage stageNum={2} comps={[<CharacterSummary />, <Abilities />]} />}
          </div>
        }
      </div>

    </>
  );
};
export default Modal;
