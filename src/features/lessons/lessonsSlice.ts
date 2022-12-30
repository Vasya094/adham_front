import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { IAction } from "../../interfaces"
import { LessonInList } from "../../interfaces/Lesson"
import { LessonsInitialState } from "../../interfaces/Store"
import LessonsService from "./lessonsService"

const initialState: LessonsInitialState = {
  list: [],
  page: 1,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

export const createLesson = createAsyncThunk(
  "lessons/create",
  async (newLessonData) => {
    const res = await LessonsService.create(newLessonData)
    return res.data
  }
)

export const getListOfLessons = createAsyncThunk(
  "lessons/retrieve",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState
      const res = await LessonsService.getList(state.lessons.page)
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

const lessonsSlice = createSlice({
  name: "lessons",
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
      .addCase(createLesson.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createLesson.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createLesson.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as string
      })
      .addCase(getListOfLessons.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getListOfLessons.fulfilled, (state, action: IAction) => {
        state.isLoading = false
        state.isSuccess = true
        state.list = action.payload
      })
      .addCase(getListOfLessons.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as string
      })
  },
})

export const selectLessons = (state: RootState) => state.lessons

export const { reset } = lessonsSlice.actions
export default lessonsSlice.reducer
