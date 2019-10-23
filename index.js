import express from 'express'; //importing express app
import { getIndeedData, getMonsterData} from './lib/scraper'; //importing our getHtml && getJobListings functions from scrapper.js
import db from './lib/db'


//START TO CREATE AN EXPRESS APP
const app = express();

console.log(db)

app.get('/scrape', async (req,res,next)=> {
    console.log('scrapping!')
    const [allIndeedDataPromised, allMonsterDataPromised] = await Promise.all([ getIndeedData(), getMonsterData() ]); //setting two variable at a time within an array and waiting till both functions are done with their Promise - passing in paramaters to make the functions dynamic based on user input"
    console.log(allIndeedDataPromised, allMonsterDataPromised) //console.loging the data
    res.json({ allIndeedDataPromised, allMonsterDataPromised})
});


app.listen(3000, () => console.log('App is running on https://localhost:3000'))