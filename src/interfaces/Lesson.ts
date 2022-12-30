export interface ShortUserInLesson {
  _id: string
  firstName: string
  lastName: string
}

export interface LessonInList {
  _id: string
  teacher: ShortUserInLesson
  student: ShortUserInLesson
  date: string
  time: string
  paid: boolean
  createdAt: string
  updatedAt: string
}
