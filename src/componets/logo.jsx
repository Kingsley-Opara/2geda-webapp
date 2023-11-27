import logo from '../images/logo.png'
// import Container, { Typography } from '@mui/material'
import { Typography, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import notification from "../images/new.png"
import vertical from "../images/vertical.png"
import jones from "../images/jones.png"


function Logo() {
  return (
    <div className='flex space-x-[28rem] bg-shadow h-[5rem] ml-1'>
        <div className='flex space-x-2'>
            <img src={logo} alt='' className='object-contain h-12 mt-5'/>
            <Typography variant='h5' className='font-bold text-[#4F0DA3] pt-6'>2geda</Typography>
        </div>
        <div className='flex space-x-1 mt-1 place-content-evenly'>
            <div className='relative mt-5'>
                <input type="text" className='w-[20rem] h-8'/>
                <SearchIcon className='cursor-pointer text-[gray] absolute top-1 right-7'/> 
            </div>
            <div className='flex'>
              <img src={notification} alt='' className='object-contain cursor-pointer ml-[2rem] mt-5 h-8 w-6'/>
              <div>
                <img src={jones} alt='' className='object-contain cursor-pointer ml-[2rem] mt-5 h-8 w-6'/>
              </div>
            </div>
            
          
            
        </div>


    </div>
  )
}

export default Logo
