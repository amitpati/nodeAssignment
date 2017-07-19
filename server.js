var http= require('http');
var server=http.createServer(function(req,res){
	
	res.end("Hello my Node JS server");
	
});

server.listen(3000,function(){
	console.log("Application running on http://localhost:3000")
})