import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const BookingCard = ({ data }) => {
  console.log(data);
  
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {data.map((item, index) => (
        <Card
          key={index}
          sx={{
              Width: '300px',        
            display: "flex",
            flexDirection: "column",
            margin: "10px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px #ccc",
          }}
        >
          <CardActionArea style={{ width: '15vw', height:"30vh" }}>
            <CardMedia
              component="img"
              height="140"
              image={item.imagewebp}
                      alt="green iguana"
                      style={{height: '21vh', width: '15vw', objectFit: 'cover', borderRadius: '10px'}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {item.price}
              </Typography>
            </CardContent>
          </CardActionArea>
          {/* <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions> */}
        </Card>
      ))}
    </div>
  );
};

export default BookingCard;
