import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Heropage from './Components/Heropage/Heropage'
import Manager from './Components/Manager/Manager'
import ManagerDashboard from './Components/Dashboard/ManagerDashboard'
import UserDashboard from './Components/Dashboard/UserDashboard'
import User from './Components/User/User'

function App() {

  return (
    <>
      <div className='flex flex-col h-[100vh]'>
        <Navbar />
        <div className='flex-grow'>
          <Routes>
            <Route path='/heropage' element={<Heropage />} />
            <Route path='/manager' element={<Manager />} />
            <Route path='/user' element={<User/>}/>
            <Route path='/managerdashboard' element={<ManagerDashboard/>}/>
            <Route path='/userdashboard' element={<UserDashboard/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
