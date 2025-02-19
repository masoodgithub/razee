import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import  dotenv from 'dotenv';
import route from './router/recipientRouter.js';
import cors from 'cors';
import acctRouter from './router/accountRouter.js';
import depositeRouter from './router/depositeRouter.js';

const app = express();

app.use(bodyParser.json());
app.use(cors());
dotenv.config();


const port = process.env.PORT || 7000;
const url =process.env.MONGO_URL;

mongoose.connect("mongodb://localhost:27017/mern").then(()=>{
    
    console.log('DB connected');
    app.listen(8000, ()=>{
        console.log(`Server is running port:8000`)
    })
})
.catch((err) => console.log(err));
app.use('/api/d', depositeRouter)
app.use('/api/ac', acctRouter)
app.use('/api', route)