import React from 'react';
import './App.css';
import ChangeCurrent from './component/ChangeCurrent';
import CreateNew from './component/CreateNew';
import Dashboard from './component/Dashboard';
import Navbar from './component/Navbar';
import Risk from './component/Risk';
import { Route , Routes } from 'react-router-dom'

function App() {

  
  return (
    <>
      <Navbar />
      
   <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/create' element={<CreateNew/>} />
        <Route path='/change' element={<ChangeCurrent/>} />
        <Route path='/risk' element={<Risk/>} />
    </Routes>
    </>
  );
}

export default App;
