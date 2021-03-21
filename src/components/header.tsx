import React from 'react';
import moment from 'moment';

const Header: React.FC = ()=> {
  const month = moment().format("MMMM");
  const year = moment().format("YYYY");
  return(
    <>
      <h1><strong>{month}</strong> {year}</h1>
    </>
  )

}

export default Header;