import { Box } from "@mui/system"
import { useEffect } from "react"
import { useAppDispatch } from "../app/hooks"
import StudentsTable from "../components/StudentsTable"
import { setFilterRole } from "../features/users/usersSlice"

function Students() {
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(setFilterRole("students"))
  // })

  return (
    <>
      <Box
        sx={{
          m: 1,
        }}
      >
        <div>{/* <StudentsHeader /> */}</div>
        <StudentsTable />
      </Box>
    </>
  )
}

export default Students
