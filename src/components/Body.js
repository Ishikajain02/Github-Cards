import React from 'react'
import { useEffect,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 

import Result from './Result';
import NotExist from './NotExist';
const Body = () => {
    const [text,settext]=useState([]);
    const [err,seterr]=useState(null);
    const [response,setresponse]=useState([]);
    async function textgeneration(){
      try{
      const data = await fetch("https://api.github.com/users/"+ text);
      const res=await data.json();
      if(!data.ok){
        seterr(res.message);
        setresponse(null);
        console.log(err);
     
      }
      else{
       setresponse(res);
       seterr(null);
      }
      //console.log(res.id);
      console.log(response);
    }
    catch(error){
      seterr("Not found");
      setresponse(null);
    }
    }
    {/*useEffect(()=>{
  d     textgeneration();
    },[text]);*/}
    
    
    return (
    <div className='flex flex-col items-center h-screen justify-center'>

    <div className='flex flex-row w-96 rounded-xl text-2xl font-bold items-center justify-center  h-20 backdrop-blur-lg bg-opacity-70 bg-white '>
    <FontAwesomeIcon icon={faMagnifyingGlass} />
    
    <input className=' flex flex-col w-60 bg-transparent outline-none h-14 p-2' onChange={(e) => settext(e.target.value)} ></input>
    <button className='border border-black bg-purple-800 text-white h-14 w-24 rounded-2xl' onClick={textgeneration}>Press</button>
    </div>
    <div className='p-8'>
    {err ? <NotExist /> :
      <Result {...response}/>}
    </div>
     
    </div>
  )
}

export default Body