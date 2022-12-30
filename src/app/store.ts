import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import lessonsReducer from "../features/lessons/lessonsSlice"
import usersReducer from "../features/users/usersSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    lessons: lessonsReducer,
    users: usersReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
