import React from "react";
import logo from "./logo.svg";
import "./App.css";

//Outside Imports
import Page from "../src/components/Page"; //importing page which is being styled
import Data from "../src/components/Data"; //this is both components data in one component
import IndeedOnly from "../src/components/IndeedOnly";
import MonsterOnly from "../src/components/MonsterOnly";

//Make routes to different pages when things are clicked and make the hover effect stuff here too
 


function App() {
  return (
    <Page>
      <div className="appWrapperBody">
        <div className="all">


          <div className="left">
            <div className="text">Indeed</div>
          </div>

          <div className="center">
            <div className="text">Monster and Indeed</div>
            <div className="explainer"><span>Search Jobs</span></div>
          </div>


          <div className="right">
            <div className="text">Monster</div>
          </div>



        </div>
      </div>
    </Page>
  );
}

export default App;
