import * as React from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import AccountCircle from "@mui/icons-material/AccountCircle"
import Switch from "@mui/material/Switch"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormGroup from "@mui/material/FormGroup"
import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"
import { useAppSelector } from "../app/hooks"
import { selectLoginedUser } from "../features/auth/authSlice"
import { Button } from "@mui/material"

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const { t } = useTranslation()

  const loginedUser = useAppSelector(selectLoginedUser)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked)
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link to='/' style={{ textDecoration: "none" }}>
              <Button style={{ color: "white" }}>{t("mainPage")}</Button>
            </Link>
          </Typography>
          <div>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
            {loginedUser ? (
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            ) : (
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>
                  <Link to='/login' style={{ textDecoration: "none" }}>
                    <Typography
                      color='primary'
                      variant='button'
                      display='block'
                    >
                      {t("login")}
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to='/registration' style={{ textDecoration: "none" }}>
                    <Typography
                      color='primary'
                      variant='button'
                      display='block'
                    >
                      {t("registration")}
                    </Typography>
                  </Link>
                </MenuItem>
              </Menu>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
