require("./globals")

var express = require("express"),
    http = require("http");

var app = express();


var routes = Util.requireDir(__dirname + "/routes");
_.each(routes, function (fn, segment) {
  var route = express.Router();
  route = fn(route);
  //make the home router as start router
  if(_.isEqual(segment, "home")) segment = "";

  app.use("/" + segment, route);
})

var port = process.env.PORT || 80;
http.createServer(app).listen(port, function (err) {
  if(err) {
    console.error("ERROR:", err)
  } else {
    console.log("Application Started on Port", port)
  }
})
