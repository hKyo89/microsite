#!/usr/bin/env node

var express = require("express");
var dp = require("../modules/dataparser.js")();

exports.indexController = function (req, res) {
    res.render("jobs/index", {
        jsondata: dp.jsondata("jobs.index"),
        staticHost: CONFIG.host.static,
        baseUrl: CONFIG.host.base
    });
}

exports.groupController = function (req, res) {
    var jsondata = dp.jsondata("jobs.details");
    var groups = new Array();

    for (var i = 0; i < jsondata.jobs.length; i++) {
        groups.push(jsondata.jobs[i].url);
    }

    var group = req.params.group;
    var groupIndex = groups.indexOf(group);

    if (groupIndex < 0) {
        res.render("404", {
            staticHost: CONFIG.host.static,
            baseUrl: CONFIG.host.base
        }); 
        return;
    }

    res.render("jobs/group", {
        group: group,
        groupIndex: groupIndex,
        jsondata: jsondata,
        staticHost: CONFIG.host.static,
        baseUrl: CONFIG.host.base
    });  
}

exports.positionController = function (req, res) {
    var jsondata = dp.jsondata("jobs.details");
    var groups = new Array();
    
    for (var i = 0; i < jsondata.jobs.length; i++) {
        groups.push(jsondata.jobs[i].url);
    }

    var group = req.params.group;
    var groupIndex = groups.indexOf(group);

    if (groupIndex < 0) {
        res.render("jobs/404", {
            staticHost: CONFIG.host.static,
            baseUrl: CONFIG.host.base
        }); 
        return;
    }

    var jobs = new Array();

    for (var i = 0; i < jsondata.jobs[groupIndex].items.length; i++) {
        jobs.push(jsondata.jobs[groupIndex].items[i].url);
    }

    var job = req.params.job;
    var jobIndex = jobs.indexOf(job);

    if (jobIndex < 0) {
        res.render("group", {
            group: group,
            groupIndex: groupIndex,
            jsondata: jsondata,
            staticHost: CONFIG.host.static,
            baseUrl: CONFIG.host.base
        });
        return;
    }

    res.render("jobs/detail", {
        group: group,
        groupIndex: groupIndex,
        groupUrl: jsondata.jobs[groupIndex].url,
        groupTitle: jsondata.jobs[groupIndex].title,
        job: job,
        jobIndex: jobIndex,
        jsondata: jsondata.jobs[groupIndex].items[jobIndex],
        staticHost: CONFIG.host.static,
        baseUrl: CONFIG.host.base
    });
}

exports.submitController = function (req, res) {
    var data = req.body;
    var files = req.files;

    var error = this._validatePostData(data, files);

    if (error[0] !== undefined) {
        console.log(">>");
        res.render("jobs/response", {
            staticHost: CONFIG.host.static,
            baseUrl: CONFIG.host.base,
            status: "warning",
            response: error,
        });
        return;                
    }
    
    this._sendEmail(data, files);

    res.render("jobs/response", {
        staticHost: CONFIG.host.static,
        baseUrl: CONFIG.host.base,
        status: "success",
        response: [{response: "Your application has been submitted. Thanks for applying!"}],
    });
}

exports._sendEmail = function (data, files) {
    var mandrill = require("mandrill-api/mandrill");
    var mandrillClient = new mandrill.Mandrill("1e0a90e6-5b54-48c2-8708-e364bad2ddea");

    var subject = "New Application - " + data.position
        + " - " + data.fullname;

    var rawMessage = "From: " + CONFIG.email.from + "\n" 
        + "To: " + CONFIG.email.to + "\nSubject: " + subject 
        + "\n\n" + message;
    var fromEmail = CONFIG.email.from;
    var fromName = "Tokopedia Jobs";
    var to = [
        CONFIG.email.to
    ];
    var async = false;
    var ipPool = "Main Pool";
    var sendAt = "2015-01-11 00:00:00";
    var returnPathDomain = null;

    var message = {
        "html": this._buildHtml(data),
        "text": "Example text content",
        "subject": subject,
        "from_email": fromEmail,
        "from_name": fromName,
        "to": [{
                "email": CONFIG.email.to,
                "name": "Tokopedia Jobs",
                "type": "to"
            }],
        "headers": {
            "Reply-To": fromEmail
        },
        "important": false,
        "attachments": this._buildAttachments(data, files)
    };


    mandrillClient.messages.send({"message": message, "async": async, "ip_pool": ipPool, "send_at": sendAt}, function(result) {
        console.log(result);
    }, function(e) {
        // Mandrill returns the error as an object with name and message keys
        console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
        // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
    });
}

exports._buildAttachments = function (data, files) {
    var upload = require("../modules/upload.js");
    var tmpUploadDir = CONFIG.path.tmpUploadDir;
    var attachments = new Array();

    if (files.cvfile !== undefined) {
        var fileTitle = "Resume - " + data.position + " - " + data.fullname;

        attachments.push({
            "type": files.cvfile.mimetype,
            "name": (fileTitle + "." + files.cvfile.extension).replace(/[^a-zA-Z0-9\-\.]/g, "_"),
            "content": upload.base64(files.cvfile.path)
        });
    } 

    if (data.cvtext !== undefined) {
        var fileTitle = "Resume - " + data.position + " - " + data.fullname;
        var fileTitleHtml = "<center><h1>" + fileTitle + "</h1></center><br>";
        var htmlString = fileTitleHtml + (data.cvtext.replace(/\n/g, "<br>"));
        var content = upload.attachHtmlToPdf(htmlString, tmpUploadDir);

        if (content !== false) {
            attachments.push({
                "type": "application/pdf",
                "name": (fileTitle + ".pdf").replace(/[^a-zA-Z0-9\-\.]/g, "_"),
                "content": content
            });
        }
    }

    if (data.coverletter !== undefined) {
        var fileTitle = "Cover Letter - " + data.position + " - " + data.fullname;
        var fileTitleHtml = "<center><h1>" + fileTitle + "</h1></center><br>";
        var htmlString = fileTitleHtml + (data.coverletter.replace(/\n/g, '<br>'));
        var content = upload.attachHtmlToPdf(htmlString, tmpUploadDir);

        if (content !== false) {
            attachments.push({
                "type": "application/pdf",
                "name": (fileTitle + ".pdf").replace(/[^a-zA-Z0-9\-\.]/g, "_"),
                "content": content
            });
        }
    }

    return attachments;
}

exports._buildHtml = function (data) {
    var html = new Array();
    var htmlEmail = "<a href='mailto:" + data.email + "'>" + data.email + "</a>";

    html.push("<div style='max-width:600px;display:block;border-collapse:collapse;margin:0 auto;padding:30px 15px;border:1px solid #e7e7e7'><table style='max-width:100%;border-collapse:collapse;border-spacing:0;width:100%;background-color:transparent;margin:0;padding:0' bgcolor='transparent'><tbody><tr style='margin:0;padding:0'><td style='margin:0;padding:0'><h5 style='line-height:24px;color:#000;font-weight:900;font-size:17px;margin:0 0 20px;padding:0'>New Application</h5><div style='margin:0 0 20px;padding:0'>");
    html.push(this._htmlRow("Position", "<span style='color:#0f990f;text-decoration:none'>" + data.position + "</span>"));
    html.push(this._htmlLine());
    html.push(this._htmlRow("Name", data.fullname));
    html.push(this._htmlLine());
    html.push(this._htmlRow("Email", htmlEmail) );
    html.push(this._htmlLine());
    html.push(this._htmlRow("Phone Number", data.phonenumber));
    html.push(this._htmlLine());
    
    if (data.linkedin !== undefined) {
        var linkedinUrl = "https://www.linkedin.com/in/" + (data.linkedin.replace(/.*\//gi, ""));
        var htmlLinkedin = "<a href='" + linkedinUrl + "'>" + linkedinUrl + "</a>";
        html.push(this._htmlRow("Linkedin", htmlLinkedin));
        html.push(this._htmlLine());       
    }

    if (data.twitter !== undefined) {
        var twitterUrl = "https://twitter.com/" + (data.twitter.replace(/.*\//gi, ""));
        var htmlTwitter = "<a href='" + twitterUrl + "'>" + twitterUrl + "</a>";
        html.push(this._htmlRow("Twitter", htmlTwitter));
        html.push(this._htmlLine());
    }

    if (data.website !== undefined) {
        var htmlWebsite = "<a href='" + data.website + "'>" + data.website + "</a>";
        html.push(this._htmlRow("Website", htmlWebsite));
        html.push(this._htmlLine());
    }

    html.push("</div><p style='margin-bottom:20px;font-weight:normal;font-size:14px;line-height:1.6;margin:40px 0 0 0;padding:10px 0 0 0;border-top:3px solid #d0d0d0'><small style='color:#999'>Email ini dibuat secara otomatis. Mohon tidak mengirimkan balasan ke email ini.</small></p></td></tr></tbody></table></div>");

    return html.join("");
}

exports._validatePostData = function (data, files) {
    var validate = require("validate.js");
    var error = new Array();

    var constraints = { 
        fullname: {
            presence: true,
            length: {
                minimum: 5
            },
            format: {
                pattern: "[a-zA-Z\ ]+",
                flag: "i",
                message: "can only contain letters"
            }
        },
        email: {
            presence: true,
            email: true
        },
        phonenumber: {
            presence: true,
            length: {
                minimum: 7
            },
            format: {
                pattern: "[\+]{0,1}[0-9]+",
                message: "can only contain numbers and plus sign (+)."
            }
        },
        coverletter: {
            presence: true,
            length: {
                minimum: 1000
            }
        },
        twitter: {
            length: {
                minimum: 1,
                maximum: 20,
                message: "must be between 1-20 characters"
            },
            format: {
                pattern: "[a-zA-Z0-9\_]*",
                flag: "i",
                message: "can only contain alphanumeric and underscore"
            }
        },
        linkedin: {
            format: {
                pattern: "((http|https)\:\/\/){0,1}([w]{3}\.){0,1}linkedin\.com(\/[a-zA-Z0-9\-\_]*)*",
                flag: "i",
                message: "has invalid URL"
            }
        }
    };

    error.push(validate(data, constraints));

    if (files.cvfile === undefined && data.cvtext === undefined) {
        error.push({resume: "Resume cannot be empty."});
    } else {
        if (files.cvfile !== undefined) {
            var allowedExt = [
                "pdf",
                "doc",
                "docx",
            ];

            var maxSize = 10485760;

            if (allowedExt.indexOf(files.cvfile.extension) < 0) {
                error.push({resume: "File type is not allowed."});
            }

            if (files.cvfile.size > maxSize) {
                error.push({resume: "File size exceeds the allowed limit."})
            }
        }
    }

    if (data.coverletter === undefined) {
        error.push({coverletter: "Coverletter cannot be empty."});
    }

    //error.push(0);

    //console.log("ERROR:\n" + error);

    return error;
}

exports._htmlRow = function (label, value) {
    return "<table style='width:100%;max-width:100%;border-collapse:collapse;border-spacing:0;background-color:transparent;margin:5px 0;padding:0' bgcolor='transparent'><tbody style='margin:0;padding:0'><tr style='margin:0;padding:0'><td style='width:25%;font-size:13px;vertical-align:top;line-height:18px;margin:0;padding:0 10px 0 0' valign='top'>" + label + ":</td><td style='font-size:13px;vertical-align:top;line-height:18px;margin:0;padding:0 10px 0 0' valign='top'>" + value + "</td></tr></tbody></table>";
}

exports._htmlLine = function () {
    return "<div style='border-bottom-width:1px;border-bottom-color:#eee;border-bottom-style:solid;margin:0;padding:0'></div>";
}

exports._htmlBox = function (value) {
    return "<div style='border-width:1px;border-style:dashed;border-color:#c9c972;background-color:#fdfdf5;border-radius:5px;margin-bottom:20px'><div style='margin:0;padding:0'><div style='margin:20px 0 0;padding:0'>" + value + "</div></div></div>";
}

exports.testController = function (req, res) {
    res.render("test/index", {
        name: "budi",
        pets: [
            {"cat"}, 
            {"dog"}, 
            {"fish"}
        ]
    });
}