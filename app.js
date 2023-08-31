//jshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/index.html");
});

app.get("/about",(req,res)=>{
  res.redirect("/#about")
});
app.get("/contact",(req,res)=>{
  res.sendFile(__dirname+"/html/contact.html");
});
app.get("/projects",(req,res)=>{
  res.sendFile(__dirname+"/html/projects.html");
});
app.listen(process.env.PORT||3000);
