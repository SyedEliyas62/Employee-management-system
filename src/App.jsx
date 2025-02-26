import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/DashBoard/EmployeeDashBoard'
import AdminDashBoard from './components/DashBoard/AdminDashBoard'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  const[user, setUser] =useState(null)
  const authData = useContext(AuthContext)
  

  const handleLogin = (email, pasword)=>{
    if(email == 'admin@me.com' && pasword == '123'){
      setUser('admin');
  
    } else if ( authData && authData.employees.find((e)=> email == e.email && e.pasword == pasword) ){
      setUser('employee')
    
    }
    else{
      alert("Invalid")
    }

  }
 
  

 
  return (
    <div>
      {!user ? <Login  handleLogin={handleLogin}/> :''}
      {user == 'admin' ? <EmployeeDashBoard/> :<AdminDashBoard/>}

    </div>
  )
}

export default App