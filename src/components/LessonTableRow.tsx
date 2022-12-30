import TableCell from "@mui/material/TableCell"
import { LessonInList } from "../interfaces/Lesson"
import DoneOutlineTwoToneIcon from "@mui/icons-material/DoneOutlineTwoTone"
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone"

const LessonTableRow = ({ lesson }: { lesson: LessonInList }) => {
  return (
    <>
      <TableCell>{`${lesson.teacher.firstName} ${lesson.teacher.lastName}`}</TableCell>
      <TableCell>{`${lesson.student.firstName} ${lesson.student.lastName}`}</TableCell>
      <TableCell>{lesson.date}</TableCell>
      <TableCell>{lesson.time}</TableCell>
    </>
  )
}

export default LessonTableRow
