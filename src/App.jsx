import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SidebarComponents from './componets/sidebar'
import Home from './componets/home'
import Tickets from './pages/tickets'
function App() {
 return (
    <>

      <Router>
        <main className='flex bg-[#F7F8FC] h-full'>
          <SidebarComponents/>
          <Routes>
            <Route path='/home' element={<Home/>}/>
          </Routes>
          <Routes>
            <Route path='/' element={<Tickets/>}/>
          </Routes>
        </main>
      </Router>

    </>
  )
}

export default App
