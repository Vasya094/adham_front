import { Column } from "../interfaces"

export const lessonsColumns: Column[] = [
  { id: "teacher", label: "teacher" },
  { id: "student", label: "student" },
  { id: "date", label: "date" },
  { id: "time", label: "time" },
]

export const usersColumns: Column[] = [
  { id: "fullName", label: "fullName" },
  { id: "gender", label: "gender" },
  { id: "countryResidence", label: "countryResidence" },
  { id: "birthDate", label: "birthDate" },
  { id: "phoneNumber", label: "phoneNumber" },
]
