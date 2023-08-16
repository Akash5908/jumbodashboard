import React from "react"
import Styles from "./style"
import Headline from "./headline"
import axios from "axios"

import { useParams } from "react-router"
import { useEffect } from "react"
import { useState } from "react"

import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Save"
import Stack from "@mui/material/Stack"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Location = () => {
  const [value, setValue] = React.useState({ location: "" })

  const { id } = useParams()
  useEffect(() => {
    axios
      .get("https://jumbo2-0.vercel.app/tourlist/" + id)
      .then((res) => {
        setValue({ ...res.data, location: res.data.location })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .put("https://jumbo2-0.vercel.app/tourList/" + id, value)
      .then((res) => {
        toast.success("Status Updated successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        })
        console.log(res)
      })
      .catch((err) => {
        toast.error("Error updating status!", {
          position: toast.POSITION.TOP_RIGHT,
        })
        console.log(err)
      })
  }

  return (
    <>
    <Headline
        head={"What is the location of your experience?"}
        subHead={
          "Inform travellers about the city or town where your experience takes place. This will help with filtering and searching online"
        }
      />

      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <label htmlFor='locationInput' style={{ width: "100%" }}>
            Location:
            <input
              type='text'
              id='locationInput'
              value={value.location}
              name=''
              style={Styles.inputTitle}
              placeholder='Enter Location..'
              onChange={(e) => setValue({ ...value, location: e.target.value })}
            />
          </label>
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

      {/* <ToastContainer /> */}
    </>
  )
}

export default Location
