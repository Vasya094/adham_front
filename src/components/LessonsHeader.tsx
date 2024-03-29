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
import { useTranslation } from "react-i18next"
import LessonForm from "./LessonForm"

const LessonsHeader = () => {
  const { t } = useTranslation()
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
      <Dialog
        PaperProps={{
          style: { minHeight: "30rem" },
        }}
        fullWidth
        maxWidth='md'
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{t("lesson")}</DialogTitle>
        <DialogContent>
          <LessonForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default LessonsHeader
