const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config();


const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/service2'

mongoose.connect(url ,{useNewUrlParser:true})

const con = mongoose.connection
mongoose.set('debug', true);


con.on('open',() => {

    console.log('connected to mongodb....')
})

// We are using our packages here

app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
 extended: true})); 

app.options('*', cors());
app.use(cors())

//You can use this to check if your server is working


app.get('/', (req, res)=>{
res.send("Application running at Port ")
})


//importing models
require('./model/message');

const script = require("./Routes/script");
app.use("/script", script);

//Start your server on a specified port

app.listen(7000, function (req, res) {
    console.log("node started 7000")
});


