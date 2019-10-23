import axios from 'axios'; //importing axios
import cheerio from 'cheerio'; //importing cheerio
import db from './db'

export async function getHTML (url) {
    const {data: html} = await axios.get(url); //this goes to the link and returns the entire html page in .json so we may use cheerio to scrape the data - putting everything into a {data} destructoring property so it returns the actually way we want the data to look to use cheerio with  
    // console.log(html) //console loging the results in the terminal
    return html;
}

export async function getJobListings(html){ //This is specifically for indeed.com
     const $ = cheerio.load(html) //setting cheerio to a variable to use 
    const jobTitle = $('.jobsearch-SerpJobCard .title').text().trim().split("\n"); //this searches the class on the website and then searches inside that class for a title class with the data I want and grabs the specific innerHTML text of each thing - the first '.reaplce' cleans up the /n's and the second ',replace' removes any line spacing - the '.text' method is specifically getting the text within the dom and its a method from cheerio - //.trim gets rid of the white space and .split gets ride of the \n's to make everything closer
    const jobLocation = $('.jobsearch-SerpJobCard .sjcl').text().trim().split("\n"); //.text is a method from cheerio - .trim gets rid of white space in the data being returned - .split splits the data and gets rid of the \n's that plage our json - you NEED TO TRIM AND GET RID OF WHITE SPACE BEFORE YOU SPLIT OR IT WONT WORK
    const jobPay = $('.jobsearch-SerpJobCard .salarySnippet').text().trim().split("\n")
    const jobDescription = $('.jobsearch-SerpJobCard .summary').text().trim().split("\n");
    const allInfo = {jobTitle, jobLocation, jobPay, jobDescription}
    return (allInfo); //this is needed because you can only return one thing so I made an array of multiple variable and returns them all
 }

 export async function getJobListingsMonster(html){ //This is specifically for monster.com
    const $ = cheerio.load(html);
    const jobTitleM = $('.flex-row .summary .title').text().trim().split("\n"); //grabing the job titles nested in 3 classes
    const jobCompanyM = $('.flex-row .summary .company .name').text().trim().split("\n"); //grabing the company name data nested 3 classes deep
    const jobLocationM = $('.flex-row .summary .location .name').text().trim().split("\n");//grabing the location name data nested 3 classes deep
    const allInfoM = {jobTitleM, jobCompanyM, jobLocationM} //placing each variable into an array because if we dont, we cant return multiple variables
    return(allInfoM) //returning the entire array 
 } 


 
//Making smaller functions to be able to get the data
export async function getIndeedData(jobTitle = 'software', jobCity = 'washington', jobState = 'dc'){
    const htmlIndeed = await getHTML(`https://www.indeed.com/q-${jobTitle}-l-${jobCity},-${jobState}-jobs.html`); //this grabs the html link using axios being imported from our getHTML function and saves it in a variable
    const allIndeedData = await getJobListings(htmlIndeed); //after the data comes back from the links, this is setting all the data into a variable and passing it into our function being imported
    return allIndeedData
}

export async function getMonsterData(jobTitle = 'software', jobCity = 'washington', jobState = 'dc'){
    const htmlMonster = await getHTML(`https://www.monster.com/jobs/search/?q=${jobTitle}&where=${jobCity}__2C-${jobState}&intcid=skr_navigation_nhpso_searchMain&stpage=1&page=5`); //this grabs the html link using axios being imported from our getHTML function and saves it in a variable
    const allMonsterData = await getJobListingsMonster(htmlMonster) //after the data comes back from the links, this is setting all the data into a variable and passing it into our function being imported
    return allMonsterData
}



//AUTO RUN FILE FUNCTION NODE-CRON
export async function runCron() { //This function is able to automatically run our index.js file to scrape the data for us so we dont need to manually run these files
    // console.log('scrapping!')
    const [allIndeedDataPromised, allMonsterDataPromised] = await Promise.all([ getIndeedData(), getMonsterData() ]); //setting two variable at a time within an array and waiting till both functions are done with their Promise - passing in paramaters to make the functions dynamic based on user input"
    // console.log(allIndeedDataPromised, allMonsterDataPromised) //console.loging the data
     

    //WRITTING TO DATABASE INDEED DATA
    db.get('indeed').push({ //pushing our indeed scrapped data into our lowdb data base
        datePosted: Date.now(), //adding a time stamp of when each job was posted
        indeedJobs: allIndeedDataPromised //adding another key value pair which includes our data
    }).write() //this writes everything inside this object into our data base
  

    //WRITING TO DATABASE MONSTER DATA
    db.get('monster').push({ //pushing our indeed scrapped data into our lowdb data base
        datePosted: Date.now(), //adding a time stamp of when each job was posted
        monsterJobs: allMonsterDataPromised //adding another key value pair which includes our data
    }).write() //this writes everything inside this object into our data base


    // //RETURNING JSON
    // res.json({ allIndeedDataPromised, allMonsterDataPromised}) //turning the data into JSON so it can be displayed

    console.log('done!')
} 