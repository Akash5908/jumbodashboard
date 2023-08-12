import React from "react"
import Tabs from "../features/tabs"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

import { TourAddAction } from "../../../reducToolkit/editTour"
import { useDispatch } from "react-redux"
import { addTour } from "app/redux/actions/contactsApp"
import { tourAdd } from "app/redux/actions/contactsApp"
const TourAdd = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  useEffect(() => {
    dispatch(tourAdd(true))
  }, [])
    useEffect(() => {
      axios
        .get("https://jumbo2-0.vercel.app/tourList")
        .then((res) => {
          setData(res.data)
        })
        .catch((err) => console.log(err))
    }, [])

  const id = data.length + 1
  const [tour, setTour] = useState({
    id: id,
    name: "",
    price: "",
    duration: "",
    description: "",
    image: "",
  })
  return (
    <>
      <h1>Tour Add</h1>

      <Tabs />
    </>
  )
}

export default TourAdd
