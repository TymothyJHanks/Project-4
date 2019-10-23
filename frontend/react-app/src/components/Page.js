import React from 'react' //importing react 

//Outside Imports
import { ScrapeProvider } from '../components/ScrapeContext'; //importing scrape provider from ScrapeContext.js
import '../css/Page.css' //importing css that only acts on the elements within the components and not the components itself
import {useEffect, useState} from 'react';




function useScrapes(){ //creating a custom hook
    const [scrapes, setScrapes] = useState({}); //creating a variable called scrapes and a handleer called setScrapes to handle that specific state and we are setting this entire thing to be returned as an object within the useState({})

  useEffect(function() { //needed to pass another anonymous function at the beginning to make things work
      (async()=>{
      console.log('Mounting or Updating') //console logging the beginning of this functon taking place a reference

      const responce = await fetch('http://localhost:4000/all-data'); //fetching our data from our backend server and placing it into a variable 
      const backendData = await responce.json();//awaiting our fetch and turning it into JSON that we place inside a variable
      console.log(backendData); //console logging our data
    //   setScrapes(backendData) //storing out fetched data into our interall state 
  })();  //needed to return an anonymous function immediately after because async returns a promise and that promise needs to be resolved so this is one way around it - also, this puts all the data that we fetch into an array
}, []); //returns the entire function of the fetch call data and stores inside an array

    return scrapes; //we return the array
}



function Page({children}){
    //FUNCTIONS
    const scrapes = useScrapes() //placing the data that we get from our setState above into a variable

    //RENDERING/RETURNING
    return(
        // Wrapping entire div inside the scrape provider - if want to style the provider then need to do that in a css folder then import the stying
        <ScrapeProvider value={{ //Passing props inside this provider as a value object to be called globally using hooks and React.createContext
            hey:'ho ho ho',
            lets: 'go',
            scrapes //passing scrapes variable down as a value ie this is the data we are getting from our fetch request that we are plugging into the interal setState
        }}> 
        <div className="Page">
            {/* This destructoring the Props.Children */}
            {children}
        </div>
        </ScrapeProvider>
    ) 
}

export default Page 