import { selectLoginedUser } from "../features/auth/authSlice"
import CircularProgress from "@mui/material/CircularProgress"
import Container from "@mui/material/Container"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"
import { useAppSelector } from "../app/hooks"
import RegistrationForm from "../components/RegistrationForm"
import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"

export default function Registration() {
  const { isLoading } = useAppSelector(selectLoginedUser)

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          height: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        component='main'
        maxWidth='xs'
      >
        <CssBaseline />
        {!isLoading ? (
          <RegistrationForm />
        ) : (
          <Box>
            <CircularProgress />
          </Box>
        )}
      </Container>
    </ThemeProvider>
  )
}
