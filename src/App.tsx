import { Route } from 'react-router';
import ColorRow from './app/components/ColorRow/ColorRow';
import Dashboard from './app/views/Dashboard/Dashboard';
import Homepage from './app/views/Homepage/Homepage';
import Login from './app/views/Login/Login';
import Register from './app/views/Register/Register';
import Signup from './app/views/Signup/Signup';

function App() {
  return (
    <>
    <Route>
      <ColorRow/>
    </Route>
    <Route exact path='/'>
      <Homepage/>
    </Route>
    <Route exact path='/login'>
      <Login/>
    </Route>
    <Route exact path='/signup'>
      <Register/>
    </Route>
    <Route exact path="/home">
      <Dashboard/>
    </Route>
    <Route exact path="/signup">
      <Signup/>
    </Route>
    </>
  );
}

export default App;
