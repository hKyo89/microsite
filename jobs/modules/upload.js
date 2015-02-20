#!/usr/bin/env node

var fs = require("fs");
var sleep = require("sleep");
var path = require("path");
var child = require("child_process");
var UUIDGenerator = require('node-uuid');

exports.htmlToPdf = function (htmlString, tmpUploadDir) {
    var uniqueId = UUIDGenerator.v4();
    var fileName = tmpUploadDir + uniqueId;
    var htmlPath = fileName + ".html";
    var pdfPath = fileName + ".pdf";
    var scriptPath = __dirname + "/htmltopdf.js";

    // Create HTML sync
    fs.writeFileSync(htmlPath, htmlString);

    // Create PDF in child process
    var ls = child.spawn("nodejs", [scriptPath, htmlPath, pdfPath]);

    ls.stdout.on("data", function (data) {
        console.log("stdout: " + data);
    });

    ls.stderr.on("data", function (data) {
        console.log("stderr: " + data);
    });

    ls.on("data", function (data) {
        console.log("killed: " + data);
    });

    return pdfPath;
}

exports.attachHtmlToPdf = function (htmlString, tmpUploadDir) {
    var filePath = this.htmlToPdf(htmlString, tmpUploadDir);

    if (this.fileExists(filePath)) {
        return this.base64(filePath);
    }

    return false;
}

exports.base64 = function (filePath) {
    var file = this.readFile(filePath, 0);
    var base64 = file.toString("base64");

    // Remove file asynchronously
    fs.unlink(filePath, function (err) {
        if (err) {
            throw err;
        }
    });
    
    return base64;
}

// Read file when it's ready and readable
// timeout in 10s
exports.readFile = function (filePath, counter) {
    if (counter > 10) {
        return false;
    }

    if (filePath == "/" || !fs.existsSync(filePath)) {
        console.log("File not found:\n" + filePath);
        return false;
    }

    var file = fs.readFileSync(filePath);

    if (!file) {
        return false;
    }

    if (file.length == 0) {
        sleep.sleep(1);
        return this.readFile(filePath, counter + 1);
    }
        
    return file;
}

exports.fileExists = function (path) {
    var sec = 0;

    // Check files until it's available within 10s
    // or else return false 
    while (!fs.existsSync(path)) {
        if (sec > 10) {
            return false;
        }

        sleep.sleep(1);
        sec++;
    }

    return true;
}