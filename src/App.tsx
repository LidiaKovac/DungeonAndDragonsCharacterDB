import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ColorRow from './app/components/ColorRow/ColorRow';
import Dashboard from './app/views/Dashboard/Dashboard';
import Homepage from './app/views/Homepage/Homepage';
import Login from './app/views/Login/Login';

function App() {
  return (
      <BrowserRouter> 
        <ColorRow /> 
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path="/home" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
