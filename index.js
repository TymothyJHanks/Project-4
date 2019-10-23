import {getHTML, getJobListings, getJobListingsMonster} from './lib/scraper'; //importing our getHtml && getJobListings functions from scrapper.js


async function go(jobTitle = 'software', jobCity = 'washington', jobState = 'dc'){ //this is creating a function with paramaters so that we can get user input to make these links dynamic based on what the user types in
const indeedPromise = getHTML(`https://www.indeed.com/q-${jobTitle}-l-${jobCity},-${jobState}-jobs.html`); //this grabs the html link using axios being imported from our getHTML function and saves it in a variable
const monsterPromise = getHTML(`https://www.monster.com/jobs/search/?q=${jobTitle}&where=${jobCity}__2C-${jobState}&intcid=skr_navigation_nhpso_searchMain&stpage=1&page=5`); //this grabs the html link using axios being imported from our getHTML function and saves it in a variable
const [indeedHTML, monsterHTML] = await Promise.all([indeedPromise, monsterPromise]); //this is setting two new variables and awaiting the data being returned from each link at once then saving them both in their own separate variables
const allIndeedData = await getJobListings(indeedHTML); //after the data comes back from the links, this is setting all the data into a variable and passing it into our function being imported
const allMonsterData = await getJobListingsMonster(monsterHTML) //after the data comes back from the links, this is setting all the data into a variable and passing it into our function being imported
console.log(`ALL INDEED DATA HERE: ${allIndeedData} ALL MONSTER DATA HERE: ${allMonsterData}`)
}

go();