import * as React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import dayjs from "dayjs"
import { InputAdornment, OutlinedInput, Typography } from "@mui/material"
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DesktopDateRangePicker } from "@mui/x-date-pickers-pro/DesktopDateRangePicker"
import PersonIcon from "@mui/icons-material/Person"
import Button from "@mui/material/Button"
import { Grid } from "@mui/material" // Import Grid from Material-UIcontainer spacing={2}

const Booking = () => {
  const [text, setText] = React.useState("")
  const [selectedDateRange, setSelectedDateRange] = React.useState([null, null])
  const [number, setNumber] = React.useState(1)
  const [showResults, setShowResults] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Perform search or display results
    setShowResults(true)
  }

  return (
    <div style={{ padding: '0' }}>  
         <div  style={{marginBottom: '20px'}}>
        <a href="#">Home</a> {'>'} <span>Bookings</span>
      </div>
      <Typography variant="h1" align="start" gutterBottom>
        Create Booking
      </Typography>
      <Box
        component='form'
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
          py: 4,
          pb: 1,
        }}
        noValidate
        autoComplete='off'
        style={{
          padding: "2",
          margin: "0",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3}>
            <TextField
              id='outlined-multiline-flexible'
              label='Text....'
              multiline
              maxRows={4}
              fullWidth
              style={{ marginTop: "8px", marginBottom: "16px" }}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DesktopDateRangePicker"]}>
                <DemoItem component='DesktopDateRangePicker'>
                  <DesktopDateRangePicker
                    value={selectedDateRange}
                    onChange={(newValue) => setSelectedDateRange(newValue)}
                    renderInput={(startProps, endProps) => (
                      <React.Fragment>
                        <TextField {...startProps} fullWidth />
                        <Box sx={{ mx: 1 }}> to </Box>
                        <TextField {...endProps} fullWidth />
                      </React.Fragment>
                    )}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6} md={1}>
            <OutlinedInput
              type='number'
              value={number}
              inputProps={{ min: 0 }}
              onChange={(e) => setNumber(e.target.value)}
              style={{
                padding: "8px",
                border: "0.5px",
                borderRadius: "6px",
                height: "52px",
                width: "100%",
                marginTop: "8px",
              }}
              endAdornment={
                <InputAdornment position='end'>
                  <PersonIcon />
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item xs={12} sm={5} md={2}>
            <Button
              variant='contained'
              onClick={handleSubmit}
              style={{
                padding: "8px",
                border: "0.5px",
                borderRadius: "6px",
                height: "52px",
                width: "100%",
                marginTop: "8px",
              }}
            >
              Submit
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={2}
            md={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "16px 0",
              opacity: 0.5,
            }}
          >
            <Typography
              variant='body1'
              sx={{ fontSize: "18px", fontWeight: "bold", textAlign: "center" }}
            >
              or
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} md={2}>
            <Button
              variant='contained'
              style={{
                padding: "8px",
                border: "0.5px",
                borderRadius: "6px",
                height: "52px",
                width: "100%",
                marginTop: "8px",
              }}
            >
              Quick Book
            </Button>
          </Grid>
        </Grid>

        {showResults && (
          <Box sx={{ mt: 4 }}>
            <Typography variant='body1' sx={{ fontWeight: "bold" }}>
              Search Results:
            </Typography>
            {/* Render search results here */}
            {/* You can replace the following placeholder text with actual search results */}
            <img
              src='https://www.beevidhya.com/assets/images/no_result.gif'
              alt='No results found'
            />
            <Typography
              variant='body2'
              sx={{
                mt: 2,
                width: "100%",
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "center",
                opacity: 0.5,
              }}
            >
              No results found.
            </Typography>
          </Box>
        )}
      </Box>
    </div>
  )
}

export default Booking
