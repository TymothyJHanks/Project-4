import {getHTML, getIndeedData, getMonsterData} from './lib/scraper'; //importing our getHtml && getJobListings functions from scrapper.js


async function go(jobTitle = 'software', jobCity = 'washington', jobState = 'dc'){ //this is creating a function with paramaters so that we can get user input to make these links dynamic based on what the user types in
const [allIndeedDataPromised, allMonsterDataPromised] = await Promise.all([ getIndeedData(jobTitle, jobCity, jobState), getMonsterData(jobTitle, jobCity, jobState) ]); //setting two variable at a time within an array and waiting till both functions are done with their Promise - passing in paramaters to make the functions dynamic based on user input"
console.log(allIndeedDataPromised, allMonsterDataPromised) //console.loging the data
}

go();