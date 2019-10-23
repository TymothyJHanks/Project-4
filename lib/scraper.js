import axios from 'axios' //importing axios

async function getHTML (url) {
    const urlRes = await axios.get('https://www.indeed.com/q-software-l-washington,-DC-jobs.html', ); //this goes to the link and returns the entire html page in .json so we may use cheerio to scrape the data
    console.log(urlRes) //console loging the results in the terminal
}

export {getHTML}; //exporting our function