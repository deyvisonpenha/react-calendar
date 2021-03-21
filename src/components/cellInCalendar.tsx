import React, {useState} from 'react'
import moment from 'moment';
import { Table } from 'semantic-ui-react';

interface ICalendarProps{
  week: number;
  daysOnWeek: number;
  daysInCalendar: number;
  today: number;
}

const CellInCalendar = (props: ICalendarProps)=>{
  const [blockedCell, setBlokedCell] = useState(false);
  const initialDayWeek = moment().set('date', 1).get('d');

  function DisableDayInCalendar(){
    return (
      <Table.Cell disabled textAlign='right' style={{height: "9rem"}}></Table.Cell> 
    )
  }

  return (
    <div key={props.daysInCalendar} >

    </div>
  )
  /*
 props.week===0 && props.daysOnWeek<initialDayWeek || props.daysInCalendar> moment().daysInMonth() ?
  <DisableDayInCalendar /> :
    <Table.Cell textAlign='right' style={{height: "9.5rem"}}>
      {props.daysInCalendar == today ? 
        <Icon color='red' size='large' circular>
          {daysInCalendar++}
        </Icon> :
        daysInCalendar++
      }
      <Cell>
        <HandleEvent day={daysInCalendar-1}/>
      </Cell>
    </Table.Cell>
  */
  
}

export default CellInCalendar;