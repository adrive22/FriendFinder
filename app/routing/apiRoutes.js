//accessing the friends List array from friends.js
var express = require("express");
var friendList=require("../data/friends.js");
var app = express();

module.exports=function(app){
	//get route that displays JSON of friends List
	app.get("/api/friends", function(req, res){
		res.json(friendList);
	});

	app.post("/api/friends", function(req, res){
		friendList.push(req.body);
		res.json(true);
	});
};

