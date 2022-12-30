import { useState, useEffect, ChangeEvent } from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { lessonsColumns } from "../helpers/tablesConfigs"
import {
  getListOfLessons,
  selectLessons,
} from "../features/lessons/lessonsSlice"
import { useTranslation } from "react-i18next"
import LessonTableRow from "./LessonTableRow"
import { NotificationContainer, NotificationManager } from "react-notifications"

interface Data {
  name: string
  code: string
  population: number
  size: number
  density: number
}

export default function LessonsTable() {
  const { t } = useTranslation()

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const lessons = useAppSelector(selectLessons)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getListOfLessons())
  }, [])

  useEffect(() => {
    if (lessons.isError) {
      NotificationManager.error(t(lessons.message))
    }
  }, [lessons])

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <>
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {lessonsColumns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ top: 57, minWidth: column.minWidth }}
                  >
                    {t(column.label)}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {lessons.list.map((lesson) => {
                return (
                  <TableRow key={lesson._id}>
                    <LessonTableRow lesson={lesson} />
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={lessons.list.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  )
}
