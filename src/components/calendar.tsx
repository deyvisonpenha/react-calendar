import React, {useState, useEffect,useCallback} from 'react'
import { Icon, Table, Button, Modal, Header, Popup, Input } from 'semantic-ui-react'
import moment from 'moment';
import {Cell} from '../Styles/Global';

interface IscheduleEvent {
  schedule: {
    day: Date | null;
    reminder: string;
    city: string;
    color: string;
  }
}

const TableExamplePositiveNegative = () => {
  const [today, setToday] = useState(0);
  const [open, setOpen] = useState(false);
  const [scheduleEvent, setScheduleEvent] = useState<IscheduleEvent[]>([]);

  const [reminderDate, setReminderDate] = useState<Date>(new Date);
  const [reminder, setReminder] = useState("");

  console.log("reminderDate", reminderDate);

  let daysInCalendar = 1;

  const initialDayWeek = moment().set('date', 1).get('d');
  const daysOfWeek = moment.weekdays();

  useEffect(()=>{
    setToday(Number(moment().format('DD')))
  },[]);
  
  const DisableDayInCalendar = () =>
    <Table.Cell disabled textAlign='right' style={{height: "9rem"}}></Table.Cell> 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name)
    console.log(event.target.value)
  }

  const HandleEvent = (props: {day: number}) => 
    <Modal
      closeIcon
      open={open}
      trigger={props.day<today ? <Button icon='add' disabled/> : <Button icon='add'/>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='archive' content='Schedule a Event' />
      <Modal.Content>
        <Input placeholder='reminder' name="reminder" value={reminder} onChange={handleChange}/>
      </Modal.Content>
      <Modal.Actions>
        <Button color='green' onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Save
        </Button>
      </Modal.Actions>
    </Modal>
  
  
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          {daysOfWeek.map( dayOfWeek => 
            <Table.HeaderCell key={dayOfWeek} width={2} textAlign='center'>
              {dayOfWeek}
            </Table.HeaderCell>)
          }
        </Table.Row>
      </Table.Header>

      <Table.Body>

          {Array.from(Array(5).keys()).map((week: number) => (
            <Table.Row verticalAlign='top' key={`week-${week}`} >
              {Array.from(Array(7).keys()).map( (daysOnWeek: number) => (
                <>
                  {
                    week===0 && daysOnWeek<initialDayWeek || daysInCalendar> moment().daysInMonth()  ? 
                      <DisableDayInCalendar /> : 
                      <Table.Cell textAlign='right' style={{height: "9.5rem"}}>
                          {daysInCalendar ==today ? 
                            <Icon color='red' size='large' circular>
                              {daysInCalendar++}
                            </Icon> :
                            daysInCalendar++
                          }
                        <Cell>
                          <HandleEvent day={daysInCalendar-1}/>
                        </Cell>
                      </Table.Cell>
                  }
                </>
              ) )}
            </Table.Row>
          )
            
          )}
      </Table.Body>
    </Table>
  )
}

export default TableExamplePositiveNegative