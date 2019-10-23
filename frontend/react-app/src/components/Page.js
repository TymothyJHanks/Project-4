import React from 'react' //importing react 
import { ScrapeProvider } from '../components/ScrapeContext'; //importing scrape provider from ScrapeContext.js
import '../css/Page.css'

function Page({children}){
    return(
        // Wrapping entire div inside the scrape provider - if want to style the provider then need to do that in a css folder then import the stying
        <ScrapeProvider> 
        <div className="Page">
            {/* This descructors the Props.Children */}
            {children}
        </div>
        </ScrapeProvider>
    )
}

export default Page