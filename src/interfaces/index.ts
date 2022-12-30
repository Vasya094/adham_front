export interface Column {
  id: string
  label: string
  minWidth?: number
  align?: "right"
  format?: (value: number) => string
}

export interface StandartResponse<T = any> {
  data: T;
  message: string;
}

export interface IAction {
  type: string;
  payload?: any;
}