import {getHTML, getJobListings, getJobListingsMonster} from './lib/scraper'; //importing our getHtml && getJobListings functions from scrapper.js


async function go(){
    // const html = await getHTML('https://www.indeed.com/q-software-l-washington,-DC-jobs.html');
    // const jobT = await getJobListings(html);
    // console.log(`these are your job titles: ${jobT}`)

    const html = await getHTML('https://www.monster.com/jobs/search/?q=software&where=washington__2C-dc&intcid=skr_navigation_nhpso_searchMain');
    const jobTM = await getJobListingsMonster(html);
}

go();