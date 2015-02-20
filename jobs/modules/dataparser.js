#!/usr/bin/env node

module.exports = function () { 
    var fs = require("fs");

    return {
        jsondata: function (path) {
            path = __dirname + "/../data/" + path + ".json";

            // TODO: try-catch
            var file = fs.readFileSync(path);

            return JSON.parse(file);
        }
    };
};