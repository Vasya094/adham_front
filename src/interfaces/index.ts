export interface Column {
  id: string
  label: string
  minWidth?: number
  align?: "right"
  format?: (value: number) => string
}

export interface StandartResponse<T = any> {
  data: T
  message: string
}

export interface IAction {
  type: string
  payload?: any
}
export interface Option {
  label: string
  value: string
}

export interface LeftMenuProps {
  hideMenu: () => void
  userRoles?: string[]
}
