import express from 'express'; //importing express app
import { getIndeedData, getMonsterData} from './lib/scraper'; //importing our getHtml && getJobListings functions from scrapper.js
import db from './lib/db';
import './lib/cron'; //importing Cron Job so it auto runs when the file boots up


//START TO CREATE AN EXPRESS APP
const app = express();


app.get('/scrape', async (req,res,next)=> { //this creates an endpoint that the user can go to in our server
    console.log('scrapping!')
    const [allIndeedDataPromised, allMonsterDataPromised] = await Promise.all([ getIndeedData(), getMonsterData() ]); //setting two variable at a time within an array and waiting till both functions are done with their Promise - passing in paramaters to make the functions dynamic based on user input"

    //RETURNING JSON
    res.json({ allIndeedDataPromised, allMonsterDataPromised}) //turning the data into JSON so it can be displayed
});

app.get('/all-data', async(req, res, next)=>{
    const getAllData = db.value()
    res.json(getAllData)
})

app.listen(4000, () => console.log(`App is running on http://localhost:4000`))