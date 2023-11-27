import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import frame from "../images/frame.jpg"

function Search() {
  return (
    <div className='mt-8 flex space-x-[24rem]'>
      <div className='flex space-x-1'>
        <div>
          <img src={frame} alt="" />
        </div>
        <div className='flex flex-col space-y-2'>
          <div><p>Fadlama</p></div>
          <div><p>2023</p></div>
          <div><p>Udaku Tv</p></div>
          
        </div>
      </div>
      <div>
        <MoreVertIcon/>
      </div>
   </div>
  )
}

export default Search
