const express = require('express');
const router = express.Router();
const db=require('../config/sql')



router.get('/get',(req,res)=>{
    const sqlGet = "SELECT * FROM details";
    db.query(sqlGet,(err,result)=>{
        res.send(result);
    })
});

router.post('/post',(req,res)=>{
    const {title , description} =req.body;
    const sqlInsert = "INSERT INTO details (title,description) VALUES (?,?)";
    db.query(sqlInsert,[title,description],(err,result)=>{
        if(err) console.log(err,"err");
    })


});



router.delete('/post/remove/:id',(req,res)=>{
    const {id} =req.params;
    const sqlRemove = "DELETE FROM details WHERE id = ?";
    db.query(sqlRemove,id,(err,result)=>{
        if(err) console.log(err,"err");
    })


})

module.exports=router;