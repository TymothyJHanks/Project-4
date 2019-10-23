import {getHTML} from './lib/scraper'; //importing our getHtml function from scrapper.js


async function go(){
    console.log( await getHTML('https://www.indeed.com/q-software-l-washington,-DC-jobs.html'));
}

go();