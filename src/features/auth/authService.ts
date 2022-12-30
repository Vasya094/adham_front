import { UserLoginData, UserCreateData } from "../../interfaces/User"
import api from "../../services/api"

// Register user
const register = async (userData: UserCreateData) => {
  const response = await api.post("/signup", userData)

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.user))
  }

  return response.data.user
}

// Login user
const login = async (userData: UserLoginData) => {
  const response = await api.post("/login", userData)

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.data))
  }

  return response.data.data
}

// Logout user
const logout = async () => {
  localStorage.removeItem("user")
  await api.post("/logout")
}

const authService = {
  register,
  logout,
  login,
}

export default authService
