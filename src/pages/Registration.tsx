import { useState, useEffect, FormEvent } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import {
  register,
  reset,
  selectLoginedUser,
} from "../features/auth/authSlice"
import CircularProgress from "@mui/material/CircularProgress"
import { ChangeEvent } from "react"
import { UserRegistrationData } from "../interfaces/User"
import { AppDispatch } from "../app/store"
import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"

export default function Registration() {
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  const { firstName, lastName, email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const { user, isLoading, isError, isSuccess, message } =
    useSelector(selectLoginedUser)

  useEffect(() => {
    // if (isError) {
    //   toast.error(message)
    // }
    if (isSuccess || user) {
      navigate("/")
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const userData: UserRegistrationData = {
      firstName,
      lastName,
      email,
      password,
    }

    dispatch(register(userData))
  }

  if (isLoading) {
    ;<CircularProgress color='inherit' />
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
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
      </Container>
    </ThemeProvider>
  )
}
