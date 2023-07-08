import React from "react"
import Tabs from "../features/tabs"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

import { TourAddAction } from "../../../reducToolkit/editTour"
import { useDispatch } from "react-redux"

const TourAdd = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  useEffect(() => {
    dispatch(TourAddAction.tourAdd(true))
  }, [])
  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:3000/tourList")
  //       .then((res) => {
  //         setData(res.data)
  //       })
  //       .catch((err) => console.log(err))
  //   }, [])

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
