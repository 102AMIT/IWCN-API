const express = require('express');
const port = 8000;
const cors = require('cors');
const app = express();
const db = require('./config/sql');

// middleware 
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    const insert = "INSERT INTO details (title,description) VALUES ('title1','description1')";
    db.query(insert,(err,result)=>{
        console.log(err,"error");
        console.log(result,"result");
        res.send("hello world");

    })
})

app.listen(port,(err)=>{
    if(err) console.log("Error in Backend Server Start", err);
    console.log(`Backend Server Running On PORT : ${port}`)
})