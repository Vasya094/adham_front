import { useState } from "react"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import { TimePicker } from "@mui/x-date-pickers/TimePicker"
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import AsyncSelect from "react-select/async"
import UsersService from "../features/users/usersService"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { Button } from "@mui/material"

const loadTeachers = (inputValue: string) => {
  return UsersService.filterByName(inputValue, "teacher")
}
const loadStudents = (inputValue: string) => {
  return UsersService.filterByName(inputValue)
}

export default function LessonForm() {
  const [value, setValue] = useState(new Date())
  const [selected, setSelected] = useState([])

  // const handleChange = (newValue) => {
  //   setValue(newValue)
  // }

  // const onChange = (selectedOptions: OnChangeValue<ColourOption, true>) =>
  //   setSelected(selectedOptions)

  const handleClose = () => {
      console.log(selected)
      console.log(value.toString())
  }

  return (
    <Stack spacing={3}>
      {/* <AsyncSelect
        isMulti
        cacheOptions
        value={selected}
        onChange={onChange}
        loadOptions={loadTeachers}
        defaultOptions
      />
      <AsyncSelect
        isMulti
        cacheOptions
        loadOptions={loadStudents}
        defaultOptions
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          label='Date desktop'
          inputFormat='MM/DD/YYYY'
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label='Time'
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider> */}
      <Button onClick={handleClose}>Subscribe</Button>
    </Stack>
  )
}
