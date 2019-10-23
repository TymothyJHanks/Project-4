import {getHTML, getJobListings, getJobListingsMonster} from './lib/scraper'; //importing our getHtml && getJobListings functions from scrapper.js


async function go(){
    // const html = await getHTML('https://www.indeed.com/q-software-l-washington,-DC-jobs.html');
    // const jobT = await getJobListings(html);
    // console.log(`these are your job titles: ${jobT}`)
    const monsterData = await getJobListingsMonster('driver','baltimore','md')
}

go();