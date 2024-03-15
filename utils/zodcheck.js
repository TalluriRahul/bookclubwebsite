const zod=require("zod");

function userzodcheck(req,res,next){
  const user=req.headers.username;
  const password=req.headers.password;
  const usercheck=zod.string().email();
  const resp1=usercheck.safeParse(user);
  const userpasscheck=zod.string().min(6);
  const resp2=userpasscheck.safeParse(password);
  if(!(resp1.success && resp2.success)){
    res.json({
      'msg':'Please type in valid email or password'
    })
    return;
  }
  next();
}

module.exports={
  userzodcheck
}