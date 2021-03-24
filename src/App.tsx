import React from 'react';
import 'semantic-ui-css/semantic.min.css'

import Calendar from './components/calendar'
import Header from './components/header'

import {Container} from './Styles/Global'

const App: React.FC = ()=>{
  return (
     <Calendar />
  );
}

export default App;