var express = require('express')
var path = require('path')
var app = express()

app.set('port', (process.env.PORT || 5000))

class Message {
  constructor(username, text) {
	this.username = username;
	this.text = text;
  }
}

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/msgData',function(req,res){
	
	var msgData = [
		new Message("Bosse", "Hejsan"), 
		new Message("Lennart", "Tjo")
	];
	
	res.setHeader('Content-Type', 'application/json')
	res.send(msgData);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})