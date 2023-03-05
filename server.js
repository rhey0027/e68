const express=require('express');
const app=express();
//--set the view engine
app.set("view engine", "ejs");

//-home
app.get("/",(req,res)=>{
      //--use rest.render to send file
      let user={
            isAdmin: false
      }
      res.render("index",{user});
});
//--about
app.get("/about",(req,res)=>{

      res.render("about");
});
//--contact
app.get("/contact",(req,res)=>{

      res.render("contact");
});


//--routes section
//-profile
app.get("/profile",(req,res)=>{
      //create sample payload
      //let user = "rhey yu"
      let user = {
            name: "rhey yu developer",
            age: "14",
            company:"dev comm"
      }
      //--use rest.render to send file
      res.render("profile",{user});
});
//-post
app.get("/post",(req,res)=>{
      //--use rest.render to send file
      //array of objects
      const post=[
            {
                  title:"html training",
                  duration:"1 months"
            },
            {
                  title:"Php training",
                  duration:"2 months"
            },
            {
                  title:"Javascript training",
                  duration:"3 months"
            },
            {
                  title:"Full Stack training",
                  duration:"4 months"
            }
      ];
      res.render("post",{post});
});
app.listen(3000,()=>{
      console.log("Server running at port 3000");
});