import React from "react"
import Styles from "./style"
import Headline from "./headline"

import axios from "axios"
import { useParams } from "react-router"

import { useSelector } from "react-redux"
import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Save"
import Stack from "@mui/material/Stack"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Duration = () => {
  const [data, setData] = React.useState([])
  const addTour = useSelector((state) => state.addTour.addTour)
  const [values, setValues] = React.useState({
    duration: "",
    time: 0,
  })
  const { id } = useParams()
  React.useEffect(() => {
    axios
      .get("https://jumbo2-0.vercel.app/tourlist/" + id)
      .then((res) => {
        setValues({
          ...res.data,
          duration: res.data.duration,
          time: res.data.time,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log(values)
  const { duration } = values
  const { time } = values

  // const [days, hours, minutes] = duration ? duration.split(" ") : ["", "", ""]

  // const dayInt = parseInt(days)
  // const hourInt = parseInt(hours)
  // const minInt = parseInt(minutes)

  const handleChange = (e) => {
    e.preventDefault()
    axios
      .put("https://jumbo2-0.vercel.app/tourlist/" + id, values)
      .then((res) => {
        toast.success("Status Updated successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        })
        console.log("Duration Updated")
      })
      .catch((err) => {
        toast.error("Error updating status!", {
          position: toast.POSITION.TOP_RIGHT,
        })
        console.log(err)
      })
  }

  console.log(data)
  return (
    <>
         <Headline
        head={"What is the total duration of your experience?"}
        subHead={
          "Inform your travellers about the duration of your experience so they can plan their time accordingly"
        }
      />
      <div style={Styles.ehNvyi}>
        <form onSubmit={handleChange}>
        
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              width: "100%",
                
              }}
            >
            
              <div styles={Styles.inputContainer}>
                <label style={Styles.inputContainerLabel} htmlFor='hours'>
                  Hours:
                </label>
                <input
                  style={Styles.inputContainerInput}
                  type='number'
                  id='hours'
                  value={duration}
                  min='0'
                max='23'
                
                  onChange={(e) =>
                    setValues({ ...values, duration: e.target.value })
                  }
                />
              </div>
              
            </div>
            <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "1em",
          }}
        >
          <div style={{ margin: "auto" }}>
            <label style={Styles.inputContainerLabel} htmlFor='hours'>
              Start Time:
            </label>
            <input
              style={ {width: "90px",
              height: "35px",
              borderRadius: "11px",
              marginRight: "5px",
              border: "1px solid #ccc",
              paddingLeft:"10px"}}
              type='time'
              value={time}
              onChange={(e) => setValues({ ...values, time: e.target.value })}
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
      {/* <ToastContainer /> */}

    </>
  )
}

export default Duration
