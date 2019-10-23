import axios from 'axios'; //importing axios
import cheerio from 'cheerio'; //importing cheerio

async function getHTML (url) {
    const {data: html} = await axios.get('https://www.indeed.com/q-software-l-washington,-DC-jobs.html', ); //this goes to the link and returns the entire html page in .json so we may use cheerio to scrape the data - putting everything into a {data} destructoring property so it returns the actually way we want the data to look to use cheerio with  
    // console.log(html) //console loging the results in the terminal
    return html;
}

 async function getJobListings(html){
     const $ = cheerio.load(html) //setting cheerio to a variable to use 
     console.log($) //console logging the results

 }

export {getHTML, getJobListings}; //exporting our functions