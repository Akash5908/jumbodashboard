import React, { useEffect, useState } from "react"
import ToggleStatus from "./operation"

import Box from "@mui/material/Box"
import { Grid, Select } from "@mui/material"
import TextField from "@mui/material/TextField"

import { useDispatch } from "react-redux"

import dayjs from "dayjs"
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"

const SearchBar = () => {
  const [text, setText] = React.useState("")
  const [status, setStatus] = React.useState("Active")
  const [dateSelected, setDateSelected] = React.useState(dayjs())
  const [showToggleStatus, setShowToggleStatus] = useState(false)

  const handleDateChange = (newDateSelected) => {
    setDateSelected(newDateSelected)
    setShowToggleStatus(false)

    // Render the ToggleStatus component with the new dateSelected prop
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowToggleStatus(true)
    }, 200) // Delay of 2 seconds

    return () => {
      clearTimeout(timeout)
    }
  }, [dateSelected])

  return (
    <div style={{ padding: "0" }}>
      <div
        id='row'
        style={{
          display: "flex",
          justifyContent: "space-between",
          // flexDirection: "column",
          // alignItems: "center",
        }}
      >
        <Box
          component='form'
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
            width: "100%",
            fontSize: "16px",
            marginBottom: "16px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
          noValidate
          autoComplete='off'
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3} lg={10}>
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
          </Grid>
          <div style={{ width: "100%", display: "flex" }}>
            <h2 style={{ marginTop: "16px" }}>
              {dateSelected.format("ddd, DD MM YYYY")}
            </h2>
          </div>
          {showToggleStatus ? (
            <ToggleStatus
              date={dateSelected}
              onStatusChange={setStatus}
              searchText={text}
            />
          ) : (
            <h1>Loading</h1>
          )}
        </Box>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateCalendar", "DateCalendar"]}>
              <DemoItem label='Controlled calendar'>
                <DateCalendar
                  value={dateSelected}
                  onChange={handleDateChange}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
