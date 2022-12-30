import { useState, useEffect, FormEvent, ChangeEvent } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import AppRegistrationIcon from "@mui/icons-material/AppRegistration"
import Typography from "@mui/material/Typography"
import { useTranslation } from "react-i18next"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { UserCreateData } from "../interfaces/User"
import { register, selectLoginedUser } from "../features/auth/authSlice"
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers"
import dayjs, { Dayjs } from "dayjs"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
} from "@mui/material"
import { countriesInfo } from "../helpers/countries"

const RegistrationForm = () => {
  const { t } = useTranslation()

  const [formData, setFormData] = useState<UserCreateData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthDate: new Date(),
    gender: "male",
    livingCountry: "EGY",
    phoneNumber: "",
  })

  const {
    firstName,
    lastName,
    email,
    password,
    birthDate,
    gender,
    livingCountry,
    phoneNumber,
  } = formData

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { user, isError, isSuccess, message } =
    useAppSelector(selectLoginedUser)

  useEffect(() => {
    // if (isError) {
    //   toast.error(message)
    // }
    if (isSuccess || user) {
      navigate("/")
    }
  }, [user, isError, isSuccess, message, dispatch])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleChange = (newValue: string | null) => {
    if (newValue)
      setFormData({
        ...formData,
        birthDate: new Date(newValue),
      })
  }

  const selectChange = (e: SelectChangeEvent) => {
    if (e.target.value)
      setFormData({
        ...formData,
        livingCountry: e.target.value,
      })
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const userData: UserCreateData = {
      firstName,
      lastName,
      email,
      password,
      roles: ["user"],
      birthDate,
      gender,
      livingCountry,
      phoneNumber,
    }

    dispatch(register(userData))
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <AppRegistrationIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          {t("registration")}
        </Typography>
        <Box component='form' noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={firstName}
                onChange={onChange}
                autoComplete='given-name'
                name='firstName'
                required
                fullWidth
                id='firstName'
                label={t("firstName")}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={lastName}
                onChange={onChange}
                required
                fullWidth
                id='lastName'
                label={t("lastName")}
                name='lastName'
                autoComplete='family-name'
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <FormControl>
                <FormLabel id='demo-radio-buttons-group-label'>
                  {t("gender")}
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby='demo-radio-buttons-group-label'
                  defaultValue='male'
                  value={gender}
                  name='radio-buttons-group'
                >
                  <FormControlLabel
                    value='male'
                    control={<Radio />}
                    label={t("male")}
                  />
                  <FormControlLabel
                    value='female'
                    control={<Radio />}
                    label={t("female")}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={email}
                onChange={onChange}
                required
                fullWidth
                id='email'
                label={t("emailAddress")}
                name='email'
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DesktopDatePicker
                value={birthDate}
                onChange={handleChange}
                inputFormat='MM/DD/YYYY'
                label={t("birthDate")}
                renderInput={(params) => (
                  <TextField sx={{ width: 1 }} {...params} />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>
                  {t("countryResidence")}
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select-filled'
                  value={livingCountry}
                  label={t("countryResidence")}
                  sx={{ width: 1 }}
                  onChange={selectChange}
                >
                  {Object.entries(countriesInfo).map((inf) => (
                    <MenuItem value={inf[0]}>
                      {t(`countries.${inf[1]}`)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={phoneNumber}
                onChange={onChange}
                required
                fullWidth
                id='phoneNumber'
                label={t("phoneNumber")}
                name='phoneNumber'
                autoComplete='phoneNumber'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={password}
                onChange={onChange}
                required
                fullWidth
                name='password'
                label={t("password")}
                type='password'
                id='password'
                autoComplete='new-password'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            color='secondary'
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            {t("signUp")}
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link to='/login' style={{ textDecoration: "none" }}>
                <Typography color='primary' variant='button' display='block'>
                  {t("alreadyHaveAccountSignin")}
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </LocalizationProvider>
  )
}

export default RegistrationForm
