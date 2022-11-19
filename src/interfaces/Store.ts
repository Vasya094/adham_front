import { UserInfoInStore } from "./User";

export interface InitialState  {
    user: UserInfoInStore | null,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: string,
  }
  