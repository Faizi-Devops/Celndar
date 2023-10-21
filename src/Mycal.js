import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CustomToolbar from './components/CustomToolbar';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import iso3166 from 'iso-3166-1-alpha-2';

const Mycal = () => {
  const count = useSelector((state) => state.todoing.value);
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([]);
  const API_KEY = "izaKjaLpPasG8W79SMc4CdZWX4IC0Via";

  useEffect(() => {
    const fetchHolidays = async () => {
      let countryCode = ''; // Declare countryCode here so it's accessible inside the try block
      try {
        countryCode = iso3166.getCode(count);
        console.log(countryCode);

        const year = new Date().getFullYear(); // Get the current year
        const response = await fetch(`https://calendarific.com/api/v2/holidays?api_key=${API_KEY}&country=${countryCode}&year=${year}`);
        const data = await response.json();

        // Update the events state with fetched holidays
        setEvents(data.response.holidays.map(holiday => ({
          title: holiday.name,
          start: new Date(holiday.date.iso),
          end: new Date(holiday.date.iso),
        })));

        console.log(data.response);
      } catch (error) {
        console.error('Error fetching holidays:', error);
      }
    };

    fetchHolidays();
  }, [count]); // Update the effect dependency to include count only

  return (
    <div>
      <div style={{ height: '600px' }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ margin: '20px', }}
          components={{
            toolbar: CustomToolbar,
          }}
        />
      </div>
    </div>
  );
};

export default Mycal;
