import axios from 'axios'; //importing axios
import cheerio from 'cheerio'; //importing cheerio

async function getHTML (url) {
    const {data: html} = await axios.get('https://www.indeed.com/q-software-l-washington,-DC-jobs.html', ); //this goes to the link and returns the entire html page in .json so we may use cheerio to scrape the data - putting everything into a {data} destructoring property so it returns the actually way we want the data to look to use cheerio with  
    // console.log(html) //console loging the results in the terminal
    return html;
}

 async function getJobListings(html){
     const $ = cheerio.load(html) //setting cheerio to a variable to use 
    //  console.log($) //console logging the results
    const jobTitle = $('.jobsearch-SerpJobCard .title') //this searches the class on the website and then searches inside that class for a title class with the data I want
    console.log(jobTitle.text()) //.text specifically returns the innerHTML text data I want aka the title

 }

export {getHTML, getJobListings}; //exporting our functions

