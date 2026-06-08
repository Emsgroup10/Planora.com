import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LoginComp from './components/LoginComp'
import HomeComp from './components/HomeComp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import AdminDashboard from './components/AdminDashboard'
import UserDashboard from './components/userDashboard'
import LogoutComp from './components/LogoutComp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComp/>}>
          <Route path="login" element={<LoginComp/>}/>
          <Route path="register" element={<h1> Register Form</h1>}/>
          </Route>

          <Route path="/user" element={<ProtectedRoute role={2}>
            <UserDashboard/>
           </ProtectedRoute>}/>

          <Route path="/admin" element={<ProtectedRoute role={1}>
            <AdminDashboard/>
           </ProtectedRoute>}/>
           <Route path="users" element={<h1>Users List</h1>}/>
           <Route path="reports" element={<h1>Reports List</h1>}/>
           <Route path="logout" element={<LogoutComp/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
