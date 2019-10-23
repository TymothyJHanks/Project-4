import low from "lowdb"; //importing lowdb
import FileSync from "lowdb/adapters/FileSync"; //importing filesync to be able to access our database

//SETTING UP DATABASE

const adapter = new FileSync("db.json"); //connecting to our database file
const db = low(adapter); //connecting lowdb to our .json file so it can write to it
db.defaults({ indeed:[], monster:[] }).write(); //this goes into our .json database and defaults write these data point arrays to store my data in

export default db; 