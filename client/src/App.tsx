import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { SignIn } from './pages/sign-in'
import { SignUp } from './pages/sign-up'
import { ForgotPassword } from './pages/forgot-password'
import { Dashboard } from './pages/dashboard'
import './App.css'

function App() {
  const [isAuthenticated] = useState(false)

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Dashboard /> : <SignIn />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
