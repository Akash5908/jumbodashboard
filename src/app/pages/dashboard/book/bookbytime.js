import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid, TextField, Checkbox, MenuItem, Select, FormControlLabel } from '@mui/material';
import { Help } from '@material-ui/icons';
import Button from "@mui/material/Button"
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';
// A list of currencies (you can modify this list or fetch data from an API)
const currencies = [
  { code: 'AED', name: 'United Arab Emirates Dirham' },
  { code: 'AFN', name: 'Afghan Afghani' },
  { code: 'ALL', name: 'Albanian Lek' },
  { code: 'AMD', name: 'Armenian Dram' },
  { code: 'ANG', name: 'Netherlands Antillean Guilder' },
  { code: 'AOA', name: 'Angolan Kwanza' },
  { code: 'ARS', name: 'Argentine Peso' },
  { code: 'AUD', name: 'Australian Dollar' },
  { code: 'AWG', name: 'Aruban Florin' },
  { code: 'AZN', name: 'Azerbaijani Manat' },
  { code: 'BAM', name: 'Bosnia-Herzegovina Convertible Mark' },
  { code: 'BBD', name: 'Barbadian Dollar' },
  { code: 'BDT', name: 'Bangladeshi Taka' },
  { code: 'BGN', name: 'Bulgarian Lev' },
  { code: 'BHD', name: 'Bahraini Dinar' },
  { code: 'BIF', name: 'Burundian Franc' },
  { code: 'BMD', name: 'Bermudan Dollar' },
  { code: 'BND', name: 'Brunei Dollar' },
  { code: 'BOB', name: 'Bolivian Boliviano' },
  { code: 'BRL', name: 'Brazilian Real' },
  { code: 'BSD', name: 'Bahamian Dollar' },
  { code: 'BTN', name: 'Bhutanese Ngultrum' },
  { code: 'BWP', name: 'Botswanan Pula' },
  { code: 'BYN', name: 'Belarusian Ruble' },
  { code: 'BZD', name: 'Belize Dollar' },
  { code: 'INR', name: 'Indian Rupee' },
  // Add more currencies here...
];

const Bookbytime = () => {
  const [rate, setRate] = useState('');
  const [participants, setParticipants] = useState('');
  const [adults, setAdults] = useState(0);
  const [currency, setCurrency] = useState('');
  const [payment, setPayment] = useState('');
  const [discount, setDiscount] = useState('');
  const [bookingRef, setBookingRef] = useState('');
  const [emailTicket, setEmailTicket] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nationality, setNationality] = useState('');
  const [organization, setOrganization] = useState('');
  const [bookingNote, setBookingNote] = useState('');
  const [financeNote, setFinanceNote] = useState('');
  const [operationsNote, setOperationsNote] = useState('');
  const [bookedCount, setBookedCount] = useState(0);
  const [participantsCount, setParticipantsCount] = useState(0);
  const [availableCount, setAvailableCount] = useState(50);
  const location = useLocation();
  const { culture, selectedDate, selectedTime } = location.state;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
console.log(culture,selectedDate)
  const calculateInvoice = () => {
    const unitPrice = 1500; // Assuming unit price of the tour is ₹1500
    const discountPercent = 0; // Assuming no discount
    const taxAmount = 285.72; // Assuming tax amount
    const amountDue = adults * unitPrice - discountPercent / 100 * (adults * unitPrice) + taxAmount;

    return {
      unitPrice,
      discountPercent,
      taxAmount,
      amountDue,
    };
  };

  const { unitPrice, discountPercent, taxAmount, amountDue } = calculateInvoice();

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
      <Link to="/" style={{ textDecoration: 'none', background: '#f6f6f6', marginBottom: '8vh' }}>Home</Link> {'>'} <span>Bookings</span> {'>'}{' '}
        <Link to="/bookingdesk" style={{ color: 'blue' }}>
          Select experience & time
        </Link>
        <Typography variant="h1" align="start" gutterBottom>
          Booking desk
        </Typography>
         <div style={{marginBottom: '20px'}}>
          <span>Book your own products, you can book outside of regular schedule, back in time and overbook if you need to.</span>
          <a href="##" style={{ textDecoration: 'none', color: 'whitesmoke', backgroundColor: 'blue', borderRadius: '50%', padding: '2px 3px' }}>
            ?
          </a>
        </div>
      </div>
      <div style={{ backgroundColor: '#FCFCFC', padding: '20px', paddingLeft: "2.5vw", borderRadius: '10px', height: "100%" }}>
          <h1 style={{ paddingRight: "10vw", marginLeft: "-15px",marginBottom:"1vh" ,fontSize:"2vw"}}>{culture}</h1>
        <div style={{ marginBottom: "20px" }}>
          <Typography variant style={{ fontSize: '15px', textDecoration: 'none', paddingRight: "0vw", marginLeft: "40vw" }}>
            Booked: {bookedCount}, Participants: {participantsCount}, Available: {availableCount}
          </Typography>
        </div>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} xl={4} lg={6  }  style={{ backgroundColor: "#F0F0F0", borderRadius: "3px", padding: "20px" }}>
              <Typography variant="subtitle1">Rate</Typography>
              <TextField value={rate} onChange={(e) => setRate(e.target.value)} fullWidth variant="outlined" size="small" style={{ backgroundColor: "white" }} />
              <Typography variant="h3" style={{ marginTop: '20px', marginBottom: '20px' }}>Participants</Typography>
              <hr />
              <Typography variant="subtitle1" style={{ marginTop: '40px' }}>Adults</Typography>
              <TextField type="number" value={adults} onChange={(e) => setAdults(e.target.value)} fullWidth variant="outlined" size="small" style={{ backgroundColor: "white", marginBottom: '40px' }} />
              <Typography variant="subtitle1">Currency*</Typography>
              <Select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                size="small"
                style={{ marginTop: '8px', marginBottom: '16px', width: "100%", backgroundColor: "white", height: "3.8vh" }}
              >
                {currencies.map((currency) => (
                  <MenuItem key={currency.code} value={currency.code}>
                    {currency.code} - {currency.name}
                  </MenuItem>
                ))}
              </Select>
              <Typography variant="subtitle1">Payment*</Typography>
              <TextField value={payment} onChange={(e) => setPayment(e.target.value)} fullWidth variant="outlined" size="small" style={{ backgroundColor: "white" }} />

              <Typography variant="subtitle1">Discount</Typography>
              <TextField value={discount} onChange={(e) => setDiscount(e.target.value)} fullWidth variant="outlined" size="small" style={{ backgroundColor: "white" }} />
              <Typography variant="subtitle1">Ext. booking ref</Typography>
              <TextField value={bookingRef} onChange={(e) => setBookingRef(e.target.value)} fullWidth variant="outlined" size="small" style={{ backgroundColor: "white" }} />
              <FormControlLabel
                control={<Checkbox checked={emailTicket} onChange={(e) => setEmailTicket(e.target.checked)} color="primary" />}
                label="Email ticket"
              />

            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={4} lg={6} style={{ backgroundColor: "#F0F0F0", borderRadius: "3px", padding: "20px" }}>
              <Typography variant="subtitle1">Customer</Typography>
              <Typography variant="subtitle1">First name*</Typography>
              <TextField
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                variant="outlined"
                size="small"
                style={{ backgroundColor: "white" }}
              />
              <Typography variant="subtitle1">Last name*</Typography>
              <TextField value={lastName} onChange={(e) => setLastName(e.target.value)} fullWidth variant="outlined" size="small" style={{ backgroundColor: "white" }} />
              <Typography variant="subtitle1">Email</Typography>
              <TextField value={email} onChange={(e) => setEmail(e.target.value)} fullWidth variant="outlined" size="small" style={{ backgroundColor: "white" }} />
              <Typography variant="subtitle1">Phone number</Typography>
              <TextField
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                fullWidth
                variant="outlined"
                size="small"
                style={{ backgroundColor: "white" }}
              />
              <Typography variant="subtitle1">Nationality</Typography>
              <TextField value={nationality} onChange={(e) => setNationality(e.target.value)} fullWidth variant="outlined" size="small" style={{ backgroundColor: "white" }} />
              <Typography variant="subtitle1">Organization</Typography>
              <TextField
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                fullWidth
                variant="outlined"
                size="small"
                style={{ backgroundColor: "white" }}
              />
              <Typography variant="h6">Note for booking</Typography>
              <TextField
                value={bookingNote}
                onChange={(e) => setBookingNote(e.target.value)}
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                size="small"
                style={{ backgroundColor: "white" }}
              />
              <Typography variant="h6">Note for finance reports</Typography>
              <TextField
                value={financeNote}
                onChange={(e) => setFinanceNote(e.target.value)}
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                size="small"
                style={{ backgroundColor: "white" }}
              />
              <Typography variant="h6">Note for operations reports</Typography>
              <TextField
                value={operationsNote}
                onChange={(e) => setOperationsNote(e.target.value)}
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                size="small"
                style={{ backgroundColor: "white" }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={4} style={{ borderRadius: "3px", padding: "7px", height: "50%" }}>
            {adults >= 1 && (
    <>
  <Typography variant="h3">Customer Invoice</Typography>
  <Paper elevation={3} style={{ padding: "20px", borderRadius: "3px", height: "100%" }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
                  <Grid md={12} lg={12} sm={1} xs={1}>

      <div style={{ display: 'flex',justifyContent:"center", marginBottom: '10px' ,marginLeft:"1vw"}}>
        <Typography variant="h6" style={{ marginRight: '1vw', fontWeight: "400" }}>Quantity</Typography>
        <Typography variant="h6" style={{ marginRight: '1vw',  fontWeight: "400" }}>Unit price</Typography>
        <Typography variant="h6" style={{ marginRight: '1vw',  fontWeight: "400" }}>Discount</Typography>
        <Typography variant="h6" style={{ marginRight: '1vw', fontWeight: "400" }}>Tax</Typography>
        <Typography variant="h6" style={{ marginRight: '1vw',  fontWeight: "400" }}>Amount</Typography>
      </div>
                  </Grid>
     
      <div style={{ backgroundColor: "whitesmoke", marginBottom: '10px', padding: '5px 10px', borderRadius: '3px' }}>
        <Typography variant="subtitle1" style={{ fontWeight: "500", marginTop: "0px", marginBottom: "0px" , marginLeft:"2vw", marginRight:"2vw"}}>Mehrauli Walking Tour - Sun, July 09 2023 - 09:00</Typography>
      </div>
      
      <div style={{ display: 'flex', justifyContent:"center", marginBottom: '10px' , marginLeft:"1vw"}}>
        {/* <Typography variant="h6" style={{ marginRight: '1vw' }}>Adults</Typography> */}
        <Typography variant="h6" style={{ marginRight: '3vw',marginLeft:"2vw"  }}>{adults}</Typography>
        <Typography variant="h6" style={{  marginRight: '2vw'}}>₹{unitPrice.toFixed(2)}</Typography>
        <Typography variant="h6" style={{ marginRight: '1vw' }}>{discountPercent}%</Typography>
        <Typography variant="h6" style={{  marginRight: '1vw' }}>₹{taxAmount.toFixed(2)}</Typography>
        <Typography variant="h6" style={{ marginRight: '1vw' }}>₹{amountDue.toFixed(2)}</Typography>
      </div>
    </div>
<hr style={{ fontSize:"100"}} />
<hr/>
    <Typography variant="subtitle1" style={{ marginTop: "20px", textAlign: "right" }}>Subtotal:</Typography>
    <Typography variant="subtitle1" style={{ textAlign: "right" }}>₹{(adults * unitPrice).toFixed(2)}</Typography>
    <Typography variant="subtitle1" style={{ textAlign: "right" }}>Including GST:</Typography>
    <Typography variant="subtitle1" style={{ textAlign: "right" }}>₹{taxAmount.toFixed(2)}</Typography>
    <Typography variant="subtitle1" style={{ textAlign: "right" }}>Amount due:</Typography>
    <Typography variant="subtitle1" style={{ textAlign: "right" }}>₹{amountDue.toFixed(2)}</Typography>
  </Paper>
  </>
  )}
</Grid>
            <Grid item xs={12} style={{ position: "relative" }}>
              <Button
                variant="contained"
                onClick={handleSubmit}
                style={{
                  padding: '8px',
                  border: '0.5px',
                  borderRadius: '6px',
                  height: '52px',
                  width: '7%',
                  marginTop: '-19vh',
                  marginLeft: '10px',
                  marginBottom: '20px',
                }}
              >
                Save
              </Button>

              <Button
                variant="outlined"
                onClick={() => {
                  // Reset all form fields
                  setRate('');
                  setParticipants('');
                  setAdults(0);
                  setCurrency('');
                  setPayment('');
                  setDiscount('');
                  setBookingRef('');
                  setEmailTicket(false);
                  setFirstName('');
                  setLastName('');
                  setEmail('');
                  setPhoneNumber('');
                  setNationality('');
                  setOrganization('');
                  setBookingNote('');
                  setFinanceNote('');
                  setOperationsNote('');
                }}
               style={{
                  padding: '8px',
                  border: '0.5px',
                  borderRadius: '6px',
                  height: '52px',
                  width: '7%',
                  marginTop: '-19vh',
                  marginLeft: '10px',
                  marginBottom: '20px',
                  color: 'whitesmoke',
                  backgroundColor: 'grey',
                }}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default Bookbytime;
