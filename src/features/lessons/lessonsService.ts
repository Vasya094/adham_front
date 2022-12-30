import { StandartResponse } from "../../interfaces"
import { LessonInList } from "../../interfaces/Lesson"
import api from "../../services/api"

const create = async (newLessonData) => {
  const response = await api.post("/lessons", newLessonData)

  return response.data
}

const getList = async (
  page: number
): Promise<StandartResponse<LessonInList>> => {
  const response = await api.get(`/lessons?page=${page}`)

  return response.data
}

const LessonsService = {
  create,
  getList,
}

export default LessonsService
