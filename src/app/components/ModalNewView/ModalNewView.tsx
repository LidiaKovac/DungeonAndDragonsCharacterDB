import Input from "../Input/Input";
import "./ModalNewView.scss";

const ModalNewView = () => {
  return (
      <>
    <div className="idea--wrap">
        <div className='title'>

      <Input name="Name" type="text" />{" "}
      <Input type="file" name="Build a moodboard for your character" />{" "}
        </div>
      <textarea placeholder="Write your character idea here, don't be afraid to be messy!" rows={10}></textarea>
    </div>
    <div className='idea--moodboard'>
        <img/>
    </div>
    </>
  );
};
export default ModalNewView;
