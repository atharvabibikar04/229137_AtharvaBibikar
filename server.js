const express=require("express");
const path=require("path");
const app=express();

// writing app.get method for request
app.get('/',function(req,resp){
    resp.sendFile(path.join(__dirname,"./public/index.html"));

})

//connect server on port
app.listen(9999);
console.log("Server is running on port 9999");