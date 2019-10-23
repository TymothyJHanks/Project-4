import cron from 'node-cron'; //importing cron
import {runCron} from './scraper'; //importing runCron function from scrapper

cron.schedule('* * * * *', () => { //this function sets up our timer that runs the file in a specific interaval thats based on the "*" characters - got to "http://corntab.com/" to find out how to set the time
    console.log("Running the Cron Job"); //console logging when the cron job starts
    runCron(); //running the function thats being imported from scraper which specifically writes to our database
})

