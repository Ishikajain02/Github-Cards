import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Result from './components/Result';
import Body from './components/Body';

function App() {
 
  return (
    <div classname="flex">
    <div className='bg-purple-800 h-screen w-full flex flex-col '>
    <Body/>
   </div>
   </div>
  );
}

export default App;
