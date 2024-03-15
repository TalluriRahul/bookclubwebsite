const express=require("express");
const app= express();
const adminnet=require("./adminroutes/admin.js")
// const clientroutes=require("./Clientroutes/c");

app.use("/admin",adminnet);
// app.use("/client",clientroutes);
const PORT=3000;
app.listen(PORT,()=>{
  console.log("Hello Welcome to BookBee!  Borrow and read your favourite books.")
})

