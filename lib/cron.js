import cron from 'node-cron'; //importing cron
import {runCron} from '../lib/scraper'; //importing scraper

cron.schedule('* * * * *', () => {
    console.log("Running the Cron Job");
    runCron();
})

