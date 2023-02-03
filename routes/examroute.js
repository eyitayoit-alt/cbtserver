
var express = require('express');
const router = express.Router();
let session=require("express-session")
// This will help us connect to the database
const ObjectId = require("mongodb").ObjectId;
//const connect =require ('../db/conn')
const { Student,Subject,Scores } = require( '../models/model');
//connect();
const dbo = require("../db/connection")
const client=dbo.client
const db=dbo.dbConnect()
var sess;
function isLoggedIn(req, res, next) {
    if(sess.reg_id) return next();
    res.json("Unauthorised Access")
  }

router.post('/login',  async function(req,res){
      
    const display_name=req.body.displayname;
    const reg_id=parseInt(req.body.regId);
    const result= await client.db('exam').collection('Student').findOne({reg_id:reg_id});
    if(result){
    
    
        sess=req.session
        sess.reg_id=result.reg_id
        res.json(result)
    }
    else{
        
    const student=await client.db('exam').collection('Student').insertOne({display_name,
    reg_id})
    sess=req.session
    sess.reg_id=result.reg_id
    res.json(student)
    
   
    };
   
    
   
})
 
router.get('/exam',isLoggedIn,  async function(req,res){
    try{
    const questions= client.db('exam').collection('Question').find({})
    const value=await questions.toArray();
    
    res.json(value)
    
    }catch(error){
      console.log(error)
    }

})
router.post('/getscores',isLoggedIn, async function(req,res){
    
    const reg_id=parseInt(req.body.reg_id)
    const scorefind= await client.db('exam').collection('Scores').findOne({reg_id:reg_id});
        console.log(scorefind);
    
        res.json(scorefind)
    
    

    

})
router.post('/scores',isLoggedIn, async function(req,res){
    const score=parseInt(req.body.scores)
    const reg_id=parseInt(req.body.reg_id)
    const scorefind= await client.db('exam').collection('Scores').findOne({reg_id:reg_id});
    if(scorefind){
    
        let myquery = { reg_id:reg_id};
        const updatedScores={$set:{reg_id:reg_id,
                             score:score},}
        const scoresRecord= client.db('exams').collection('Scores').updateOne(myquery,updatedScores)
        res.json("Scores succesfully Updated");
    }
    else{
        const scorestore=await client.db('exam').collection('Scores').insertOne({reg_id,
            score});
            res.json("Scores succesfully Updated");
    }

    

})

router.get("/logout",(req,res)=>{
    req.session.destroy()
    res.json("succesfully Logout")
})
module.exports= router
