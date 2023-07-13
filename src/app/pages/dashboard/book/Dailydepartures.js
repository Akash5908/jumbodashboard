import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
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
import {
  DemoContainer,
  DemoItem,
} from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro/DesktopDateRangePicker';
import PersonIcon from '@mui/icons-material/Person';
import { StaticDateRangePicker } from '@mui/lab';
import { pickersLayoutClasses } from '@mui/x-date-pickers/PickersLayout';

const tours = [
  { code: 'DT', name: 'Delhi Tours' },
  { code: 'KT', name: "Krishna's Trails" },
  { code: 'SFS', name: 'Street Food Safari' },
  { code: 'ST', name: 'Sahajahan Tour' },
];
const booking = [
  { code: 'DT', name: 'Delhi Tours', time: '1:00' },
  { code: 'KT', name: "Krishna's Trails", time: '1:00' },
  { code: 'SFS', name: 'Street Food Safari', time: '1:00' },
  { code: 'ST', name: 'Sahajahan Tour' , time: '1:00'},
];

const Dailydepartures = () => {
  const [text, setText] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedDateRange, setSelectedDateRange] = useState([
    dayjs(), // Set initial start date
    dayjs().add(1, 'day'), // Set initial end date
  ]);

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
  const [number, setNumber] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [bookingStatus, setBookingStatus] = useState([]);
  const shortcutsItems = [
    {
      label: 'This Week',
      getValue: () => {
        const today = dayjs();
        return [today.startOf('week'), today.endOf('week')];
      },
    },
    {
      label: 'Last Week',
      getValue: () => {
        const today = dayjs();
        const prevWeek = today.subtract(7, 'day');
        return [prevWeek.startOf('week'), prevWeek.endOf('week')];
      },
    },
    {
      label: 'Last 7 Days',
      getValue: () => {
        const today = dayjs();
        return [today.subtract(7, 'day'), today];
      },
    },
    {
      label: 'Current Month',
      getValue: () => {
        const today = dayjs();
        return [today.startOf('month'), today.endOf('month')];
      },
    },
    {
      label: 'Next Month',
      getValue: () => {
        const today = dayjs();
        const startOfNextMonth = today.endOf('month').add(1, 'day');
        return [startOfNextMonth, startOfNextMonth.endOf('month')];
      },
    },
    { label: 'Reset', getValue: () => [null, null] },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search or display results
    setShowResults(true);
  };

  const [tour, setTour] = useState('');
  const [showUnbooked, setShowUnbooked] = useState(false);

  const handleShowUnbookedChange = (event) => {
    setShowUnbooked(event.target.checked);
  };

  const handleBookingStatusChange = (event) => {
    const { value } = event.target;
    setBookingStatus(value);
  };

  return (
    <div style={{ padding: '0' }}>
      <div style={{ marginBottom: '20px', marginTop: '-30px' }}>
        <a href="#">Home</a> {'>'} <span>Bookings</span>
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
              <InputLabel
                id="experience"
                style={{
                  marginTop: '8px',
                  marginBottom: '16px',
                  zIndex: '4',
                  backgroundColor: 'white',
                  padding: '2px',
                }}
              >
                Experience
              </InputLabel>
              <Select
                labelId="experience"
                id="experience"
                value={tour}
                onChange={(e) => setTour(e.target.value)}
                size="small"
                style={{
                  marginTop: '8px',
                  marginBottom: '16px',
                  width: '100%',
                  backgroundColor: 'white',
                  height: '5.4vh',
                }}
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
              style={{ marginTop: '8px', marginBottom: '16px' }}
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
              style={{
                marginTop: '10px',
                marginBottom: '16px',
                marginLeft: '1vw',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={5} md={1}>
            <Button
              onClick={handleSubmit}
              variant="contained"
              style={{
                padding: '8px',
                border: '0.5px',
                borderRadius: '6px',
                height: '52px',
                width: '100%',
                marginTop: '8px',
                backgroundColor: 'whitesmoke',
                color: 'blue',
              }}
            >
              Search
            </Button>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <div>
              <div onClick={handleClick}>
                {/* Container element that triggers the popover */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 2,
                    borderRadius: '4px',
                    border: '2px solid #d3d3d3',
                    cursor: 'pointer',
                    marginTop: '8px',
                    marginLeft: '6vw',
                  }}
                >
                  <Typography style={{ fontWeight: 'bold', paddingLeft: '1vw' }}>
                    {selectedDateRange[0]?.toString().slice(0, 16) || ''} to{' '}
                    {selectedDateRange[1]?.toString().slice(0, 16) || ''}
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
          <div style={{marginLeft:"0",  display: 'flex',
            justifyContent: 'space-around'}}>
          <Typography variant="subtitle1" style={{marginRight:"5vw", color:"grey"}} >Start time</Typography>
          <Typography variant="subtitle1" style={{color:"grey"}} >Experience</Typography>
          </div>
          <div style={{marginLeft:"0",  display: 'flex',
            justifyContent: 'space-between'}}>
          <Typography variant="subtitle1"style={{marginRight:"5vw",color:"grey"}}>Available seats</Typography>
          <Typography variant="subtitle1"style={{marginRight:"5vw",color:"grey"}}>Participants</Typography>
          <Typography variant="subtitle1" style={{color:"grey"}}>Arrived</Typography>
          </div>
     
        </div>
        {booking.map((bookings) => (
                <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  marginBottom: '16px',
                  backgroundColor: "whitesmoke",
                  padding:"1vw"
                }}
              >
              <div style={{marginLeft:"0",  display: 'flex',
                  justifyContent: 'space-around'}}>
                <Typography variant="subtitle1" style={{marginRight:"7vw", color:"grey"}} >{bookings.time}</Typography>
                <Typography variant="subtitle1" style={{color:"grey"}} >{bookings.name} </Typography>
                </div>
                <div style={{marginLeft:"0",  display: 'flex',
                  justifyContent: 'space-between'}}>
                <Typography variant="subtitle1"style={{marginRight:"9vw",color:"grey"}}>10</Typography>
                <Typography variant="subtitle1"style={{marginRight:"8vw",color:"grey"}}>0</Typography>
                <Typography variant="subtitle1" style={{color:"grey", marginRight:"1vw"}}>0</Typography>
                </div>
                </div>
                ))}
       
        {showResults && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Search Results:
            </Typography>
            {/* Render search results here */}
            {/* You can replace the following placeholder text with actual search results */}
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
