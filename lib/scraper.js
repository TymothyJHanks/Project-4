import axios from 'axios'; //importing axios
import cheerio from 'cheerio'; //importing cheerio

export async function getHTML (url) {
    const {data: html} = await axios.get('https://www.indeed.com/q-software-l-washington,-DC-jobs.html', ); //this goes to the link and returns the entire html page in .json so we may use cheerio to scrape the data - putting everything into a {data} destructoring property so it returns the actually way we want the data to look to use cheerio with  
    // console.log(html) //console loging the results in the terminal
    return html;
}

export async function getJobListings(html){ //This is specifically for indeed.com
     const $ = cheerio.load(html) //setting cheerio to a variable to use 
    //  console.log($) //console logging the results
    const jobTitle = $('.jobsearch-SerpJobCard .title').text() //this searches the class on the website and then searches inside that class for a title class with the data I want and grabs the specific innerHTML text of each thing
    const jobLocation = $('.jobsearch-SerpJobCard .sjcl').text()
    const jobPay = $('.jobsearch-SerpJobCard .salarySnippet').text()
    const jobDescription = $('.jobsearch-SerpJobCard .summary').text()
    const allInfo = [jobTitle, jobLocation, jobPay, jobDescription]
    return (allInfo); //this is needed because you can only return one thing so I made an array of multiple variable and returns them all
 }

 export async function getJobListingsMonster(jobTitleM = 'software',jobLocationCityM = 'washington', jobLocationStateM = 'dc' ){ //This is specifically for indeed.com
    const {data} = await axios.get(`https://www.monster.com/jobs/search/?q=${jobTitleM}&where=${jobLocationCityM}__2C-${jobLocationStateM}&intcid=skr_navigation_nhpso_searchMain`)
    console.log(data)
 } 


 
