import React from 'react';
import { Box, IconButton, Typography, styled } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // Add the clock icon
import { Link, useLocation } from 'react-router-dom';
import { Grid } from "@mui/material";

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
  console.log(selectedData);

  return (
    <div>
      <Link to="/createbooking" style={{ textDecoration: 'none', background: '#f6f6f6', marginBottom: '8vh' }}>
        <Box sx={{ marginTop: '-3vh', marginBottom: '2vh' }}>
          <BackButton style={{ width: '1.5vw', height: '2.5vh', marginRight: '0.2vw' }}>
            <ArrowBackIcon />
          </BackButton>
          <Typography variant="button" style={{ fontSize: '0.8rem' }}>
            Back
          </Typography>
        </Box>
      </Link>
   
      {/* Use the selectedData as needed */}
      {selectedData && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box sx={{ marginTop: '-5vh' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '-3vh' }}>{selectedData.name}</h1>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <AccessTimeIcon style={{ marginRight: '0.5rem' }} />
                  <h2 style={{ fontWeight: '200', fontSize: '1.5rem', marginLeft: '0.5rem' }}>{selectedData.duration}</h2>
                </Box>
                <span style={{ fontSize: '1.5rem' }}>{selectedData.location}</span>
                <p>Price: {selectedData.price}</p>
                <img src={selectedData.imagewebp} alt="tourimage" />
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default Createbooking;
