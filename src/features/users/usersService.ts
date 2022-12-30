import { StandartResponse } from "../../interfaces"
import { LessonInList } from "../../interfaces/Lesson"
import { UserCreateData, UserInfoInStore } from "../../interfaces/User"
import api from "../../services/api"

const filterByName = async (
  name: string,
  role: string = "student"
): Promise<StandartResponse<LessonInList>> => {
  const response = await api.get(`/user-short?name=${name}&role=${role}`)
  return response.data.data.map((user: UserInfoInStore) => ({
    value: user._id,
    label: `${user.firstName} ${user.lastName}`,
  }))
}

const create = async (newUserData: UserCreateData) => {
  const response = await api.post("/users", newUserData)

  return response.data
}

const getList = async ({
  page,
  role,
}: {
  page: number
  role: string
}): Promise<StandartResponse<UserInfoInStore>> => {
  const response = await api.get(`/users?page=${page}&role=${role}`)

  return response.data
}

const UsersService = {
  filterByName,
  create,
  getList,
}

export default UsersService
