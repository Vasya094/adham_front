import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { Link, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { login, reset, selectLoginedUser } from "../features/auth/authSlice"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../app/store"
import { ChangeEvent, useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function Login() {
  const { t } = useTranslation()
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { email, password } = formData

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(
      login({
        email,
        password,
      })
    )
  }

  return (
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
          {t("signIn")}
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {t("emailAddress")}
          <TextField
            value={email}
            margin='normal'
            required
            fullWidth
            id='email'
            name='email'
            autoComplete='email'
            onChange={onChange}
          />
          {t("password")}
          <TextField
            value={password}
            margin='normal'
            required
            fullWidth
            name='password'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={onChange}
          />
          <Button
            type='submit'
            fullWidth
            color='secondary'
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            {t("signIn")}
          </Button>
          <Grid container>
            <Grid item>
              <Link to='/registration' style={{ textDecoration: "none" }}>
                <Typography color='primary' variant='button' display='block'>
                  {t("dontHaveAccountSignUp")}
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
