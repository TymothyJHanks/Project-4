import express from 'express'; //importing express app
import { getIndeedData, getMonsterData} from './lib/scraper'; //importing our getHtml && getJobListings functions from scrapper.js
import db from './lib/db';
import './lib/cron'; //importing Cron Job so it auto runs when the file boots up


//START TO CREATE AN EXPRESS APP
const app = express();

// console.log(db)

app.get('/scrape', async (req,res,next)=> {
    console.log('scrapping!')
    const [allIndeedDataPromised, allMonsterDataPromised] = await Promise.all([ getIndeedData(), getMonsterData() ]); //setting two variable at a time within an array and waiting till both functions are done with their Promise - passing in paramaters to make the functions dynamic based on user input"
    // console.log(allIndeedDataPromised, allMonsterDataPromised) //console.loging the data
    


    // //WRITTING TO INDEED
    // db.get('indeed').push({ //pushing our indeed scrapped data into our lowdb data base
    //     datePosted: Date.now(), //adding a time stamp of when each job was posted
    //     indeedJobs: allIndeedDataPromised //adding another key value pair which includes our data
    // }).write() //this writes everything inside this object into our data base
  

    // //WRITING TO MONSTER
    // db.get('monster').push({ //pushing our indeed scrapped data into our lowdb data base
    //     datePosted: Date.now(), //adding a time stamp of when each job was posted
    //     monsterJobs: allMonsterDataPromised //adding another key value pair which includes our data
    // }).write() //this writes everything inside this object into our data base


    //RETURNING JSON
    res.json({ allIndeedDataPromised, allMonsterDataPromised}) //turning the data into JSON so it can be displayed
});


app.listen(3000, () => console.log('App is running on https://localhost:3000'))