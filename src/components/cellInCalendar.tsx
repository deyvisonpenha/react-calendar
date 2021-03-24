import React, {useState, useRef, useEffect} from 'react'
import moment from 'moment';
import { Table, Icon, Header, Modal, Button, Form} from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';

import {Cell, Today, HeaderDay, ColorList} from '../Styles/Global';
import Event from './event';
import Input from './elements/input'
import ColorSelect from './elements/ColorSelect';

interface ICalendarProps{
  week: number;
  daysOnWeek: number;
  daysInCalendar: number;
  today: number;
}

interface IscheduleEvent {
  day: Date,
  schedule: {
    reminder: string;
    city: string;
    color: string;
  }
}

const CellInCalendar: React.FC<ICalendarProps> = (props)=>{
  const lastDayInMonth = moment().daysInMonth();
  const [open, setOpen] = useState(false);
  
  const [scheduleEvent, setScheduleEvent] = useState<IscheduleEvent[]>([]);

  const reminderRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const hoursRef = useRef<HTMLInputElement>(null);
  let selectedColor = "#750a0a";

  useEffect(()=>{
    const storageScheduleEvents =  localStorage.getItem('scheduleEvents');
    storageScheduleEvents ? 
      setScheduleEvent(JSON.parse(storageScheduleEvents)) :
      setScheduleEvent(scheduleEvent)
  },[])

  const selectColor = (color: string) => {
    selectedColor = color;
  }

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>, dataForm: any) => {
    event.preventDefault();

    const hours = hoursRef.current ? Number(hoursRef.current.value) : 0
    const scheduleDay = new Date();
    scheduleDay.setDate(props.daysInCalendar)
    scheduleDay.setHours(hours)
    scheduleDay.setMinutes(0)

    const data = {
      day: scheduleDay,
      schedule: {
        reminder: reminderRef.current ? reminderRef.current?.value : "",
        city: cityRef.current ? cityRef.current?.value : "",
        color: selectedColor
      }
    }
    localStorage.setItem('scheduleEvents', JSON.stringify([...scheduleEvent, data]));
    setScheduleEvent( prevScheduleEvent =>  ([...prevScheduleEvent, data]) )
    
    setOpen(false);
  }
  
  const HandleAddEvent = () => {

    return <Modal
      closeIcon
      open={open}
      trigger={props.daysInCalendar<props.today ? <Button icon='add' size='mini' disabled/> : <Button size='mini' icon='add'/>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      key={uuidv4()}
    >
      <Header icon='archive' content='Schedule a Event' />
      <Modal.Content style={{display: "flex", flexDirection: "column", with: "400px" }} >
        
        <Form onSubmit={handleSubmitForm} >
          <Form.Field>
            <Input
              name={'reminder'}
              label='Reminder' 
              placeholder='Max 30 characters' 
              maxLength= {30}
              //style={{marginBottom: "15px" }}
              ref={reminderRef}
              required
            />
          </Form.Field>

          <Form.Field>
            <Input 
              name={'city'} 
              label='City' 
              placeholder='Your City'
              ref={cityRef}
              required
            />
            <Form.Field>
              <Input 
                name={'hours'}
                label='Hour' 
                placeholder='Time in hours'
                ref={hoursRef}
                required
              />
            </Form.Field>
            <Form.Field>
              <ColorList>
                <label htmlFor="">Select Color:</label>
                <ColorSelect selectColor={selectColor.bind(this)}/>
              </ColorList>
            </Form.Field>

          </Form.Field>

          <Modal.Actions>
            <Button color='green' type={"submit"}>
              <Icon name='checkmark' /> Save
            </Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
      
    </Modal>
  }

  return (
    <>  
      {
        props.daysInCalendar === 0 || props.daysInCalendar > lastDayInMonth  ? 
          <Table.Cell disabled style={{height: "9rem"}} />  : 
          <Table.Cell selectable style={{height: "9.5rem"}} >
            <HeaderDay>
              <HandleAddEvent />
              {props.daysInCalendar == props.today ? 
                <Today>
                  <p>{props.daysInCalendar}</p>
                </Today> :
                <p>{props.daysInCalendar}</p>
              }
            </HeaderDay>
            <Cell>
              <Event scheduleEvents={scheduleEvent} dayInCalendar={props.daysInCalendar}/>
            </Cell>          
          </Table.Cell>   
      }
    </>
  )
}

export default CellInCalendar;