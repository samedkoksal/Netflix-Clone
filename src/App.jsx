import React, {useEffect} from 'react'
import './index.css'
import HomePage from './pages/HomePage'
import { Routes,Route,useNavigate} from 'react-router-dom'
import Login from './pages/Login'
import User from './pages/User'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './firebase'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    
    onAuthStateChanged(auth, async (user) => {
      if(user){
        console.log("Logged In");
        navigate('/');
      } else {
        console.log("Logged Out");
        navigate('/login')
      }
    })
  },[])


  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/user/:id' element={<User/>}/>
      </Routes>

    </div>
  )
}

export default App