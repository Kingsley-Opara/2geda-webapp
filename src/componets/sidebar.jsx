import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import {sidebarClasses, menuClasses} from 'react-pro-sidebar'
import { Typography, Container } from '@mui/material';
import tickets from '../images/tickets.png'
import contact from '../images/UsersThree.png'
import subscription from '../images/subscription.png'
import {useState} from 'react'
import commerce from "../images/Storefront.png"
import book from "../images/bxs_book.png"
import chat from "../images/chat.png"
import live from "../images/live.png"
import music from "../images/majesticons_music.png"
import television from "../images/television.png"
import voting from "../images/voting.png"
import education from "../images/bi_book.png"
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';


function SidebarComponents() {
    const [collapse, setCollapse] = useState(true)

  return (
    <>
        
        <Sidebar
            rootStyles={{
                [`.${sidebarClasses.container}`]: {
                    backgroundColor: '#4F0DA3',
                    color: 'gray'
                },
            }}
            className='h-[200vh]'
            width='280px'
            toggled = {true}
            collapsed = {false}
            collapsedWidth='120px'
            
        >
            
            <Menu
                menuItemStyles={{
                button: {
                    // the active class will be added automatically by react router
                    // so we can use it to style the active menu item
                    [`&.active`]: {
                    backgroundColor: 'black',
                    color: '#b6c8d9',
                    },
                },
                }}
            >
                <MenuItem component='home' className='mt-10'>
                    <Container>
                        <div className='flex flex-row space-x-4'>
                            <HomeIcon className='text-white'/>
                            <Typography variant='h6' className='text-white'>{'Home'}</Typography>
                        </div>
                    </Container>
                    
                </MenuItem>
                <MenuItem component='home'>
                    <Container>
                        <div className='flex flex-row space-x-4'>
                            <img src={contact} alt='' className='object-contain'/>
                            <Typography variant='h6' className='text-lg'>{'Contact'}</Typography>
                        </div>    
                    </Container> 
                </MenuItem>
                <MenuItem component='home'>
                    <Container>
                        <div className='flex flex-row space-x-4'>
                            <img src={commerce} alt='' className='object-contain'/>
                            <Typography variant='h6' className='text-lg'>
                                {'Commerce'}</Typography>
                        </div>    
                    </Container> 
                </MenuItem>
                <MenuItem component='home'>
                    <Container>
                        <div className='flex flex-row space-x-4'>
                            <img src={book} alt='' className='object-contain'/>
                            <Typography variant='h6' className='text-lg'>
                                {'Bussiness Directory'}</Typography>
                        </div>    
                    </Container> 
                </MenuItem>
                <MenuItem component='home'>
                    <Container>
                        <div className='flex flex-row space-x-4'>
                            <img src={chat} alt='' className='object-contain'/>
                            <Typography variant='h6' className='text-lg'>
                                {'Chat'}</Typography>
                        </div>    
                    </Container> 
                </MenuItem>
                <MenuItem component='home'>
                    <Container>
                        <div className='flex flex-row space-x-4'>
                            <PersonIcon className='text-xl text-[#C47EFB]' />
                            <Typography variant='h6' className='text-lg'>
                                {'Profile'}</Typography>
                        </div>    
                    </Container> 
                </MenuItem>
                <MenuItem component='home'>
                    <Container>
                        <div className='flex flex-row space-x-4'>
                            <BookmarksIcon className='text-xl text-[#C47EFB]'/>
                            <Typography variant='h6' className='text-lg'>
                                {'Tickets'}</Typography>
                        </div>    
                    </Container> 
                </MenuItem>
                <MenuItem component='home'>
                    <Container>
                        <div className='flex flex-row space-x-4'>
                            <img src={live} alt='' className='object-contain'/>
                            <Typography variant='h6' className='text-lg'>
                                {'Live'}</Typography>
                        </div>    
                    </Container> 
                </MenuItem>
                <MenuItem component='home'>
                    <Container>
                        <div className='flex flex-row space-x-4'>
                            <img src={music} alt='' className='object-contain'/>
                            <Typography variant='h6' className='text-lg'>
                                {'Stero'}</Typography>
                        </div>    
                    </Container> 
                </MenuItem>
                <MenuItem component='home'>
                    <Container>
                        <div className='flex flex-row space-x-4'>
                            <img src={television} alt='' className='object-contain'/>
                            <Typography variant='h6' className='text-lg'>
                                {'Tv'}</Typography>
                        </div>    
                    </Container> 
                </MenuItem>
                <MenuItem component='home'>
                    <Container>
                        <div className='flex flex-row space-x-4'>
                            <img src={voting} alt='' className='object-contain'/>
                            <Typography variant='h6' className='text-lg'>
                                {'Voting'}</Typography>
                        </div>    
                    </Container> 
                </MenuItem>
                <MenuItem component='home'>
                    <Container>
                        <div className='flex flex-row space-x-4'>
                            <img src={education} alt='' className='object-contain'/>
                            <Typography variant='h6' className='text-lg'>
                                {'Education'}</Typography>
                        </div>    
                    </Container> 
                </MenuItem>
            </Menu>
            
            <Menu
                menuItemStyles={{
                button: {
                    // the active class will be added automatically by react router
                    // so we can use it to style the active menu item
                    [`&.active`]: {
                    backgroundColor: 'black',
                    color: '#b6c8d9',
                    },
                },
                }}
                className='mt-[5rem]'
            >
                <MenuItem component='home'>
                    <Container>
                        <div className='flex flex-row space-x-4'>
                            <LogoutIcon className='text-[#C47EFB]'/>
                            <Typography variant='h6' className='text-lg'>
                                {'Sign Out'}</Typography>
                        </div>    
                    </Container>
                </MenuItem>


                
            </Menu>
        
        </Sidebar>

    </>
  )
}

export default SidebarComponents
