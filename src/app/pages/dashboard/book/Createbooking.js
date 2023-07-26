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
import { MenuItem, Select } from "@mui/material";
import { TwentyFourMpSharp } from '@mui/icons-material';


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
  const [dateSelected, setDateSelected] = React.useState(dayjs());
  const [availableDates, setAvailableDates] = React.useState([]); // Assuming the initial value is an empty array
 

  console.log(selectedData);

  const [currentView, setCurrentView] = React.useState('description');

  // Define and initialize the list of available tours and dates
  const availableTourDates = [
    {
      date: '2023-07-28',
      tours: [
        {
          id: 1,
          name: "Tour 1",
          adults: 2, // Number of adults
          children: 1, // Number of children
          price: 100, // Price per person
          minPassengers: 1, // Minimum number of passengers required for the tour
          maxPassengers: 5, // Maximum number of passengers allowed for the tour
        },
        {
          id: 2,
          name: "Tour 2",
          adults: 1,
          children: 2,
          price: 75,
          minPassengers: 2,
          maxPassengers: 4,
        },
      ],
    },
    {
      date: '2023-07-29',
      tours: [
        {
          id: 2,
          name: "Tour 2",
          adults: "",
          children: "",
          price: 80,
          minPassengers: 1,
          maxPassengers: 6,
        },
        {
          id: 3,
          name: "Tour 3",
          adults: 2,
          children: 2,
          price: 120,
          minPassengers: 3,
          maxPassengers: 8,
          maxChildrens: 3
        },
      ],
    },
    // Add more objects for more dates with their respective tours
];

  const [tour, setTour] = React.useState(''); // Assuming the initial value is an empty string
  // Function to check if a date is available
  const isDateAvailable = (date) => {
    return availableTourDates.some((item) => item.date === date.format('YYYY-MM-DD'));
  };
  const getSelectedTour = (name) => {
    return availableDates.find((tour) => tour.name === name);
  };
  React.useEffect(() => {
    if (availableDates.length > 0) {
      setTour(availableDates[0].name);
    } 
  }, [availableDates]);

  // Function to generate custom content for date cells
  const tileContent = ({ date }) => {
    const isAvailable = isDateAvailable(dayjs(date));
    return (
      <>
        <div
          style={{
            backgroundColor: isAvailable ? 'green' : 'transparent',
            borderRadius: '50%',
            width: '75%',
            height: '75%',
            margin: 'auto',
          }}
        />
        <div>{date.getDate()}</div>
      </>
    );
  };

  const handleDateChange = (newDateSelected) => {
    setDateSelected(newDateSelected);

    // Find the available tours for the selected date
    const toursForDate = availableTourDates.find((item) => item.date === newDateSelected.format('YYYY-MM-DD'));

    // Update the available tours state for the selected date
    setAvailableDates(toursForDate ? toursForDate.tours : []);
  }

  const handleChange = (event, newAlignment) => {
    setCurrentView(newAlignment);
  };
  const [adultCount, setAdultCount] = React.useState(1); // Assuming the initial value is 1 adult
  const [childCount, setChildCount] = React.useState(0); // Assuming the initial value is 0 child

  const handleAdultCountChange = (event, newCount) => {
    setAdultCount(newCount);
  };

  const handleChildCountChange = (event, newCount) => {
    setChildCount(newCount);
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
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.1rem',marginTop:"1vh" }}>
                  <AccessTimeIcon style={{ marginRight: '0.5rem',color:"grey" }} />
                  <h2 style={{ fontWeight: '200', fontSize: '1.5rem', marginLeft: '0.3rem',color:"grey" }}> {selectedData.duration}</h2>
                </div>
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
                {currentView === 'description' ? (
                  <p>
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
              <div>
                <h1 style={{ display: "block", fontSize: "3rem", marginBottom: '-3vh', marginTop:"-1vh" }}>Book now</h1>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DateCalendar", "DateCalendar"]}>
                      <DemoItem label=''>
                        <DateCalendar
                          value={dateSelected}
                          onChange={handleDateChange}
                          tileContent={tileContent} // Pass the tileContent function here
                        />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                  </div>
              </div>
              <div style={{marginLeft:"2vw"  }}>
                <h1>Dates</h1>
                <Select
                  value={tour}
                  onChange={(e) => setTour(e.target.value)}
                  size="small"
                  style={{ marginTop: '8px', marginBottom: '16px', width: "20vw", backgroundColor: "white", height: "3.8vh" }}
                >
                  {availableDates.map((tour) => (
                    <MenuItem key={tour.id} value={tour.name}>
                      {tour.name}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <div style={{marginLeft:"2vw"  }}>
                <h1>People</h1>
                {/* Select to choose the number of adults */}
                <div style={{   border: "0.2vw solid grey" , padding:"1vh", height:'100%'}}>

                  {getSelectedTour(tour)?.maxPassengers > 0 && (
                    <>
                      <label  >Adults
                        <Select
                      
                          value={adultCount}
                          onChange={(e) => setAdultCount(Number(e.target.value))}
                          size="small"
                          style={{ marginTop: '3px', marginBottom: '16px', width: "8vw", backgroundColor: "white", height: "3.8vh", }}
                        >
                          {Array.from({ length: getSelectedTour(tour)?.maxPassengers || 1 }, (_, i) => i + 1).map((count) => (
                            <MenuItem key={count} value={count} >
                              {count}
                            </MenuItem>
                          ))}
                        </Select>
                      </label>
                    </>
                  )}
                {/* Select to choose the number of children */}
                {getSelectedTour(tour)?.maxChildrens > 0 && (
                  <>
                    <label  style={{ display:"block"}}>Children
                    <Select
                      value={childCount}
                      onChange={(e) => setChildCount(Number(e.target.value))}
                      size="small"
                      style={{ marginTop: '3px', marginBottom: '16px', width: "8vw", backgroundColor: "white", height: "3.8vh"}}
                      >
                      {Array.from({ length: getSelectedTour(tour)?.maxChildrens || 1 }, (_, i) => i + 1).map((count) => (
                        <MenuItem key={count} value={count}>
                          {count}
                        </MenuItem>
                      ))}
                        </Select>
                        </label>
                  </>
                  )}
                
                  {getSelectedTour(tour)?.maxPassengers > 0 && (
                    <>
                      <div style={{ display: "block" }}>
                      <span  style={{display:"block",fontWeight:"500"}}>Price: Rs{getSelectedTour(tour).price}</span> 
                  
                        <span style={{ paddingLeft: "0.2vw", fontSize: "0.85rem", backgroundColor: "#d9534f", paddingRight: "0.2vw", width: "6.5vw", borderRadius: "0.5vw", color: "white" }}>minPassengers: {getSelectedTour(tour)?.minPassengers}</span>
                        <span style={{ marginLeft: "1vh", paddingLeft: "0.2vw", paddingRight: "0.2vw", fontSize: "0.85rem", backgroundColor: "#5bc0de", width: "6.5vw", borderRadius: "0.5vw", color: "white" }}>maxPassengers: {getSelectedTour(tour)?.maxPassengers}</span>
                    
                      </div>
                
                    </>
                  )}
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
