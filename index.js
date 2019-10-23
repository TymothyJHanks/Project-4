import {getHTML, getJobListings} from './lib/scraper'; //importing our getHtml && getJobListings functions from scrapper.js


async function go(){
    getJobListings( await getHTML('https://www.indeed.com/q-software-l-washington,-DC-jobs.html'));
}

go();