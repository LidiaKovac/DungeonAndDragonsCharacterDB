import  { FC } from 'react'

import "./CreateNew.scss";
interface CreateNewProps {
    show: Function
}
const CreateNew: FC<CreateNewProps> = ({ show }) => {
    return (<div className='new__wrap' onClick={() => show(true)}>+</div>)
}
export default CreateNew;
