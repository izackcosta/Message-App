//IMPORTS
const express = require('express');
const app = express();

const mongoose = require('mongoose');

const keys = require('./keys');

const messageRouter = require('./routers/message.router');

async function ConnectToDatabase()
{
    //console.log(keys.database);
    await mongoose.connect(keys.database);
}

//MIDDLEWARE
app.use(express.static('public'));

app.use(messageRouter);

app.listen(5000, (req,res)=>
{
    ConnectToDatabase().catch(err =>{console.log(err);})
    console.log('server started!');
})