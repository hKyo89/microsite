var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var swig = require("swig");
var multer = require("multer");
var fs = require("fs");
var toml = require("toml-js");
var app = express();

CONFIG = toml.parse(fs.readFileSync("./config/" + app.get("env") + ".ini"));
IS_DEV = false;

if (app.get("env") == "development") {
    IS_DEV = true;
}


var routes = require("./routes.js");

// view engine setup
app.engine("html", swig.renderFile);
app.set("views", __dirname + "/views"); // specify the views directory
app.set("view engine", "html"); // register the template engine
swig.setDefaults({
    cache: false
});

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + CONFIG.path.favicon));
app.use(multer({ 
    dest: CONFIG.path.tmpUploadDir,
    rename: function (fieldname, filename) {
        return filename.replace(/\W+/g, '-').toLowerCase() + Date.now()
    }
}));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, CONFIG.path.staticDir)));

app.use("/", routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});


// development error handler
// will print stacktrace
if (app.get("env") === "development") {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render(CONFIG.views.error, {
            message: err.message,
            error: err
        });
        console.log(err);
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render(CONFIG.views.error, {
        message: err.message,
        error: {}
    });
});

module.exports = app;
