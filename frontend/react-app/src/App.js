import React from 'react';
import logo from './logo.svg';
import './App.css';

//Outside Imports
import Page from '../src/components/Page' //importing page which is being styled
import Data from '../src/components/Data'




function App() {
  return (
    <Page>
      <h2>Home Page</h2>
      <Data/>
    </Page>
  );
}

export default App;
