import { green, amber, indigo, red } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: green,
    secondary: amber,
    info: indigo,
    error: red,
  },
})

export default theme
