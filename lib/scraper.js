import axios from 'axios'; //importing axios
import cheerio from 'cheerio'; //importing cheerio

export async function getHTML (url) {
    const {data: html} = await axios.get(url); //this goes to the link and returns the entire html page in .json so we may use cheerio to scrape the data - putting everything into a {data} destructoring property so it returns the actually way we want the data to look to use cheerio with  
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

 export async function getJobListingsMonster(html){ //This is specifically for monster.com
    const $ = cheerio.load(html);
    const jobTitleM = $('.flex-row .summary .title').text() //grabing the job titles nested in 3 classes
    const jobCompanyM = $('.flex-row .summary .company .name').text() //grabing the company name data nested 3 classes deep
    const jobLocationM = $('.flex-row .summary .location .name').text()//grabing the location name data nested 3 classes deep
    const allInfoM = [jobTitleM, jobCompanyM, jobLocationM] //placing each variable into an array because if we dont, we cant return multiple variables
    return(allInfoM) //returning the entire array 
 } 


 
