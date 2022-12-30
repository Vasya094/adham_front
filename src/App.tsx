import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import "react-notifications/lib/notifications.css"
import Dashboard from "./pages/Dashboard"
import Header from "./components/Header"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import Lessons from "./pages/Lessons"
import { Box } from "@mui/system"
import Footer from "./components/Footer"
import { NotificationContainer } from "react-notifications"
import Students from "./pages/Students"

function App() {
  return (
    <>
      <Router>
        <Box sx={{ height: "100vh" }}>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/lessons' element={<Lessons />} />
            <Route path='/students' element={<Students />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
      <NotificationContainer />
    </>
  )
}

export default App
