import { green, amber, indigo } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: green,
    secondary: amber,
    info: indigo,
  },
})

export default theme
