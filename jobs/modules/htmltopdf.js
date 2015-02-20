#!/usr/bin/env node

var htmlToPdf = require("html-to-pdf");
var fs = require("fs");

htmlPath = process.argv[2];
pdfPath = process.argv[3];

htmlToPdf.convertHTMLFile(htmlPath, pdfPath, function (err, success) {
    console.log("Generating file:\n" + pdfPath);

    if (err) {
        console.log("htmltopdf error")
        console.log(err);
    }

    console.log("htmltopdf success");
    console.log(success);
    fs.unlink(htmlPath, function (error) {
    	if (error) {
    		throw error;
    	}
    });
    
    
});