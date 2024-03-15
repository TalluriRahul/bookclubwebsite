const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://tallurirahul787:qFHHX3rWDeRjz3hQ@cluster0.f84upct.mongodb.net/bookbee");

const UserSchema=new mongoose.Schema({
  name:String,
  username:String,
  password:String,
  bookscontributed:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"booksdb"
  }
});

const bookSchema=new mongoose.Schema({
  title:String,
  book_unique_no:String,
  Author:String,
  Publisher:String
})

const adminsdb=mongoose.model("Admins",UserSchema);
const clientsdb=mongoose.model("Clients",UserSchema);
const booksdb=mongoose.model("Booksdb",bookSchema);

module.exports={
 adminsdb,
 clientsdb,
 booksdb,
}