import {
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

const LeftMenu = ({ hideMenu }: { hideMenu: () => void }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const goTo = (route: string) => {
    navigate(route)
    hideMenu()
  }
  return (
    <List>
      <ListItem onClick={() => goTo("/lessons")}>
        <ListItemButton>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary={t("lessons")} />
        </ListItemButton>
      </ListItem>
      <ListItem onClick={() => goTo("/students")}>
        <ListItemButton>
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary={t("students")} />
        </ListItemButton>
      </ListItem>
      <ListItem onClick={() => goTo("/teachers")}>
        <ListItemButton>
          <ListItemIcon>
            <ContactPageIcon />
          </ListItemIcon>
          <ListItemText primary={t("teachers")} />
        </ListItemButton>
      </ListItem>
    </List>
  )
}

export default LeftMenu
