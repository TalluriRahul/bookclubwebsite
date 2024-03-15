const router=require("express");
const route=router()
const {clientsdb} =require("../Databases/mongoimp")
const jwt=require("jsonwebtoken");
const { userzodcheck } = require("../utils/zodcheck");

route.post("/signup",userzodcheck, async (req,res)=>{
  const username=req.headers.username;
  const password=req.headers.password;
  const name=req.headers.name;
  await clientsdb.create({
    name,
    username,
    password,
  });
  res.json({
    'msg':'Users created successfully'
  })
})