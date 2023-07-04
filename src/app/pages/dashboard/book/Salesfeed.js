import * as React from 'react';
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
  Container,
  Popover
} from '@mui/material';
import {
  DemoContainer,
  DemoItem,
} from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro/DesktopDateRangePicker';
import PersonIcon from '@mui/icons-material/Person';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { pickersLayoutClasses } from '@mui/x-date-pickers/PickersLayout';



const Salesfeed = () => {
  const [text, setText] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedDateRange, setSelectedDateRange] = React.useState([
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
    setSelectedDateRange([
      dayjs('2022-04-17'),
      dayjs('2022-04-21'),
    ]);
    setAnchorEl(null);
  };

  const handleDateRangeApply = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'date-range-popover' : undefined;
  const [number, setNumber] = React.useState(1);
  const [showResults, setShowResults] = React.useState(false);
  const [bookingStatus, setBookingStatus] = React.useState([]);
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

  const handleBookingStatusChange = (event) => {
    const { value } = event.target;
    setBookingStatus(value);
  };
  return (
    <div style={{ padding: '0' }}>
      <div  style={{marginBottom: '20px'}}>
        <a href="#">Home</a> {'>'} <span>Bookings</span>
      </div>
      <Typography variant="h1" align="start" gutterBottom>
        Sales Feed
      </Typography>
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
          <Grid item xs={12} sm={12} md={2}>
            <TextField
              id="outlined-multiline-flexible"
              label="Booking ref.."
              placeholder="Booking ref."
              multiline
              maxRows={4}
              fullWidth
              style={{ marginTop: '8px', marginBottom: '16px' }}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={1.5}>
            <TextField
              id="outlined-multiline-flexible"
              label="Payment ref."
              placeholder="Payment ref."
              multiline
              maxRows={4}
              fullWidth
              style={{ marginTop: '8px', marginBottom: '16px' }}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={1.5}>
            <TextField
              id="outlined-multiline-flexible"
              label="Ext. booking ref"
              placeholder="Ext.booking ref"
              multiline
              maxRows={4}
              fullWidth
              style={{ marginTop: '8px', marginBottom: '16px' }}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={1.5}>
            <FormControl fullWidth>
              <InputLabel
                id="booking-status-label"
                style={{
                  marginTop: '8px',
                  marginBottom: '16px',
                  zIndex: '4',
                  backgroundColor: 'white',
                  padding: '2px',
                }}
              >
                Booking Status:
              </InputLabel>
              <Select
                labelId="booking-status-label"
                id="booking-status"
                placeholder="Booking Status"
                value={bookingStatus}
                onChange={handleBookingStatusChange}
                multiple
                renderValue={(selected) => selected.join(', ')}
                style={{ marginTop: '8px', marginBottom: '16px' }}
              >
                <MenuItem value="Confirmed">Confirm</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Reserved">Reserved</MenuItem>
                <MenuItem value="Rejected">Rejected</MenuItem>
                <MenuItem value="Aborted">Aborted</MenuItem>
                <MenuItem value="Cancelled">Cancelled</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={5} md={1}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              style={{
                padding: '8px',
                border: '0.5px',
                borderRadius: '6px',
                height: '52px',
                width: '100%',
                marginTop: '8px',
              }}
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={12} sm={5} md={1}>
            <Button
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
              Clear
            </Button>
          </Grid>
      
          <Grid item xs={12} sm={12} md={3.5}>
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
                  <Typography style={{ fontWeight: 'bold',paddingLeft:'1vw'  }}>
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
                  <StaticDateRangePicker
        slotProps={{
          shortcuts: {
            items: shortcutsItems,
          },
          actionBar: { actions: [] },
        }}
        calendars={2}
      />
                  </LocalizationProvider>
                  <Button onClick={handleDateRangeApply}>OK</Button>
                  <Button onClick={handleDateRangeCancel}>Cancel</Button>
                </Box>
              </Popover>
            </div>
          </Grid>
        </Grid>

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

export default Salesfeed;
