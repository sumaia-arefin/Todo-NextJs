import mongo from './mongo'
import blockDB from './model/todo'

export default async function handler(req, res) {
    const data = {
        Name: req.body.Name,
        schedule: req.body.schedule,
        body: req.body.body,
        date: req.body.date,
    }
    // console.log(data)
    const log = new blockDB(data)
    await log
        .save()
        .then((data) => res.status(200).json({ name: data }))
        .catch((err) => res.status(200).json({ name: err }))
}

// I did the task :))
// function handler (req,res){
//   const data= blockDB.find(data)
//   console.log = blockDB(data)
//   log.save()
//   .then ((data)=>res.status(200).json({ name:data}))
//   .catch((err)=>res.status(200).json({ name:err}))

// }
