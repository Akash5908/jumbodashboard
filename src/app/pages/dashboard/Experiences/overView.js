import React from "react"
import Box from "@mui/material/Box"
import { Grid } from "@mui/material"
import TextField from "@mui/material/TextField"

import TourTable from "./tourTable"

import { useDispatch } from "react-redux"

const OverView = () => {
  const dispatch = useDispatch()
  const [text, setText] = React.useState("")
  const [status, setStatus] = React.useState("Active")

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

          <Grid item xs={12} sm={12} md={3}></Grid>
          {/* </div> */}
        </Grid>
        <TourTable text={text} status={status} />
      </Box>
    </div>
  )
}

export default OverView
