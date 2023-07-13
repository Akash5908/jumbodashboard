import React, { useState } from 'react';
import WysiwygEditorExample from '../extension/components/WysiwygEditorExample';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
import 'react-calendar/dist/Calendar.css';

// CSS styles for highlighted dates
const styles = `
  .highlighted-date {
    background-color: #95F68E !important;
  }
`;

const tours = [
  { code: 'DT', name: 'Delhi Tours' },
  { code: 'KT', name: "Krishna's Trails" },
  { code: 'SFS', name: 'Street Food Safari' },
  { code: 'ST', name: 'Sahajahan Tour' },
];

const MonthlyOverview = () => {
  const [value, onChange] = useState(new Date());
  const [tour, setTour] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [editorData, setEditorData] = useState('');
  const [editorDataMap, setEditorDataMap] = useState(new Map());

  // Dummy booking data
  const bookingData = [
    { date: '2023-07-01', bookings: 3, title: 'Delhi By Cycle', time: '10:00 AM' },
    { date: '2023-07-01', bookings: 10, title: 'Krishna Trails', time: '6:40 PM' },
    { date: '2023-07-05', bookings: 5, title: 'Old Delhi', time: '1:00 AM' },
    { date: '2023-07-08', bookings: 2, time: '5:40 AM' },
    { date: '2023-07-10', bookings: 7, time: '3:40 PM' },
    // Add more booking data as needed
  ];

  const { t } = useTranslation();
  const handleCalendarChange = (date) => {
    onChange(date);
    setSelectedDate(date);

    // Retrieve the editor data for the selected date
    const dataFromEditor = editorDataMap.get(date.toDateString()) || '';

    // Update the editor data state
    setEditorData(dataFromEditor);
  };

  const handleSaveEntry = () => {
    // Get the current selected date
    const currentDate = selectedDate.toDateString();

    // Update the editorDataMap with the data from the editor for the selected date
    const updatedDataMap = new Map(editorDataMap);
    updatedDataMap.set(currentDate, editorData);
    setEditorDataMap(updatedDataMap);
  };

  // Custom tileClassName function for the Calendar component
  const tileClassName = ({ date }) => {
    const dateString = date.toISOString().slice(0, 10);
    return bookingData.some((booking) => booking.date === dateString) ? 'highlighted-date' : '';
  };

  return (
    <React.Fragment>
      <style>{styles}</style> {/* Apply the CSS styles */}
      <div style={{ marginBottom: '20px' }}>
        <Link to="/bookingdesk" style={{ color: 'blue' }}>
          Home
        </Link>{' '}
        &gt; <span>Bookings</span>
        <Typography variant="h1" align="start" gutterBottom>
          Bookings - Monthly overview
        </Typography>
        <div style={{ marginBottom: '20px' }}>
          <span>
            This report is an overview of how many passengers are booked for each departure. You can write diary entries
            for the day and generate a passenger list with information about bookable extras for each passenger.
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
      </div>
      <Grid container spacing={0.8} style={{ backgroundColor: '#F0F0F0', padding: '20px', height: '100%' }}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <div style={{ position: 'relative', marginRight: '20px', marginBottom: '10px' }}>
            <Calendar onChange={handleCalendarChange} value={selectedDate} tileClassName={tileClassName} />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Grid container spacing={0.8}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                Experiences
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
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
              {selectedDate && (
                <Typography variant="body1" sx={{ marginTop: '10px' }}>
                  {bookingData.some((booking) => booking.date === selectedDate.toISOString().slice(0, 10)) ? (
                    <Typography variant="body1">
                      {bookingData
                        .filter((booking) => booking.date === selectedDate.toISOString().slice(0, 10))
                        .map((booking) => (
                          <React.Fragment key={booking.title}>
                            <Typography variant="h2">{booking.title}</Typography>
                            <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '10px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                                <div style={{ flex: 1 }}>
                                  <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                    {selectedDate.toLocaleDateString(undefined, {
                                      weekday: 'long',
                                      month: 'long',
                                      day: 'numeric',
                                    })}
                                  </Typography>
                                  {/* <Typography variant="body1" style={{ color: 'gray' }}>
                                      {selectedDate.toLocaleDateString(undefined, { weekday: 'short' })}
                                    </Typography> */}
                                </div>
                                <div style={{ flex: 1, paddingLeft: '20px' }}>
                                  <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                    Participants
                                  </Typography>
                                </div>
                              </div>
                              <hr style={{ margin: '8px 0', borderTop: '1px solid gray' }} />
                              <div style={{ display: 'flex' }}>
                                <div style={{ flex: 1 }}>
                                  <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                    {booking.time}
                                  </Typography>
                                </div>
                                <div style={{ flex: 1, paddingLeft: '20px' }}>
                                  <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                    {booking.bookings}
                                  </Typography>
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        ))}
                    </Typography>
                  ) : (
                    <Typography variant="body1">
                      <span style={{ fontWeight: '450', color: 'black' }}>{selectedDate.toDateString()}: </span>
                      No bookings on selected day
                    </Typography>
                  )}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Reports
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MonthlyOverview;
