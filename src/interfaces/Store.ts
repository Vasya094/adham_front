import { LessonInList } from "./Lesson"
import { UserInfoInStore } from "./User"

export interface InitialState {
  user: UserInfoInStore | null
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
  message: string
}
export interface LessonsInitialState {
  list: Array<LessonInList>
  page: number
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
  message: string
}
export interface UsersInitialState {
  list: Array<UserInfoInStore>
  page: number
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
  message: string
  selectedRole: string
}
