import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material"
import { Box } from "@mui/system"
import { t } from "i18next"
import React from "react"
import LessonForm from "./LessonForm"

const LessonsHeader = () => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <div>
        <div></div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
        >
          <div></div>
          <Button variant='outlined' onClick={handleClickOpen}>
            {t("newLesson")}
          </Button>
        </Box>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <LessonForm  />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default LessonsHeader
