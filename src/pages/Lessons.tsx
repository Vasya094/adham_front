import { Box } from "@mui/system"
import LessonsHeader from "../components/LessonsHeader"
import LessonsTable from "../components/LessonsTable"

function Lessons() {
  return (
    <>
      <Box
        sx={{
          m: 1,
        }}
      >
        <div>
          <LessonsHeader />
        </div>
        <LessonsTable />
      </Box>
    </>
  )
}

export default Lessons
