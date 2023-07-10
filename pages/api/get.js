// import blockDB
import mongo from './mongo'
import blockDB from './model/todo';
export default async function handler(req, res) {
    const data = await blockDB.find().lean().exec();
    //console.log(data);
    res.status(200).json(data);
}

// create a handler function following hello.js

// get the data from mongo using blockDB.find()

// console.log the data or send the data as response
