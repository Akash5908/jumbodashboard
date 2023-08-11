import React from "react"
import Styles from "./style"
import Headline from "./headline"

import axios from "axios"
import { useParams } from "react-router"

import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Save"
import Stack from "@mui/material/Stack"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// import { DemoContainer } from "@mui/x-date-pickers/internals/demo"
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
// import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { useEffect } from "react"
const Status = () => {
  const [selectedDate, setSelectedDate] = React.useState()
  const [values, setValues] = React.useState({
    status: "",
  })

  let reUpdate = false
  let updatedStatus = ""
  const currentDate = new Date()
  const { id } = useParams()

  const [noTourDate, setNoTourDate] = React.useState({})

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/tourList/" + id)
      .then((res) => {
        setValues({ ...res.data, status: res.data.status })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  //   console.log(selectedDate, "selecteddDate")
  const handleChange = (e) => {
    e.preventDefault()
    axios
      .put("http://localhost:3000/tourList/" + id, values)
      .then((res) => {
        toast.success("Status Updated successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        })
        console.log(values, "Status Updated")
      })
      .catch((err) => {
        toast.error("Error updating status!", {
          position: toast.POSITION.TOP_RIGHT,
        })
        console.log(err)
      })
  }

  useEffect(() => {
    if (selectedDate) {
      if (selectedDate > currentDate) {
        updatedStatus = "Active"
      } else if (selectedDate < currentDate) {
        updatedStatus = "Active"
      } else {
        updatedStatus = "inActive"
      }
      if (values.status !== updatedStatus) {
        setValues({ ...values, status: updatedStatus })
      }
    }
  }, [currentDate])

  return (
    <>
      <Headline
        head={"Current the Status of The Tour"}
        subHead={"Change The status of the tour for some certain Days"}
      />

      <form onSubmit={handleChange}>
        <div style={{ marginTop: "5%" }}>
          <div
            style={{
              display: "block",
              justifyContent: "space-around",
              alignItems: "center",
              width: "80%",
              margin: "auto",
            }}
          >
            {/* <div style={{ display: "flex", justifyContent: "center" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label='Choose The Date'
                    onChange={(date) => {
                      setSelectedDate(date)
                      dateSelect()
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div> */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <label htmlFor='locationInput' style={{ width: "90%" }}>
                Current Status:
                <select
                  name=''
                  id=''
                  style={Styles.inputTitle}
                  placeholder='Select...'
                  onChange={(e) =>
                    setValues({ ...values, status: e.target.value })
                  }
                >
                  <option value='Active'>Active</option>
                  <option value='inActive'>inActive</option>
                </select>
              </label>
            </div>
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
                Update
              </Button>
            </Stack>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  )
}

export default Status
