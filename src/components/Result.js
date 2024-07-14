import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot } from '@fortawesome/free-solid-svg-icons'; 


const Result = ({id,login,email,twitter_username,avatar_url,name,bio,public_repos,followers,following,location}) => {
  return (
    <div className='w-[490px] h-[540px] backdrop-blur-lg rounded-2xl bg-white bg-opacity-70 border border-black'>
       <div className='flex flex-row items-center'>       
       <img className='rounded-full border border-black w-[11rem] h-15 p-2 m-2' src={avatar_url}></img>
       <div className='flex flex-col'>
       <h1 className='font-bold text-3xl  pl-4'>{login}</h1>
        <h1 className='font-semibold text-2xl pl-6 m-1'>{name}</h1>
      </div>
        </div>
        <div className=' font-semibold text-xl p-2'>
            <p>{bio}</p>
        </div>
        <div className='text-xl justify-between flex flex-row p-2 m-2 bg-purple-950 text-white rounded-xl h-28'>
        <div className='p-1 m-2 flex flex-col' >
            <h1 className=' '>Repos</h1>
            <h1>{public_repos}</h1>
        </div>
        <div className='flex flex-col p-1 m-2 items-center'>
            <h1>Followers</h1>
            <h1 className=''>{followers}</h1>
        </div>
        <div className='flex flex-col p-1 m-2 items-center'>
            <h1>Following</h1>
            <h1>{following}</h1>
        </div>
        </div>
        <div className='flex items-center justify-center'>
        <FontAwesomeIcon className = "h-8 p-1"icon={faLocationDot} />
            <h1 className='h-8 text-xl p-2 font-bold'>{location}</h1>
        </div>
    </div>
  )
}

export default Result