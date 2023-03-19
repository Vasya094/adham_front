import SchoolIcon from "@mui/icons-material/School"
import GroupsIcon from "@mui/icons-material/Groups"
import ContactPageIcon from "@mui/icons-material/ContactPage"

export const leftMenuItems = [
  {
    route: "lessons",
    label: "lessons",
    accessRoles: ["admin", "super_admin", "teacher", "student"],
    icon: SchoolIcon,
  },
  {
    route: "students",
    label: "students",
    accessRoles: ["admin", "super_admin", "teacher"],
    icon: GroupsIcon,
  },
  {
    route: "teachers",
    label: "teachers",
    accessRoles: ["admin", "super_admin", "teacher"],
    icon: ContactPageIcon,
  },
]
