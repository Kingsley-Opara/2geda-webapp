import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import frame from "../images/frame.jpg"

function Search() {
  return (
    <div className='mt-8 flex space-x-[20rem] pb-1'>
      <div className='flex space-x-1'>
        <img src={frame} alt="" className='object-contain'/>

        <div className='flex flex-col space-y-2'>
          <div><p>Fadlama</p></div>
          <div><p>2023</p></div>
          <div><p className='text-[brown]'>Udaku Tv</p></div>
          <div className='flex space-x-1'>
            <button className='w-20 h-8 rounded-lg purple-bg text-white'>Action</button>
            <button className='w-20 h-8 rounded-lg purple-bg text-white'>War</button>
            <button className='w-20 h-8 rounded-lg purple-bg text-white'>Romance</button>
          </div>
          
        </div>
      </div>
      <div>
        <MoreVertIcon/>
      </div>
   </div>
  )
}

export default Search
