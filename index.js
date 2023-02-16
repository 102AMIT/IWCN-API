const express = require('express');
const port = 8000;
const cors = require('cors');
const app = express();
const db = require('./config/sql');

// middleware 
app.use(cors());
app.use(express.json());


// Routes accessible through
app.use('/api',require('./routes'));




app.listen(port,(err)=>{
    if(err) console.log("Error in Backend Server Start", err);
    console.log(`Backend Server Running On PORT : ${port}`)
})