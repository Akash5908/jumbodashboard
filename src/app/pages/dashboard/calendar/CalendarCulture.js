import React, { useState } from 'react';
import { momentLocalizer } from 'react-big-calendar';
import { Container } from '@mui/joy';
import Button from '@mui/material/Button';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { LicenseInfo } from '@mui/x-license-pro';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'moment/locale/fr';
import 'moment/locale/ar';
import 'moment/locale/en-gb';
import 'moment/locale/en-in';
import { calendarData, cultures } from "./data";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import { MenuItem, Select } from "@mui/material";
import CalendarWrapper from "./CalendarWrapper";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import { useTranslation } from "react-i18next";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-calendar/dist/Calendar.css';
import { Grid } from '@mui/material'; // Import Grid from Material-UI
import { Link, useNavigate } from 'react-router-dom';
const { events } = calendarData;
const today = new Date();
const currentYear = today.getFullYear();

const localizer = momentLocalizer(moment);

const CalendarCulture = () => {
  const { t } = useTranslation();
  const [culture, setCulture] = useState('dt');
  const [value, onChange] = useState(new Date());
  const [isChecked, setIsChecked] = useState(false);
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
      
    // Navigate to the '/bookbytime' route
    // navigate('/Bookings/Desk'); 
    };
  

  const [selectedTime, setSelectedTime] = useState('');

  const handleCheckboxChange = (e) => {
    const selectedValue = e.target.checked ? e.target.value : '';
    setIsChecked(e.target.checked);
    setSelectedTime(selectedValue);
  };
    
  const timeOptions = [
    { label: '5:00 AM', value: '5:00 AM' },
    { label: '6:00 AM', value: '6:00 AM' },
    { label: '7:00 AM', value: '7:00 AM' },
    // Add more time options as needed
  ];

  return (
    <React.Fragment>
         <div  style={{marginBottom: '20px',marginTop:"-30px"}}>
        <a href="#">Home</a> {'>'} <span>Bookings</span>
      </div>
      <Typography variant="h1" align="start" gutterBottom>
       Select experience & time
      </Typography>
      <Typography variant={"h5"} color={"text.primary"}>Select a culture</Typography>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Select size={"small"} onChange={(e) => setCulture(e.target.value)} value={culture}>
              {cultures.map((item, index) => (
                <MenuItem value={item.id} key={`${item.id}${index}`}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
                  </FormControl>
          <div style={{ display: 'flex' }}>
                  <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3}>
            <div style={{ position: 'relative', marginRight: '20px' }}>
              <Calendar
                onChange={onChange}
                value={value}
                // Adjust the width value as per your requirements
                                  />
            </div>
                              </Grid>
          <Grid item xs={12} sm={12} md={3}>
                              
              <p style={{ fontSize: '14px', color: '#878787', marginTop: '20px', fontWeight:"bold"}}>Time</p>
           
              {timeOptions.map((option) => (
              <label htmlFor={option.value} key={option.value} style={{ display: 'block' }}>
                <input
                  type="radio"
                  name="time"
                  id={option.value}
                  value={option.value}
                  style={{}}
                  checked={isChecked && selectedTime === option.value}
                  onChange={handleCheckboxChange}
                />
                {option.label}
              </label>
            ))}
                      <Link to="/bookingdesk/activity">
                              <Button type="submit" variant="contained"  style={{ marginTop: '20px'}}>Continue</Button>
                             
            </Link>
                              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CalendarCulture;
