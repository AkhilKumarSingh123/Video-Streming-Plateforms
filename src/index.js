import {app} from "./app.js"
import dotenv from 'dotenv'
import connectDB from './db/index.js';

dotenv.config({
  path: './.env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO DB Server Failed !!!",err);
})



/*

import express  from 'express'
const app = express()

( async () =>{
  try{
    mongoose.connect(`${process.env.MONGODB_URL}`)
    app.on("error",(error) => {
        console.log("ERROR",error);
        throw error
    })
    app.listen(process.env.PORT, () => {
        console.log(`App is listening oon port ${process.env.PORT}`);
    })
  }
  catch(error){
    console.error("ERROR",error)
    throw err
  }
})()   */