import TourList from "../pages/Data/data"
import { createSlice } from "@reduxjs/toolkit"
import { createStore } from "redux"

const addTourSlice = createSlice({
  name: "addTour",
  initialState: { addTour: false },
  reducers: {
    tourAdd(state, action) {
      state.addTour = action.payload
      console.log(state.addTour, "reducer")
    },
  },
})

export const TourAddAction = addTourSlice.actions

export default addTourSlice.reducer
