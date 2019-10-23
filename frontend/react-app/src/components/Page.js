import React from 'react' //importing react 
import { ScrapeProvider } from '../components/ScrapeContext'; //importing scrape provider from ScrapeContext.js
import '../css/Page.css' //importing css that only acts on the elements within the components and not the components itself

function Page({children}){
    return(
        // Wrapping entire div inside the scrape provider - if want to style the provider then need to do that in a css folder then import the stying
        <ScrapeProvider value={{ //Passing props inside this provider as a value object to be called globally using hooks and React.createContext
            hey:'ho ho ho',
            lets: 'go'
        }}> 
        <div className="Page">
            {/* This descructors the Props.Children */}
            {children}
        </div>
        </ScrapeProvider>
    ) 
}

export default Page