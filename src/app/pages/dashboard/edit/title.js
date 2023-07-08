import React from "react"
import Styles from "./style"
import axios from "axios"
import { useSelector } from "react-redux"
import { TourAddAction } from "../../../reducToolkit/editTour"

import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"

import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Save"
import Stack from "@mui/material/Stack"

const Title = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const addTour = useSelector((state) => state.addTour.addTour)

  const { id } = useParams()

  const ID = Math.floor(Math.random() * 100) + 1

  const initialState = addTour
    ? {
        id: ID,
        imagewebp: "",
        imagejpeg: "",
        alt: "",
        link: "",
        location: "",
        duration: "",
        name: "",
        price: "",
      }
    : { name: "" }

  const [values, setValues] = useState(initialState)

  const [data, setData] = useState([])

  useEffect(() => {
    if (!addTour) {
      axios
        .get("http://localhost:3000/tourList/" + id)
        .then((res) => {
          setValues({ ...res.data, name: res.data.name })
        })
        .catch((err) => console.log(err))
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (addTour) {
      axios
        .post("http://localhost:3000/tourList", values)
        .then((res) => {
          navigate("/overview")
          dispatch(TourAddAction.addTour(false))
        })
        .catch((err) => console.log(err))
    } else {
      axios
        .put("http://localhost:3000/tourList/" + id, values)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
  }

  // useEffect(() => {
  //   setTitle(data.name)
  // }
  // useEffect(() => {
  //   dispatch(editTourAction.title(title))
  // }
  return (
    <>
      <div style={Styles.ehNvyi}>
        <form onSubmit={handleSubmit}>
          <div>
            <div style={Styles.iAWZCU}>
              <h1 style={Styles.titleHeader}>
                Give your experience a short but descriptive name
              </h1>
            </div>
            <div
              style={{
                textAlign: "center",
                marginBottom: "40px",
                height: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  color: "#999999",
                  marginBottom: "0px",
                }}
              >
                {" "}
                We recommend using simple language, keep it less than 80
                characters, mention what and where the experience is
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <input
                type='text'
                name=''
                id=''
                value={values.name}
                style={Styles.inputTitle}
                placeholder='Title...'
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
          </div>

          <div style={{ marginTop: "5%" }}>
            <div style={{ margin: "1%" }}>
              <Stack direction='row'>
                <Button
                  type='submit'
                  variant='contained'
                  endIcon={<SendIcon />}
                  style={{ margin: "auto" }}
                >
                  {addTour ? "Add" : "Update"}
                </Button>
              </Stack>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Title
