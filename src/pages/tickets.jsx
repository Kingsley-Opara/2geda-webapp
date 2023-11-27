import logo from '../images/logo.jpg'
import { Typography, Container } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Logo from '../componets/logo';
import SearchIcon from '@mui/icons-material/Search';
import frame from "../images/frame.jpg"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Search from '../componets/Search';
import DownloadIcon from '@mui/icons-material/Download';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Tickets() {
  return (
    <>
        <main className=" h-[100vh] mt-0 ml-[0rem] w-[100vw]">
            <Logo/>
            <div className='flex space-x-6'>
              <div className='ml-3 bg-shadow mt-1 w-[40rem] p-3'>
                <div className='ml-3 flex space-x-3 pt-2'>
                  <ArrowBackIcon/>
                  <Typography variant='h6'> Search </Typography>
                </div>
                <div className='relative ml-5 mt-5'>
                  <input type="text" className='w-[35rem] h-12
                   bg-gray-300 text-black rounded-md pl-9' placeholder='hr'/>
                  <SearchIcon className='cursor-pointer text-[gray] absolute top-3 left-1'/> 
                  <button type='submit' className='absolute top-2 right-[4rem] w-20 h-8 rounded-lg purple-bg text-white'>Search</button>
                </div>

                <Search/>
                <hr />
                <Search/>
                <hr />
                <Search/>
                <hr />
                <Search/>
                <hr />
                <Search/>
                <hr />
                <Search/>
                <hr />
                <Search/>
                <hr />

              </div>
              <div className='w-[22rem] mt-1'>
                <div className='bg-shadow p-4'>
                  <h3 className='text-lg text-black'>Your Library</h3>
                  
                  <div className='pt-2 relative'>
                    <input type="text" className='w-[20rem] h-12
                    bg-gray-300 text-black rounded-md pl-9' placeholder='hr'/>
                    <SearchIcon className='cursor-pointer text-[gray] absolute top-5 left-1'/> 
                    <button type='submit' className='absolute top-4 right-[1rem] w-20 h-8 
                    rounded-lg purple-bg text-white'>Search</button>
                                      

                  </div>
                  <div className='pt-5'>
                    <h3 className='text-lg'>History</h3>
                    <div className='pt-3 flex space-x-2'>
                      <div className='flex flex-col space-y-1'>
                        <img src={frame} alt='' className='h-[8rem] w-[9rem] object-contain'/>
                        <h3>Top Flight maverick....</h3>
                        <p>2023</p>

                      </div>
                      <div className='flex flex-col space-y-1'>
                        <img src={frame} alt='' className='h-[8rem] w-[9rem] object-contain'/>
                        <h3>Top Flight</h3>
                        <p>2023</p>


                      </div>
    
                  
                      
                    </div>

                  </div>
                  <div className='pt-3'>
                    <div className='flex space-x-3'>
                      <DownloadIcon className='mt-2'/>
                      <div className='flex flex-col space-y-3'>
                        <h3>Downloads</h3>
                        <p>20</p>
                      </div>
                    </div>
                    <div className='flex space-x-3'>
                      <FavoriteIcon className='mt-2 purple-text'/>
                      <div className='flex flex-col space-y-3'>
                        <h3 className='mt-2'>Liked Movies</h3>
            
                      </div>
                    </div>
                    {/* <div className=''>
                      <CheckCircleOutlineIcon className='mt-2 purple-text'/>

                    </div> */}
                  </div>
                </div>
  
                
              </div>
            </div>

        </main>

    </>
  )
}

export default Tickets
