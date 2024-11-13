const express = require('express');
const app = express();
const router = require('./routes/route');

app.use('/',router);


app.listen(5000,(err)=>{
    if(err) throw err;
    console.log("server listening to port 3000");
}); 