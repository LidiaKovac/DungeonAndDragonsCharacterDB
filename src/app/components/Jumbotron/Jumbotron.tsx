import { FC } from "react";
import "./Jumbotron.scss";
interface JumboTronProps {
    show: Function
}
const Jumbotron:FC<JumboTronProps> = ({show})=> {
    return (<div className='jumbo__wrap'>
        <div className='close' onClick={()=> show(false)}> ❌ </div>
        <h2>Welcome to your dashboard!</h2>
        <p>Here you can view, add and delete your characters. <br/>
            Got an idea for a character? <br/> Click on the <strong>+</strong> button to make note of it and come back to building it when you are ready!
        </p>
    </div>)
}
export default Jumbotron;
