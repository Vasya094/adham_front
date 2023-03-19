// import { useState } from "react"
// import Stack from "@mui/material/Stack"
// import TextField from "@mui/material/TextField"
// import { TimePicker } from "@mui/x-date-pickers/TimePicker"
// import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker"
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
// import AsyncSelect from "react-select/async"
import UsersService from "../features/users/usersService"
// import { LocalizationProvider } from "@mui/x-date-pickers"
// import { Button } from "@mui/material"
// import { Option } from "../interfaces"

// type Place = {
//   label?: string;
//   value?: string;
// }

// const loadTeachers = async (
//   inputValue: string,
//   callback: (options: Option[]) => void
// ) => {
//   if (inputValue) {
//     let response = await UsersService.filterByName(inputValue, "teacher")
//     let options = response.slice(0, 6)

//     callback(options)
//   }
// }

// const loadStudents = async (
//   inputValue: string,
//   callback: (options: Place[]) => void
// ) => {
//   if (inputValue) {
//     let response = await UsersService.filterByName(inputValue)
//     let options = response.slice(0, 6)

//     callback(options)
//   }
// }

// export default function LessonForm() {
//   const [value, setValue] = useState(new Date())
//   const [selected, setSelected] = useState([])

//   const handleChange = (newValue) => {
//     setValue(newValue)
//   }

//   const onChange = (selectedOptions: OnChangeValue<ColourOption, true>) =>
//     setSelected(selectedOptions)

//   const handleClose = () => {
//     console.log(selected)
//     console.log(value.toString())
//   }

//   return (
//     <Stack spacing={3}>
//       <AsyncSelect
//         isMulti
//         cacheOptions
//         value={selected}
//         loadOptions={loadTeachers}
//         defaultOptions={true}
//       />
//       <AsyncSelect
//         isMulti
//         cacheOptions
//         loadOptions={loadStudents}
//         defaultOptions
//       />
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <MobileDatePicker
//           label='Date desktop'
//           inputFormat='MM/DD/YYYY'
//           value={value}
//           onChange={handleChange}
//           renderInput={(params) => <TextField {...params} />}
//         />
//         <TimePicker
//           label='Time'
//           value={value}
//           onChange={handleChange}
//           renderInput={(params) => <TextField {...params} />}
//         />
//       </LocalizationProvider>
//       <Button onClick={handleClose}>Subscribe</Button>
//     </Stack>
//   )
// }

import { useState, FunctionComponent } from "react"
import AsyncSelect from "react-select/async"
import makeAnimated from "react-select/animated"
import { Box } from "@mui/system"
import { t } from "i18next"
import { useTranslation } from "react-i18next"

const LessonForm: FunctionComponent = () => {
  const { t } = useTranslation()
  const [query, setQuery] = useState("")

  const handleChange = (option: any) => {
    console.log("im in handleChange!")
    console.log(option)
    debugger
  }

  const loadUsersAsOptions = async (inputValue: string, type: string): Promise<any> => {
    return UsersService.filterByName(inputValue, type)
  }

  //get animated components wrapper
  const animatedComponents = makeAnimated()

  return (
    <Box className='location-input-container'>
      <div className='location-input'>
        <AsyncSelect
          isMulti={true}
          components={animatedComponents}
          cacheOptions
          placeholder={t("chooseTeacher")}
          onChange={(option) => handleChange(option)}
          closeMenuOnSelect={true}
          noOptionsMessage={() => t("noMatchFound")}
          loadOptions={(val) => loadUsersAsOptions(val, 'teacher')}
        />
        <AsyncSelect
          isMulti={true}
          components={animatedComponents}
          cacheOptions
          placeholder={t("chooseStudent")}
          onChange={(option) => handleChange(option)}
          closeMenuOnSelect={true}
          noOptionsMessage={() => t("noMatchFound")}
          loadOptions={(val) => loadUsersAsOptions(val, 'student')}
        />
      </div>
    </Box>
  )
}

export default LessonForm
