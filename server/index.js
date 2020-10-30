const express = require("express");

const app = express();

app.get("/" , (req,res) => {
    res.json({hello : "World"});
});

app.use((req,res,next) => {
    const err = new Error("Not Found");
    err.status = 404;

    next(err);
});

app.use((err,req,res,next) => {
    res.status(err.status || 500).json({
        err: err.message || 'Something went wrong'
    });
});


app.listen(4000, function() {
    console.log("Application running on the port 4000");
})