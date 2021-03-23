import React from 'react'
import { Table } from 'semantic-ui-react'
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

import CellInCalendar from './cellInCalendar';

const TableExamplePositiveNegative = () => {
  
  const today = Number(moment().format('DD'));
  let daysInCalendar = 0;

  const initialDayWeek = moment().set('date', 1).get('d');
  const daysInWeek = moment.weekdays();

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          {daysInWeek.map( dayOfWeek => 
            <Table.HeaderCell key={uuidv4()} width={2} textAlign='center'>
              {dayOfWeek}
            </Table.HeaderCell>)
          }
        </Table.Row>
      </Table.Header>

      <Table.Body>
          {Array.from(Array(5).keys()).map((week: number) => (
            <Table.Row verticalAlign='top' key={uuidv4()} >
              {Array.from(Array(7).keys()).map( (daysOnWeek: number) => {
                if(week === 0 && daysOnWeek>=initialDayWeek || week > 0 )
                  daysInCalendar++
                
                return(
                    <CellInCalendar 
                      week={week} 
                      daysOnWeek={daysOnWeek} 
                      daysInCalendar={daysInCalendar}
                      today={today}
                      key={uuidv4()}
                    />
                )} 
              )}
            </Table.Row>
          ))}
      </Table.Body>
    </Table>
  )
}

export default TableExamplePositiveNegative