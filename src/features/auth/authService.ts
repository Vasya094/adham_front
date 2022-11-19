import axios from "axios"
import { UserRegistrationData } from "../../interfaces/User"
import api from "../../services/api"

const API_URL = "/"

// Register user
const register = async (userData: UserRegistrationData) => {
  const response = await api.post("/signup", userData)

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.user))
  }

  return response.data.user
}

// Login user
const login = async (userData: UserRegistrationData) => {
  const response = await axios.post(API_URL + "login", userData)

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem("user")
}

const authService = {
  register,
  logout,
  login,
}

export default authService
