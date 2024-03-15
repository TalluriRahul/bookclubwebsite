const jwt=require("jsonwebtoken");
const PASS="bookbeeadmin@123";

function adminAuth(req,res,next){
  const token=req.headers.authorization;
  try{
  jwt.verify(token,PASS);
  } 
  catch(err){
    res.json({
      'msg':'User not authenticated'
    })
  }
  next();
}
