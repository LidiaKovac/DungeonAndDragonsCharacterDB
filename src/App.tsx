import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ColorRow from './app/components/ColorRow/ColorRow';
import { Navbar } from './app/components/Navbar/Navbar';
import { Character } from './app/views/Character/Character';
import Dashboard from './app/views/Dashboard/Dashboard';
import Homepage from './app/views/Homepage/Homepage';
import Login from './app/views/Login/Login';
import { Logout } from './app/views/Logout/Logout';
import { Signup } from './app/views/Signup/Signup';

function App() {
  return (
    <BrowserRouter>
      <ColorRow />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/char/:id" element={<Character />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
