import {
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import SchoolIcon from "@mui/icons-material/School"
import GroupIcon from "@mui/icons-material/Group"
import GroupsIcon from "@mui/icons-material/Groups"
import ContactPageIcon from "@mui/icons-material/ContactPage"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router"
import { LeftMenuProps } from "../interfaces"
import { leftMenuItems } from "../helpers/leftMenuConfig"
import React, { createElement } from "react"

const LeftMenu = ({ hideMenu, userRoles }: LeftMenuProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const goTo = (route: string) => {
    navigate(route)
    hideMenu()
  }
  return (
    <List>
      {leftMenuItems.map(
        (item) =>
          userRoles &&
          item.accessRoles.some((ai) => userRoles.includes(ai)) && (
            <ListItem onClick={() => goTo(item.route)}>
              <ListItemButton>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={t(item.label)} />
              </ListItemButton>
            </ListItem>
          )
      )}
    </List>
  )
}

export default LeftMenu
