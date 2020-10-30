require("dotenv").config();
const express = require("express");
const handle = require('./controllers');
const cors = require("cors");
const bodyPaser = require("body-parser");

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