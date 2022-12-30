import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { IAction } from "../../interfaces"
import { UsersInitialState } from "../../interfaces/Store"
import { UserCreateData } from "../../interfaces/User"
import UsersService from "./usersService"

const initialState: UsersInitialState = {
  list: [],
  page: 1,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  selectedRole: "",
}

export const createUser = createAsyncThunk(
  "users/create",
  async (newUserData: UserCreateData) => {
    const res = await UsersService.create(newUserData)
    return res.data
  }
)

export const getListOfUsers = createAsyncThunk(
  "users/retrieve",
  async (role: string, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState
      const payload = {
        page: state.users.page,
        role,
      }
      const res = await UsersService.getList(payload)
      return res.data
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return rejectWithValue(message as string)
    }
  }
)

// export const updateTutorial = createAsyncThunk(
//   "tutorials/update",
//   async ({ id, data }) => {
//     const res = await TutorialDataService.update(id, data);
//     return res.data;
//   }
// );

// export const deleteTutorial = createAsyncThunk(
//   "tutorials/delete",
//   async ({ id }) => {
//     await TutorialDataService.delete(id);
//     return { id };
//   }
// );

// export const findTutorialsByTitle = createAsyncThunk(
//   "tutorials/findByTitle",
//   async ({ title }) => {
//     const res = await TutorialDataService.findByTitle(title);
//     return res.data;
//   }
// );

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.list = []
      state.page = 1
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as string
      })
      .addCase(getListOfUsers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getListOfUsers.fulfilled, (state, action: IAction) => {
        state.isLoading = false
        state.isSuccess = true
        state.list = action.payload
      })
      .addCase(getListOfUsers.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as string
      })
  },
})

export const selectUsers = (state: RootState) => state.users

export const { reset } = usersSlice.actions
export default usersSlice.reducer
