'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 8080; // Set Default Port for Express and Heroku
// Http Requests
// Express Server
var app = (0, _express2.default)(); // Initialize Express
app.use(logger("dev")); 
app.use(_bodyParser2.default.urlencoded({ extended: false })); 
app.use(_express2.default.static("public")); 

// Set Handlebars as the default templating engine.
app.engine("handlebars", (0, _expressHandlebars2.default)({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
require("./controllers/webScrapperController.js")(app);
{
    console.log('App listening on PORT ' + PORT);
};