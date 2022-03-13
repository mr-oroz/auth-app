import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import './App.css'
import Register from './components/register';
import Login from './components/login';
import Cookies from 'js-cookie';
import AuthService from './axios/auth-service';
const App = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    login()
  }, [])
  const login = async () => {
    await AuthService.getUser().then(data => {
      console.log(data)
      const newItem = {user: data.data.firstName}
      setUser(newItem)
      setLoading(true)
    })
  }
  const logout = () => {
    Cookies.remove("token-swagger");
    setUser({})
  }
  return (
    <div className='app'>
      <Header loading={loading} user={user} logout={logout} />
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/auth/register' element={<Register />} />
          <Route exact path='/auth/login' element={<Login login={login} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;