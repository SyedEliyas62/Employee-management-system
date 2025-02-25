import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/DashBoard/EmployeeDashBoard'
import AdminDashBoard from './components/DashBoard/AdminDashBoard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

  useEffect(() =>{
    setLocalStorage()
    getLocalStorage()
  },[])
  return (
    <div>
      <Login/>
     {/*<EmployeeDashBoard/>*/}
     {/*<AdminDashBoard/> */}

    </div>
  )
}

export default App