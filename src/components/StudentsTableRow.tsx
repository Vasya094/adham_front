import TableCell from "@mui/material/TableCell"
import DoneOutlineTwoToneIcon from "@mui/icons-material/DoneOutlineTwoTone"
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone"
import { UserInfoInStore } from "../interfaces/User"
import { useTranslation } from "react-i18next"

const StudentsTableRow = ({ user }: { user: UserInfoInStore }) => {
  const { t } = useTranslation()

  const formatDate = (date: Date | string) => {
    const dateDate = new Date(date)
    return dateDate.toLocaleDateString("en-US")
  }

  return (
    <>
      <TableCell>{`${user.firstName} ${user.lastName}`}</TableCell>
      <TableCell>{t(user.gender)}</TableCell>
      <TableCell>{user.livingCountry}</TableCell>
      <TableCell>{user.birthDate ? formatDate(user.birthDate) : "-"}</TableCell>
      <TableCell>{user.phoneNumber || "-"}</TableCell>
    </>
  )
}

export default StudentsTableRow
