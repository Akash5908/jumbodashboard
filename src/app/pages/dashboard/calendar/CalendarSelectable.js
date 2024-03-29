import React from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import {calendarData} from "./data";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CalendarWrapper from "./CalendarWrapper";
import {useTranslation} from "react-i18next";
import { Link } from 'react-router-dom';
const {events} = calendarData;
const today = new Date();
const currentYear = today.getFullYear();

const localizer = momentLocalizer(moment);

const CalendarSelectable = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
                   <div style={{marginBottom: '20px',marginTop:"-30px"}}>
                   <Link to="/" style={{ textDecoration: 'none', background: '#f6f6f6', marginBottom: '8vh' }}>Home</Link> {'>'} <span>Bookings</span> {'>'} <span>Booking Calendar</span>
      </div>
            <Typography variant={"h1"} mb={3}>Booking Calendar</Typography>
            <Card>
                <CardContent>
                    <CalendarWrapper>
                        <Calendar
                            localizer={localizer}
                            events={events}
                            selectable
                            defaultView="week"
                            scrollToTime={new Date(1970, 1, 1, 6)}
                            defaultDate={new Date(currentYear, 3, 1)}
                            onSelectEvent={event => alert(event.title)}
                            onSelectSlot={slotInfo =>
                                alert(
                                    `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                                    `\nend: ${slotInfo.end.toLocaleString()}` +
                                    `\naction: ${slotInfo.action}`,
                                )
                            }
                            style={{height: 600}}
                        />
                    </CalendarWrapper>
                </CardContent>
            </Card>
        </React.Fragment>
    );
};

export default CalendarSelectable;
