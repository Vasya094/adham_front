export type Roles = Array<
  "user" | "admin" | "super_admin" | "teacher" | "student"
>

export interface UserCreateData {
  firstName: string
  lastName: string
  email: string
  password: string
  roles?: Roles
  birthDate: Date | string
  gender: "male" | "female"
  livingCountry: string
  phoneNumber: string
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
  gender: string
  phoneNumber: string
  livingCountry: string
  roles?: string[]
  birthDate: Date | string
}
