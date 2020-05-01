const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const items = require('./routes/apis/items');
const app = express();


//BodyParser Middleware adding
app.use(bodyParser.json());

//connect to Mongo DB === read this later from env
mongoose.connect('mongodb+srv://MajidMongoUser:Mongo2146@cluster0-o3pt4.azure.mongodb.net/local_library?retryWrites=true')
    .then(()=>console.log('Connected to Mongo DB'))
    .catch((err)=>console.log(err));


app.use('/api/items',items);
//run on port
const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server started on port ${port}`));