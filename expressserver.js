var express= require("express");

var app= express();



var port=process.env.PORT || 8080

app.listen(port,function(req,res){
	console.log("Express server");	
});
	
app.get("/",function(req,res){
	res.end("Express");
})

app.get("/getData",function(req,res){
	
	res.json([{name:"amit",age:"12"},{name:"asit",age:"34"},{name:"zafir",age:"66"}]);
});