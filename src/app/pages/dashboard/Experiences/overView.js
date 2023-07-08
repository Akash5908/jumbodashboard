import React, { useState } from "react"
import Box from "@mui/material/Box"
import { Grid, Select } from "@mui/material"
import TextField from "@mui/material/TextField"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import TourTable from "./tourTable"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"

import { TourAddAction } from "../../../reducToolkit/editTour"

const OverView = () => {
  const dispatch = useDispatch()
  const [text, setText] = React.useState("")
  const [status, setStatus] = React.useState("")
  const [tours, setTours] = React.useState([])

  useEffect(() => {
    dispatch(TourAddAction.tourAdd(false))
    axios
      .get("http://localhost:3000/tourList")
      .then((res) => setTours(res.data))
      .catch((err) => console.log(err))
  }, [])

  const handleChange = (event) => {
    setStatus(event.target.value)
  }

  return (
    <div style={{ padding: "0" }}>
      <Box
        component='form'
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
          //   py: 4,
          //   pb: 1,
        }}
        noValidate
        autoComplete='off'
        style={{
          minWidth: "100%",
          fontSize: "16px",
          //   padding: "2",
          margin: "0",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3} lg={7}>
            <TextField
              id='outlined-multiline-flexible'
              label='Type to Search'
              multiline
              maxRows={4}
              fullWidth
              style={{ marginTop: "8px", marginBottom: "16px" }}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Grid>
          {/* <div
            style={{
              display: "inline-block",
              width: "1px",
              height: "100%",
              marginRight: "16px",
              background: "rgb(221, 221, 221)",
              width: "2px",
            }}
          > */}
          <Grid item xs={12} sm={12} md={3}>
            {/* <InputLabel id='demo-select-small-label'>Status</InputLabel> */}
            <span style={{ boxSizing: "border-box" }}>
              <Select
                labelId='demo-select-small-label'
                id='demo-select-small'
                style={{ marginTop: "8px", marginBottom: "16px" }}
                value={status}
                label='Status'
                onChange={handleChange}
              >
                <MenuItem value='none'>
                  <em>None</em>
                </MenuItem>
                <MenuItem
                  value='Active'
                  selected
                  onClick={() => setStatus("Active")}
                >
                  Active
                </MenuItem>

                <MenuItem
                  value='inActive'
                  onClick={() => setStatus("inActive")}
                >
                  InActive
                </MenuItem>
              </Select>
            </span>
          </Grid>
          {/* </div> */}
        </Grid>
        <TourTable text={text} status={status} />
      </Box>
    </div>
  )
}

export default OverView
