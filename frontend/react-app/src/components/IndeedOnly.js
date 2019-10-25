import React from 'react'; //importing react
// import {distanceInWords} from "date-fns"; 
import {useState} from 'react'; //importing use state so I'll be able to set state in here
import {useContext} from 'react' //importing useContext to be able to use data in other components 
import {ScrapeContext} from '../components/ScrapeContext'; //importing our scrape context from scrapecontext.js - the data in is actually comming from the props passed down from the page.js file from the scrapeContext component in there 
import '../css/Data.css' //importing data css
import { Route, Link} from "react-router-dom";
import HomePage from '../App';


function Data(){ //Main Component that everything is rendering from


    //SETTINGS STATE AND VARIABLES
    const log = console.log; //used this so I'm able to console log things easier
    const [{displayLocationsIndeed, displayPayIndeed, displayDescriptionIndeed}, setDisplay] = useState({ //setting my CSS display in state so I can use it to display content when needed
        displayLocationsIndeed: 'none',
        displayPayIndeed: 'none',
        displayDescriptionIndeed: 'none',
    }); 
    
    const {passedDownScrapesData} = useContext(ScrapeContext) //This is a reusable context hook that allows us to pull data from other components specically the ScrapeProvider in Page.js - needed to destructor scrapes because i guess the data is one level deeper
    
    log(passedDownScrapesData) //Logging te data in te console so I can know whats going on
    

    
    //RENDERING AND RETURNING 
    return( 
        <div className="scrapeData">
        {/* <Link to='/Home'>Home Page</Link> */}
        {/* <Route path="/Home" exact component={App} /> */}

            {/* You are able to use scrapeData.hey because the data being passed down is a prop of an object with key value pairs -  within a compoent thats being represented by the  useContext method - shits wild*/}  
                <div className="Indeed">
            <h2>Your Indeed Data:</h2>
                    <ul>
                    {/* This is a function that loops over all the data - gives it a callback - and then displays the data that is being passed through from an array - also logs a key for the loop that is mandatory */}
                    {passedDownScrapesData.indeed.map((inCallBack, i) => (
                        // This is logging a Key value for the loop
                        <li key={i}>

                        {/* This function below grabs diferent titles from the different arrays being posted */}
                        <h2>Title: {inCallBack.indeedJobs.jobTitle[1,2,3,4,5]}</h2>

                        <h3 style={{display: displayPayIndeed}}> Pay: {inCallBack.indeedJobs.jobPay[1,2,3,4,5]}</h3>

                        {/* This displays my information on the screen  */}
                        <h3 style={{display: displayLocationsIndeed}}> Location: {inCallBack.indeedJobs.jobLocation[1,2,3,4,5]}</h3>

                        {/* This displays my information on the screen  */}
                        <p style={{display: displayDescriptionIndeed}}> Description: {inCallBack.indeedJobs.jobDescription[1,2,3,4,5]}</p>
                        </li>
                    ))}
                    </ul>

                {/* This Button sets my display above to block so it will render on the page when clicked */}
                <div className='allBtnsIndeed'>

                    {/* In these locations button div -  since the state has multiple things, the displayPayIndeed is being set to block but you MUST also set all key value pairs in this state so I need to also set the location back to whatever the location is and not to 'block' or 'none'*/}
                    <div className='locationBtns'>
                <button className="eachBtn" onClick={ () => 
                    setDisplay ( 
                        {
                            displayDescriptionIndeed: displayDescriptionIndeed,
                            displayPayIndeed: displayPayIndeed, //setting the display to "block" to display the information
                            displayLocationsIndeed: 'block' //since this is in the same set state - I need to set this to whatever the CURRENT value of this key is so I set value to ITSELF
                        }
                        )}> Get All Job Locations </button>

                <button className="eachBtn" onClick={ () => 
                    setDisplay ( 
                        {
                            displayDescriptionIndeed: displayDescriptionIndeed,
                            displayPayIndeed: displayPayIndeed, //setting the display to 'none' to hide the information
                            displayLocationsIndeed: 'none', //since this is in the same set state - I need to set this to whatever the CURRENT value of this key is so I set value to ITSELF
                        }
                    )}> Hide All Job Locations </button>
                        </div>


                    {/* In these Descriptions button div -  since the state has multiple things, the displayPayIndeed is being set to block but you MUST also set all key value pairs in this state so I need to also set the location back to whatever the location is and not to 'block' or 'none'*/}
                    <div className='descriptionsBtns'>
                <button className="eachBtn" onClick={ () => 
                    setDisplay ( 
                        {
                            displayDescriptionIndeed: 'block',
                            displayPayIndeed: displayPayIndeed, //setting the display to "block" to display the information
                            displayLocationsIndeed: displayLocationsIndeed //since this is in the same set state - I need to set this to whatever the CURRENT value of this key is so I set value to ITSELF
                        }
                        )}> Get All Job Descriptions </button>

                <button className="eachBtn" onClick={ () => 
                    setDisplay ( 
                        {
                            displayDescriptionIndeed: 'none',
                            displayPayIndeed: displayPayIndeed, //setting the display to 'none' to hide the information
                            displayLocationsIndeed: displayLocationsIndeed, //since this is in the same set state - I need to set this to whatever the CURRENT value of this key is so I set value to ITSELF
                        }
                    )}> Hide All Job Descriptions </button>
                        </div>


                    {/* In these pay button div -  since the state has multiple things, the displayPayIndeed is being set to block but you MUST also set all key value pairs in this state so I need to also set the location back to whatever the location is and not to 'block' or 'none'*/}
                    <div className='payBtns'>
                <button className="eachBtn" onClick={ () => 
                    setDisplay ( 
                        {
                            displayDescriptionIndeed: displayDescriptionIndeed,
                            displayPayIndeed:'block', //setting the display to "block" to display the information
                            displayLocationsIndeed: displayLocationsIndeed, //since this is in the same set state - I need to set this to whatever the CURRENT value of this key is so I set value to ITSELF
                        }
                        )}> Get All Job Salary </button>

                <button className="eachBtn" onClick={ () => 
                    setDisplay ( 
                        {
                            displayDescriptionIndeed: displayDescriptionIndeed,
                            displayPayIndeed:'none', //setting the display to 'none' to hide the information
                            displayLocationsIndeed: displayLocationsIndeed, //since this is in the same set state - I need to set this to whatever the CURRENT value of this key is so I set value to ITSELF
                        }
                        )}> Hide All Job Salary </button>
                    </div>
                </div>
                </div>
        </div>
    )
}


export default Data