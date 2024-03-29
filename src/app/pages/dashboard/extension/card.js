import React, { useState, useRef, useEffect } from 'react';

import { useNavigate, Link } from 'react-router-dom'; // Use useNavigate instead of useHistory
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Createbooking from '../book/Createbooking';

const BookingCard = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isCreateBookingOpen, setCreateBookingOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const createBookingRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isCreateBookingOpen && createBookingRef.current) {
      createBookingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isCreateBookingOpen]);

  const handleCardHover = (index) => {
    setHoveredIndex(index);
    if (index !== null) {
      setSelectedData(data[index]);
    }
  };

  const handleBookNowClick = (item) => {
    setCreateBookingOpen(true);
    setSelectedData(item);
    navigate('/createbooking/booknow', { state: { selectedData: item } });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '26px',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      {data.map((item, index) => (
        <Card
          key={index}
          onMouseEnter={() => handleCardHover(index)}
          onMouseLeave={() => handleCardHover(null)}
          sx={{
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px #ccc',
            transition: 'transform 0.3s ease',
            transform: hoveredIndex === index ? 'translateY(-5px)' : 'none',
          }}
        >
          <CardActionArea style={{ width: '100%', height: '30vh', position: 'relative' }}>
            <CardMedia
              component="img"
              height="140"
              image={item.imagewebp}
              alt="green iguana"
              style={{
                height: '21vh',
                width: '100%',
                objectFit: 'cover',
                borderRadius: '10px',
                boxShadow: hoveredIndex === index ? '0px 0px 5px rgba(0, 0, 0, 0.3)' : 'none',
                transition: 'box-shadow 0.3s ease',
              }}
            />
            {hoveredIndex === index && (
              <CardActions
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '21vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: '10px',
                  transition: 'background-color 0.9s ease',
                }}
              >
                {/* <Link to="/createbooking/booknow"> */}
                  <Button
                    size="small"
                    color="primary"
                    style={{
                      boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
                      color: 'whitesmoke',
                      backgroundColor: 'blue',
                      transition: 'background-color 0.9s ease',
                    }}
                    onClick={() => handleBookNowClick(item)}
                  >
                    Book Now
                  </Button>
                {/* </Link> */}
              </CardActions>
            )}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {item.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default BookingCard;
