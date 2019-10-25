import React from 'react';
import logo from './logo.svg';
import './App.css';

//Outside Imports
import Page from '../src/components/Page' //importing page which is being styled
import Data from '../src/components/Data'
import IndeedOnly from '../src/components/IndeedOnly'
import MonsterOnly from '../src/components/MonsterOnly'



//Make routes to different pages when things are clicked and make the hover effect stuff here too

function App() {
  return (
    <Page>
      {/* <Data/> */}
      {/* <IndeedOnly/> */} 
      {/* <MonsterOnly/> */}
    </Page>
  );
}

export default App;
