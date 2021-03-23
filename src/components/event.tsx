import React, { useState, useEffect } from 'react'
import {Event} from '../Styles/Global'
import { Popup, Button} from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';

interface IscheduleEvent {
  day: Date,
  schedule: {
    reminder: string;
    city: string;
    color: string;
  }
}

interface IProps {
  dayInCalendar: number;
  scheduleEvents: IscheduleEvent[];
}

// Just for development in producton used .env
const API_KEY = "073054246e6389ea3df0233bddeadc7c";

const EventComponent: React.FC<IProps> = ({dayInCalendar, scheduleEvents}) => {
  const [weather, setWeather] = useState("")
  const eventsInCurrentDay = scheduleEvents.filter(events => new Date(events.day).getDate()=== dayInCalendar)
  
  const orderEvents = eventsInCurrentDay.sort(function(a,b){
    return new Date(a.day).getHours() - new Date(b.day).getHours();
  });


  const HandleGetWeather = (city: String) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    fetch(url).then((response) => 
      response.json()
    ).then(json => {
      setWeather(json.weather[0].main)
    })    
  }

  return(
    <Event>
      {orderEvents.map( event => (
        <Popup
          key={uuidv4()}
          content={
            <>
              {HandleGetWeather(event.schedule.city)}
              <h3>{event.schedule.reminder}</h3>
              <h4>At {new Date(event.day).getHours()}H</h4>
              
              <h4> Wheter in {event.schedule.city} is {weather} </h4>
            </>
          }
          on='click'
          positionFixed
          trigger={
            <Button 
              size={"mini"} 
              style={{background: event.schedule.color }} 
            >
              {event.schedule.reminder}
            </Button>}
        />
        ) ) }      
    </Event>
  )
  
}

export default EventComponent;