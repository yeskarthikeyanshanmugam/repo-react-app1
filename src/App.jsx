import { useState } from 'react'
import './App.css'
import { AuthProvider } from './AuthContext';
import { Navbar } from './Navbar';

function App() {
 const [user, setUser] =  useState({name: "Karthik", role:"Developer"});

  return (
    <AuthProvider>
    <Navbar/>
    </AuthProvider>
  )
}

export default App
