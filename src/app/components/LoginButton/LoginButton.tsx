import "./LoginButton.scss";
interface LoginbuttonProps {
    logo: string;
    name: string;
}
const LoginButton:React.FunctionComponent<LoginbuttonProps> = ({logo, name})=> {
    return (<div className="login-button__wrap"><img alt="logo" src={logo}/></div>)
}
export default LoginButton;
