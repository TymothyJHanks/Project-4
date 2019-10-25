import React from "react";
import { Route, Link, NavLink } from "react-router-dom";
import styled from 'styled-components';
import logo from "./logo.svg";
import "./App.css";
import {useState} from 'react'; //importing use state so I'll be able to set state in here


//Outside Imports
import Page from "../src/components/Page"; //importing page which is being styled
import Data from "../src/components/Data"; //this is both components data in one component
import IndeedOnly from "../src/components/IndeedOnly";
import MonsterOnly from "../src/components/MonsterOnly";


//Make routes to different pages when things are clicked and make the hover effect stuff here too


function App() {

const [{displayLocationsIndeed}, setDisplay] = useState({ //setting my CSS display in state so I can use it to display content when needed
  displayLocationsIndeed: 'block',
}); 

  return (
    <Page>
      
      <div style={{display: 'none'}}>
      <IndeedOnly></IndeedOnly>
      </div>

      <div style={{display: displayLocationsIndeed}}className="appWrapperBody">
        <div  className="all">

        <Link onClick={()=> setDisplay({
          displayLocationsIndeed: 'none'
        })} to="/indeed">
          <div  className="left">
            <div className="text"> Indeed
              </div>
          </div>
        </Link>


          <div className="center">
            <div className="text">Monster and Indeed</div>
            <div className="explainer"><span>Search Jobs</span></div>
          </div>


          <div className="right">
            <div className="text">Monster</div>
          </div>


          <Route path="/indeed" exact component={IndeedOnly} />

        </div>
      </div>
    </Page>
  );
}

export default App;
