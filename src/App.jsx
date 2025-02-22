import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Employeeanduser from './Components/EmployeeandUser/Employeeanduser'
import Manager from './Components/Manager/Manager'
import ManagerDashboard from './Components/Dashboard/ManagerDashboard'
import User from './Components/User/User'
import Home from './Components/Home/Home'
import Aboutus from './Components/AboutUs/Aboutus'
import Complaints from './Components/Complaints/Complaints'
import Ourservices from './Components/Services/Ourservices'

function App() {

  return (
    <>
      <div className='flex flex-col h-[100vh]'>
        <Navbar />
        <div className='flex-grow'>
          <Routes>
            <Route path='/employeeanduser' element={<Employeeanduser />} />
            <Route path='/manager' element={<Manager />} />
            <Route path='/user' element={<User/>}/>
            <Route path='/managerdashboard' element={<ManagerDashboard/>}/>
            <Route path='/complaints' element={<Complaints/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path="/aboutus" element={<Aboutus/>}/>
            <Route path="/services" element={<Ourservices/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
