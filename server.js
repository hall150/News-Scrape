let bodyParser = require('body-parser'); 
let exphbs = require('express-handlebars'); // Templating Engine
var db = require("./models"); // Require all models
let cheerio = require('cheerio'); // Web Scrapper
let mongoose = require('mongoose'); // MongoDB ORM
let PORT = process.env.PORT || 8080; // Set Default Port for Express and Heroku
let app = express(); // Initialize Express


app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.use(express.static("public")); 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Config and Execution
require("./controllers/webScrapperController.js")(app);
app.listen(PORT, ()=>{
    console.log(`App listening on PORT ${PORT}`);
})