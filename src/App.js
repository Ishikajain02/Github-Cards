import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Result from './components/Result';

function App() {
  const [text,settext]=useState([]);
  const [err,seterr]=useState(null);
  const [response,setresponse]=useState([]);
  async function textgeneration(){
    const data = await fetch("https://api.github.com/users/"+ text);
    const res=await data.json();
    if(!data.ok){
      throw new Error("user not found");
   
    }
    else{
     setresponse(res);
    }
    //console.log(res.id);
    console.log(response);
  }
  {/*useEffect(()=>{
d     textgeneration();
  },[text]);*/}
  return (
    <div classname="flex">
   <div className='bg-purple-800 h-screen w-full flex flex-col '>
    <div className='flex flex-col items-center justify-center'>
    <input className='w-80 flex flex-col justify-center align center h-4' onChange={(e) => settext(e.target.value)} ></input>
    <button className='border border-black' onClick={textgeneration}>Press</button>
    </div>
    <div>
      <Result {...response}/>
    </div>
     </div>
   </div>
  );
}

export default App;
