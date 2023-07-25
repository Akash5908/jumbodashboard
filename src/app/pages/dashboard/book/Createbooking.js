import React from 'react';
import { Box, IconButton, Typography, styled } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Link, useLocation } from 'react-router-dom';
import { Grid } from "@mui/material";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import dayjs from "dayjs"
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"

const BackButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Createbooking = () => {
  const location = useLocation();
  const selectedData = location.state?.selectedData;
  const [dateSelected, setDateSelected] = React.useState(dayjs())

  console.log(selectedData);

  const [currentView, setCurrentView] = React.useState('description');

  const handleDateChange = (newDateSelected) => {
    setDateSelected(newDateSelected)
  

    // Render the ToggleStatus component with the new dateSelected prop
  }
  const handleChange = (event, newAlignment) => {
    setCurrentView(newAlignment);
  };

  return (
    <div>
      <Link to="/createbooking" style={{ textDecoration: 'none', background: '#f6f6f6', marginBottom: '8vh' }}>
        <Box sx={{ marginTop: '-3vh', marginBottom: '2vh' }}>
          <BackButton style={{ width: '1.5vw', height: '2.9vh', marginRight: '0.2vw' }}>
            <ArrowBackIcon />
          </BackButton>
          <Typography variant="button" style={{ fontSize: '0.9em' }}>
            Back
          </Typography>
        </Box>
      </Link>

      {selectedData && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={8} xl={8}>
              <Box sx={{ marginTop: '-5vh', marginLeft: "3vw",overflow:"hidden"}}>
                <h1 style={{ fontSize: '3rem', marginBottom: '-3vh' }}>{selectedData.name}</h1>
                {/* <Box sx=> */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.1rem',marginTop:"1vh" }}>
                <AccessTimeIcon style={{ marginRight: '0.5rem',color:"grey" }} />
                  <h2 style={{ fontWeight: '200', fontSize: '1.5rem', marginLeft: '0.3rem',color:"grey" }}> {selectedData.duration}</h2>
                 </div>
                {/* </Box> */}
              
                <img style={{ width: "100%", height: "50vh" }} src={selectedData.imagewebp} alt="tourimage" />
                <ToggleButtonGroup
                  color="primary"
                  value={currentView}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                  sx={{ marginTop: "3rem", display:"block" }}
                >
      <ToggleButton value="description" >Description</ToggleButton>
      <ToggleButton value="pickup">Pick up</ToggleButton>
      </ToggleButtonGroup>
                {/* Conditionally render the text based on the selected value */}
      {currentView === 'description' ? (
                  <p >
          Shahjahanabad, the city designed by the Mogul Emperor Shahjahan has something to offer to everyone.
          {/* ... (remaining description text) */}
        </p>
      ) : (
                  <p>
          We offer pick-up to the following places for this experience:
          <ul>
            <li>FabHotel Arina Inn Darya Ganj</li>
            <li>Hotel Broadway</li>
            <li>Hotel Flora</li>
            <li>Hotel MGM Residency</li>
            <li>Hotel Neeru</li>
            <li>Hotel Ranjit</li>
          </ul>
        </p>
      )}
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <div >
                {/* <Calendar onChange={handleCalendarChange} value={selectedDate} tileClassName={tileClassName} /> */}
              
                  <h1 style={{ display:"block", fontSize: "3rem", marginBottom: '-3vh',marginTop:"-1vh" }}>Book now</h1>
                <div style={{ display: "flex", justifyContent: "center" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateCalendar", "DateCalendar"]}>
              <DemoItem label=''>
                <DateCalendar
                  value={dateSelected}
                  onChange={handleDateChange}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
          </div>
        </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default Createbooking;
