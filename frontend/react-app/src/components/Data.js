import React from 'react'; //importing react
// import {distanceInWords} from "date-fns"; 
import {useState} from 'react'; //importing use state so I'll be able to set state in here
import {useContext} from 'react' //importing useContext to be able to use data in other components 
import {ScrapeContext} from '../components/ScrapeContext'; //importing our scrape context from scrapecontext.js - the data in is actually comming from the props passed down from the page.js file from the scrapeContext component in there 

function Data(){ //Main Component that everything is rendering from
    const [displayC, setDisplay] = useState({ //setting my CSS display in state so I can use it to display content when needed
        cssDisplay: 'none'
    }); 
    const log = console.log; //used this so I'm able to console log things easier


    //Functions
    const {passedDownScrapesData} = useContext(ScrapeContext) //This is a reusable context hook that allows us to pull data from other components specically the ScrapeProvider in Page.js - needed to destructor scrapes because i guess the data is one level deeper

    console.log(passedDownScrapesData)

function JobData() {
    passedDownScrapesData.indeed.forEach(callBackEle => {
      const titles =  callBackEle.indeedJobs.jobTitle[1];
        log(titles) //this works for getting the title data
        return(
            <p>{titles}</p>
        )
    });
}

//    JobData();

    //Rendering/Returning
    return(
        <div className="data">
            <h2>Your Indeed Data:</h2>
            {/* You are able to use scrapeData.hey because the data being passed down is a prop of an object with key value pairs -  within a compoent thats being represented by the  useContext method - shits wild*/}
            <div className='ScrapedData'>
                <h4>Job Titles</h4>
                <div className="jobInfo">
                    <ul>
                    {/* This is a function that loops over all the data - gives it a callback - and then displays the data that is being passed through from an array - also logs a key for the loop that is mandatory */}
                    {passedDownScrapesData.indeed.map((inCallBack, i) => (
                        // This is logging a Key value for the loop
                        <li key={i}>

                        {/* This function below grabs diferent titles from the different arrays being posted */}
                        {inCallBack.indeedJobs.jobTitle[1]}  + {inCallBack.indeedJobs.jobPay[1]}

                        {/* This displays my information on the screen  */}
                        <p style={{display: displayC.cssDisplay}}>{inCallBack.indeedJobs.jobLocation[1]}</p>
                        </li>
                    ))}
                    </ul>
                </div>
                {/* This Button sets my display above to block so it will render on the page when clicked */}
                <button onClick={ () => setDisplay( {cssDisplay:'block'} ) }>Get All Job Locations</button>
                <button onClick={ () => setDisplay( {cssDisplay:'none'} ) }>Hide All Job Locations</button>
            </div>
        </div>
    )
}


export default Data