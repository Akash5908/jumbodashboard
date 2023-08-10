import React, { useEffect, useState } from "react"
import Headline from "./headline"
import Styles from "./style"

import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Save"
import Stack from "@mui/material/Stack"

import axios from "axios"
import { use } from "i18next"
import { useParams } from "react-router-dom"

const Tagline = () => {
  const [value, setValue] = useState("")

  const { id } = useParams()

  useEffect(() => {
    axios.get("http://localhost:3000/tourlist/" + id).then((res) => {
      setValue({ ...res.data, tagline: res.data.tagline })
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .put("http://localhost:3000/tourlist/" + id, { value })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  return (
    <>
      <form onSubmit={handleSubmit} style={Styles.inputContainerForm}>
        <Headline
          head={"Tagline To define the Tours"}
          subHead={
            "We recommend that you add at least 50 words to define your Tour"
          }
        />
        <div>
          <label
            htmlFor='shortDescriptionInput'
            style={Styles.inputContainerLabel}
          >
            Tagline:
            <input
              style={Styles.inputTitle}
              type='text'
              id='shortDescriptionInput'
              required
              onChange={(e) => setValue({ ...value, tagline: e.target.value })}
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
    </>
  )
}

export default Tagline
