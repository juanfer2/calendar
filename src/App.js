import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {getVacantsServices} from './services/meet.services'

import CanlendarWrapper from './components/CalendarWrapper';

function App() {
  useEffect(() => {
    getVacantsServices().then(rsp => {
      console.log(rsp.data);
      
    }).catch( error => console.log(error))
  }, [])

  return (
    <div className="App">
      <CanlendarWrapper/>
    </div>
  );
}

export default App;
