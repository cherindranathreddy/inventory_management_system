
const express = require('express');
let router = express.Router();
const mysql = require('mysql');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbms'
});

router.get("/",(req,res)=>{
    const sqlSelect = "SELECT * FROM CONTACT;";
    db.query(sqlSelect,(err,result)=>{
        if(err) console.log(err);
        //console.log(result);
        res.send(result);
    });
});
router.post('/',(req,res)=>{
    const sqlInsert = "INSERT INTO contact (name,email,message) VALUES(?,?,?);";
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
   console.log(req.body.name);
        db.query(sqlInsert,[name,email,message],(err,result)=>{
            if(err) console.log(err);
            console.log(result);
            res.send(result);

      
    });
    
})


module.exports = router;