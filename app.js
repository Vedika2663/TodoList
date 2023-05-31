const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items=["Buy Food","Cook Food","Eat Food"];
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    var today= new Date();
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    var day=today.toLocaleDateString("en-US",options);
    
    res.render("list",{kindOfDay: day, newItems: items});

});
app.post("/",function(req,res){
    var item=req.body.newItem;
    items.push(item);
    res.redirect("/");
    var checkedItem=req.body.listItem;
    
    for(var i=0;i<items.length;i++){
        //var isChecked=document.getElementById("checkedItem.value");
        if(checkedItem=="true"){
            console.log(items[i]);
        }
    }
    
})
app.listen(3000, function(){
    console.log("running");
});