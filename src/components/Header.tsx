import { ChangeEvent, MouseEvent, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link, useNavigate } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import AccountCircle from "@mui/icons-material/AccountCircle"
import FormGroup from "@mui/material/FormGroup"
import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { logout, reset, selectLoginedUser } from "../features/auth/authSlice"
import { Button, Drawer } from "@mui/material"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../app/store"
import LeftMenu from "./LeftMenu"

export default function MenuAppBar() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [auth, setAuth] = useState(true)
  const [leftMenu, setLeftMenu] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const loginedUser = useAppSelector(selectLoginedUser)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked)
  }

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const onLogout = () => {
    navigate("/login")
    dispatch(logout())
    dispatch(reset())
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          {loginedUser && loginedUser.user && (
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              onClick={() => setLeftMenu(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link to='/' style={{ textDecoration: "none" }}>
              <Button style={{ color: "white" }}>{t("mainPage")}</Button>
            </Link>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              p: 1,
              m: 1,
              alignItems: "center",
              borderRadius: 1,
            }}
          >
            {loginedUser && loginedUser.user && (
              <Box>
                <Button key={loginedUser?.user._id} sx={{ color: "#fff" }}>
                  {loginedUser?.user.firstName}
                </Button>
              </Box>
            )}
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
            {loginedUser && loginedUser.user ? (
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>{t("myAccount")}</MenuItem>
                <MenuItem onClick={onLogout}>{t("logOut")}</MenuItem>
              </Menu>
            ) : (
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link to='/login' style={{ textDecoration: "none" }}>
                  <MenuItem>
                    <Typography sx={{ color: "#000000" }} display='block'>
                      {t("login")}
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to='/registration' style={{ textDecoration: "none" }}>
                  <MenuItem>
                    <Typography sx={{ color: "#000000" }} display='block'>
                      {t("registration")}
                    </Typography>
                  </MenuItem>
                </Link>
              </Menu>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor='left' open={leftMenu} onClose={() => setLeftMenu(false)}>
        <LeftMenu hideMenu={() => setLeftMenu(false)} />
      </Drawer>
    </Box>
  )
}
