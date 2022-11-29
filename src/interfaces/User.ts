export interface UserRegistrationData {
  firstName: string
  lastName: string
  email: string
  password: string
}
export interface UserLoginData {
  email: string
  password: string
}

export interface UserInfoInStore {
  _id?: string
  firstName: string
  lastName: string
  email: string
  password: string
}
