import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTriangleExclamation} from '@fortawesome/free-solid-svg-icons'; 
const NotExist = () => {
  return (
    <div className=' flex items-center justify-center p-2 flex-row w-[490px] h-[540px] backdrop-blur-lg rounded-2xl bg-white bg-opacity-70 border border-black'>
     <FontAwesomeIcon className="h-12"icon={faTriangleExclamation} />
     <h1 className='text-xl font-bold'>User Not Found</h1>
    
    </div>
  )
}

export default NotExist