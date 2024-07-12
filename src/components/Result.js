import React from 'react'

const Result = ({id,login,avatar_url,name,bio,public_respos,followers,following,location}) => {
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
        <div className=' justify-between flex flex-row p-2 m-2 bg-purple-950 text-white rounded-xl h-28'>
        <div >
            <h1 className='p-1 m-1   flex '>Repos</h1>
            <h1>{public_respos}</h1>
        </div>
        <div className='flex'>
            <h1>Followers</h1>
            <h1>{followers}</h1>
        </div>
        <div>
            <h1>Following</h1>
        </div>
        </div>
    </div>
  )
}

export default Result