const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const items = require('./routes/apis/items');
const users = require('./routes/apis/users');

const app = express();


//BodyParser Middleware adding
app.use(express.json());

//connect to Mongo DB === read this later from env
const db = config.get('mongo_URI')
mongoose.connect(db,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        }
    )
    .then(()=>console.log('Connected to Mongo DB'))
    .catch((err)=>console.log(err));


app.use('/api/items',items);
app.use('/api/users',users);


//Setting up for running on heroku
//Setting static folder when in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/public'));

    app.get('*',(req,res)=>{
        res.sendfile(path.resolve(__dirname,'client','build','index.html'));
    });
}


//run on port
const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server started on port ${port}`));