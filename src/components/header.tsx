import React, { useState } from 'react';
import moment from 'moment';
import {Button} from 'semantic-ui-react';
import {HeaderStyle} from '../Styles/Global';

interface IProps {
  month: string;
  year: string;
}

const Header: React.FC<IProps> = ({month, year})=> {

  const handleBackwardMonth = () => {
    

  }

  return(
    <HeaderStyle>
      <h1><strong>{month}</strong> {year}</h1>
  
      <div className={"select-month"}>
        <Button icon="backward" onClick={handleBackwardMonth}/>
        <strong>Month</strong>
        <Button icon="forward" />
      </div>

    </HeaderStyle>
  )

}

export default Header;