require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyPaser = require("body-parser");


const db = require("./models");
const handle = require('./controllers');



const app = express();
app.use(cors());
app.use(bodyPaser.urlencoded({extended:true}));
app.use(bodyPaser.json());

app.get("/" , (req,res) => {
    res.json({hello : "World"});
});

app.use(handle.notFound);

app.use(handle.errors);


app.listen(process.env.PORT, function() {
    console.log("Application running on the port 4000");
})