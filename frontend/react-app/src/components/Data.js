import React from 'react'; //importing react
import {useContext} from 'react' //importing useContext to be able to use data in other components 
import {ScrapeContext} from '../components/ScrapeContext'; //importing our scrape context from scrapecontext.js - the data in is actually comming from the props passed down from the page.js file from the scrapeContext component in there 


function Data(){

    //Functions
    const scrapeData = useContext(ScrapeContext) //This is a reusable context hook that allows us to pull data from other components specically the ScrapeProvider in Page.js

    console.log(scrapeData)

 

    //Rendering/Returning
    return(
        <div className="data">
            <h2>Your Data:</h2>
        </div>
    )
}


export default Data