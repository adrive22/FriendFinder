var express = require("express");
var bodyParser = require("body-parser");
var path = require("path"); 


var app = express();
var PORT = 8080;


app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);





app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});