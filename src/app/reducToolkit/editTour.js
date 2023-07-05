import TourList from "../pages/Data/data"
import { createSlice } from "@reduxjs/toolkit"
import { createStore } from "redux"

let initialState = TourList

const editTourSlice = createSlice({
  name: "editTour",
  initialState,
  reducers: {
    title() {
      console.log("React here")
    },
  },
})

export const editTourAction = editTourSlice.actions

export default editTourSlice.reducer
