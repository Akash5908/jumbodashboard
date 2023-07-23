import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

import {
  InputAdornment,
  OutlinedInput,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Input,
  Checkbox,
  FormControlLabel,
  Container,
  Popover,
} from '@mui/material';

// import {
//   DemoContainer,
//   DemoItem,
// } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro/DesktopDateRangePicker';
// import PersonIcon from '@mui/icons-material/Person';
// import { StaticDateRangePicker } from '@mui/lab';
// import { pickersLayoutClasses } from '@mui/x-date-pickers/PickersLayout';

const tours = [
  { code: 'DT', name: 'Delhi Tours' },
  { code: 'KT', name: "Krishna's Trails" },
  { code: 'SFS', name: 'Street Food Safari' },
  { code: 'ST', name: 'Sahajahan Tour' },
];
const booking = [
  { code: 'DT', name: 'Delhi Tours', date: '2023-07-15', time: '1:00' },
  { code: 'KT', name: "Krishna's Trails", date: '2023-07-16', time: '1:00' },
  { code: 'SFS', name: 'Street Food Safari', date: '2023-07-17', time: '1:00' },
  { code: 'ST', name: 'Sahajahan Tour', date: '2023-07-18', time: '1:00' },
];

const Dailydepartures = () => {
  const [text, setText] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedDateRange, setSelectedDateRange] = useState([
    dayjs(), // Set initial start date
    dayjs().add(1, 'day'), // Set initial end date
  ]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [tour, setTour] = useState('');
  const [showUnbooked, setShowUnbooked] = useState(false);
  const [bookingStatus, setBookingStatus] = useState([]);
  const [arrivedParticipants, setArrivedParticipants] = useState({});

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDateRangeChange = (newValue) => {
    setSelectedDateRange(newValue);
  };

  const handleDateRangeCancel = () => {
    setSelectedDateRange([dayjs('2022-04-17'), dayjs('2022-04-21')]);
    setAnchorEl(null);
  };

  const handleDateRangeApply = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'date-range-popover' : undefined;

  const handleShowUnbookedChange = (event) => {
    setShowUnbooked(event.target.checked);
  };

  const handleBookingStatusChange = (event) => {
    const { value } = event.target;
    setBookingStatus(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Filter the booking data based on the selected date range and other criteria
    const filteredBooking = booking.filter((bookings) => {
      const bookingDate = dayjs(bookings.date);
      return (
        bookingDate.isSame(selectedDateRange[0], 'day') || // Check if it is the same day
        bookingDate.isAfter(selectedDateRange[0], 'day') // Check if it is after the start date
      ) && (
        bookingDate.isSame(selectedDateRange[1], 'day') || // Check if it is the same day
        bookingDate.isBefore(selectedDateRange[1], 'day') // Check if it is before the end date
      );
    });

    // Perform additional filtering based on other criteria (e.g., tour selection, show unbooked option)
    const filteredBookingResults = filteredBooking.filter((booking) => {
      if (tour && booking.code !== tour) {
        return false; // Filter out bookings not matching the selected tour
      }
      if (!showUnbooked && bookingStatus.includes(booking.code)) {
        return false; // Filter out unbooked bookings if showUnbooked is false
      }
      return true;
    });

    
    // Update the state to show the filtered results
    setFilteredBookings(filteredBookingResults);
    setShowResults(true);
  };
  const handleArrivedParticipantsIncrease = (code) => {
    setArrivedParticipants((prevState) => ({
      ...prevState,
      [code]: (prevState[code] || 0) + 1,
    }));
  };
  

  return (
    <div style={{ padding: '0' }}>
      <div style={{ marginBottom: '20px', marginTop: '-30px' }}>
      <Link to="/" style={{ textDecoration: 'none', background: '#f6f6f6', marginBottom: '8vh' }}>Home</Link> {'>'} <span>Bookings</span>
      </div>
      <Typography variant="h1" align="start" gutterBottom>
        Daily Departures
      </Typography>
      <div style={{ marginBottom: '20px' }}>
        <span>
          Book your own products, you can book outside of the regular schedule,
          go back in time, and overbook if you need to.
        </span>
        <a
          href="##"
          style={{
            textDecoration: 'none',
            color: 'whitesmoke',
            backgroundColor: 'blue',
            borderRadius: '50%',
            padding: '2px 3px',
          }}
        >
          ?
        </a>
      </div>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 2,
          py: 4,
          pb: 1,
        }}
        noValidate
        autoComplete="off"
        style={{
          padding: '2',
          margin: '0',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Grid container spacing={0.8}>
          <Grid item xs={12} sm={12} md={3.5}>
            <FormControl fullWidth>
              <InputLabel id="experience">Experience</InputLabel>
              <Select
                labelId="experience"
                id="experience"
                value={tour}
                onChange={(e) => setTour(e.target.value)}
                size="small"
                style={{padding:"0.5vw"}}
              >
                {tours.map((tour) => (
                  <MenuItem key={tour.code} value={tour.code}>
                    {tour.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <TextField
              id="outlined-multiline-flexible"
              label="Search"
              placeholder="search"
              multiline
              maxRows={4}
              fullWidth
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={5} md={1.5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={showUnbooked}
                  onChange={handleShowUnbookedChange}
                />
              }
              label="Show Unbooked"
            />
          </Grid>
          <Grid item xs={12} sm={5} md={2}>
            <Button onClick={handleSubmit} variant="contained" style={{padding:"0.5vw"}}>
              Search
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <div>
              <div onClick={handleClick}>
                {/* Container element that triggers the popover */}
                <Box
                  sx={{
                    display: 'flex',
                    // alignItems: 'center',
                      justifyContent:"center",
                    p: 2,
                    borderRadius: '4px',
                    border: '2px solid #d3d3d3',
                    cursor: 'pointer',
                  }}
                >
                  <Typography style={{ fontWeight: 'bold'}}>
                    {selectedDateRange[0]?.format('YYYY-MM-DD')} to{' '}
                    {selectedDateRange[1]?.format('YYYY-MM-DD')}
                  </Typography>
                </Box>
              </div>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Box p={2}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDateRangePicker
                      startText="Start"
                      endText="End"
                      value={selectedDateRange}
                      onChange={handleDateRangeChange}
                      renderInput={(startProps, endProps) => (
                        <React.Fragment>
                          <TextField {...startProps} margin="normal" />
                          <Box sx={{ mx: 1 }}> to </Box>
                          <TextField {...endProps} margin="normal" />
                        </React.Fragment>
                      )}
                    />
                  </LocalizationProvider>
                </Box>
              </Popover>
            </div>
          </Grid>
        </Grid>

        {/* Flex container for "Start time," "Experience," "Available seats," "Participants," and "Arrived" */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: '16px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Typography variant="subtitle1" style={{ marginRight: '5vw', color: 'grey' }}>
              Start time
            </Typography>
            <Typography variant="subtitle1" style={{ color: 'grey' }}>
              Experience
            </Typography>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight:"0.5vw"}}>
            <Typography variant="subtitle1" style={{ marginRight: '4vw', color: 'grey' }}>
              Available seats
            </Typography>
            <Typography variant="subtitle1" style={{ marginRight: '5vw', color: 'grey' }}>
              Participants
            </Typography>
            <Typography variant="subtitle1" style={{ color: 'grey' ,marginRight: '0.5vw'}}>
              Arrived
            </Typography>
          </div>
        </div>

        {filteredBookings.map((booking) => (
          <div
            key={booking.code}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: '16px',
              backgroundColor: 'whitesmoke',
              padding: '1vw',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Typography variant="subtitle1" style={{ marginRight: '7vw', color: 'grey' }}>
                {booking.time}
              </Typography>
              <Typography variant="subtitle1" style={{ color: 'grey' }}>
                {booking.name}
              </Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="subtitle1" style={{ marginRight: '9vw', color: 'grey' }}>
                10
              </Typography>
              <Typography variant="subtitle1" style={{ marginRight: '8vw', color: 'grey' }}>
                0
              </Typography>
              <Typography variant="subtitle1" style={{ color: 'grey', marginRight: '0.6vw' }}>
      {arrivedParticipants[booking.code] || 0}
              <span onClick={() => handleArrivedParticipantsIncrease(booking.code)} style={{cursor:'pointer',color:"#7352C7",fontWeight:"800",marginLeft:"10px"}}>
      +
    </span>
    </Typography>
            </div>
          </div>
        ))}

        {showResults && filteredBookings.length === 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Search Results:
            </Typography>
            <img
              src="https://www.beevidhya.com/assets/images/no_result.gif"
              alt="No results found"
            />
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                width: '100%',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                opacity: 0.5,
              }}
            >
              No results found.
            </Typography>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Dailydepartures;
