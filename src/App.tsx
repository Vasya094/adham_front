import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import Dashboard from "./pages/Dashboard"
import Header from "./components/Header"
import Registration from "./pages/Registration"
import Login from "./pages/Login"

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
          </Routes>
        </div>
      </Router>
      {/* <ToastContainer /> */}
    </>
  )
}

export default App
