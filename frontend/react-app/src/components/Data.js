import React from 'react'; //importing react
// import {distanceInWords} from "date-fns"; 
import {useContext} from 'react' //importing useContext to be able to use data in other components 
import {ScrapeContext} from '../components/ScrapeContext'; //importing our scrape context from scrapecontext.js - the data in is actually comming from the props passed down from the page.js file from the scrapeContext component in there 

function Data(){

    //Functions
    const {passedDownScrapesData} = useContext(ScrapeContext) //This is a reusable context hook that allows us to pull data from other components specically the ScrapeProvider in Page.js - needed to destructor scrapes because i guess the data is one level deeper

    console.log(passedDownScrapesData)

    //Rendering/Returning
    return(
        <div className="data">
            <h2>Your Data:</h2>
            {/* You are able to use scrapeData.hey because the data being passed down is a prop of an object with key value pairs -  within a compoent thats being represented by the  useContext method - shits wild*/}
            <div className='ScrapedData'>
                <ul>
                {passedDownScrapesData.indeed.map(inCallBack => (
                    <li key={inCallBack.datePosted}>
                        {inCallBack.indeedJobs.jobTitle}
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}


export default Data