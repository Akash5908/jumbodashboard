import React from "react"
import Styles from "./style"

import axios from "axios"

import { useParams } from "react-router"
import { useEffect } from "react"
import { useState } from "react"

import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Save"
import Stack from "@mui/material/Stack"

const Location = () => {
  const [value, setValue] = React.useState({ location: "" })

  const { id } = useParams()
  useEffect(() => {
    axios
      .get("http://localhost:3000/tourList/" + id)
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
      .put("http://localhost:3000/tourList/" + id, value)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <div style={Styles.ehNvyi}>
        <form onSubmit={handleSubmit}>
          <div>
            <div style={Styles.iAWZCU}>
              <h1 style={Styles.titleHeader}>
                What is the location of your experience?
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
                Inform travellers about the city or town where your experience
                takes place. This will help with filtering and searching online
              </p>
            </div>
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
                  onChange={(e) =>
                    setValue({ ...value, location: e.target.value })
                  }
                />
              </label>
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
      </div>
    </>
  )
}

export default Location
