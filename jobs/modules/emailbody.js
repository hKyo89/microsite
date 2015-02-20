#!/usr/bin/env node

module.exports = function () {
    var html = new Array();    

    return {
        title: function (value) {
            var tags = new Array();
            tags.push(this._tagOpen("h4", "h4"));
            tags.push(this._tag("small", value, ""));
            tags.push(this._tagClose("h4"));

            html.push(tags.join(""));
        },

        _header: function () {
            var tags = new Array();
            //tags.push(this._tagOpen("div", "wrapper"));
            tags.push(this._tagOpen("table", "accent-wrap"));
                tags.push(this._tagOpen("tr", "", ""));
                    tags.push(this._tag("td", "", ""));
                    tags.push(this._tagOpen("td", "", "container"));
                        tags.push(this._tagOpen("div", "", "content"));
                            tags.push(this._tagOpen("table bgcolor='#fff'", "", "content table"));
                                tags.push(this._tagOpen("tr", "", ""));
                                    tags.push(this._tag("td height='4' bgcolor='#eeb211' style='background-color: #86EC6A !important;line-height:4px;font-size:4px'", "&nbsp;", ""));
                                    tags.push(this._tag("td height='4' bgcolor='#d50f25' style='background-color: #7CD55F !important;line-height:4px;font-size:4px'", "&nbsp;", ""));
                                    tags.push(this._tag("td height='4' bgcolor='#3369E8' style='background-color:#42b549 !important;line-height:4px;font-size:4px'", "&nbsp;", ""));
                                tags.push(this._tagClose("tr"));
                            tags.push(this._tagClose("table"));
                        tags.push(this._tagClose("div"));
                    tags.push(this._tagClose("td"));
                    tags.push(this._tag("td", "", ""));
                    tags.push(this._tagClose("tr"));
                tags.push(this._tagClose("tr"));
            tags.push(this._tagClose("table"));
            return tags.join("");  
        },

        /*

        tags.push(this._tagOpen());
        tags.push(this._tagClose());

        */

        _footer: function () {
            var tags = new Array();
            tags.push(this._tagClose("div"));

            return tags.join("");  
        },

        _tag: function (name, value, style) {
            return this._tagOpen(name, style) + value + this._tagClose(name);
        },

        _tagOpen: function (name, style) {
            return "<" + name + this._style(style) + ">";
        },

        _tagClose: function (name) {
            return "</" + name + ">";
        },

        html: function () {
            return this._header() + html.join("") + this._footer();
        },

        _style: function (name) {
            var tags = new Array();
            var style = "*{margin:0;padding:0}body,input,select,table,textarea{font-family:'Helvetica Neue',Helvetica,Helvetica,Arial,sans-serif}img{max-width:100%}.collapse{padding:0}body{-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:none;width:100%!important;height:100%;font-size:14px;color:#404040}table{max-width:100%;background-color:transparent;border-collapse:collapse;border-spacing:0}a{color:#0F990F;text-decoration:none}.btn{display:-moz-inline-stack;display:inline-block;margin-bottom:0;text-decoration:none;vertical-align:middle;cursor:pointer;padding:7px 17px;line-height:20px;font-size:13px;font-weight:600;text-align:center;white-space:nowrap;-webkit-border-radius:2px;-moz-border-radius:2px;-ms-border-radius:2px;-o-border-radius:2px;border-radius:2px;color:#fff;background-color:#57b150;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#57b150', endColorstr='#479a40');background-image:-webkit-gradient(linear,50% 0,50% 100%,color-stop(0%,#57b150),color-stop(100%,#479a40));background-image:-webkit-linear-gradient(top,#57b150 0,#479a40 100%);background-image:-moz-linear-gradient(top,#57b150 0,#479a40 100%);background-image:-o-linear-gradient(top,#57b150 0,#479a40 100%);background-image:linear-gradient(top,#57b150 0,#479a40 100%);border:1px solid #398433;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.4);-moz-box-shadow:inset 0 1px 0 rgba(255,255,255,.4);box-shadow:inset 0 1px 0 rgba(255,255,255,.4)}.btn-large{padding:11px 19px;font-size:14px}p.callout{padding:15px;background-color:#ECF8FF;margin-bottom:15px}.callout a{font-weight:700;color:#2BA6CB}.callout-button{text-align:center;margin:20px}.section-button{margin:20px 0}a.fb{color:#3B5998!important}a.tw{color:#1daced!important}a.gp{color:#DB4A39!important}a.ms{color:#000!important}.sidebar .soc-btn{display:block;width:100%}.img-frame{border:1px solid #DDD;padding:2px;background:#fff}.more-sign{display:block;background-color:#0F990F;width:4px;height:4px;margin:4px 0}.td-order{font-size:13px;vertical-align:top;line-height:18px;padding-right:10px}.td-separator{border-bottom:1px solid #eee}.order-separator{border-bottom:1px dashed #ccc}table.head-wrap{width:100%}.header.container table td.logo{padding:15px}.header.container table td.label{padding:15px 15px 15px 0}.header .content{border-bottom:0;padding:15px}table.accent-wrap{width:100%}table.accent-wrap .content{padding:0;border:0}table.body-wrap{width:100%}table.footer-wrap{width:100%;clear:both!important;margin-bottom:60px}.footer-wrap .container td.content p{border-top:1px solid #d7d7d7;padding-top:15px;font-size:10px;font-weight:700}.footer-wrap .content{border-top:0;padding:20px 15px;background:#f7f7f7}h1,h2,h3,h4,h5,h6{font-family:HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif;line-height:1.1;margin-bottom:20px;color:#000}h1 small,h2 small,h3 small,h4 small,h5 small,h6 small{font-size:60%;color:#6f6f6f;line-height:0;text-transform:none}h1{font-weight:200;font-size:44px}h2{font-weight:200;font-size:37px}h3{font-weight:500;font-size:27px}h4{font-weight:500;font-size:23px}h5{font-weight:900;font-size:17px}h6{font-weight:900;font-size:14px;text-transform:uppercase;color:#444;margin-bottom:10px!important}.collapse{margin:0!important}ol,p,ul{margin-bottom:20px;font-weight:400;font-size:14px;line-height:1.6}.lead{font-size:17px}p.big{font-size:18px;color:#000}.medium{font-size:13px;line-height:18px}p.last{margin-bottom:0}p.footnote{margin:40px 0 0;padding:10px 0 0;border-top:3px solid #d0d0d0}p.small{margin-bottom:10px;font-size:smaller}.muted{color:#999}ul li{margin-left:5px;list-style-position:inside}ol{margin-left:40px}hr{margin:20px 0;border:0;border-top:3px solid #d0d0d0;border-bottom:1px solid #fff}.hr-dashed{border-top:1px dashed #eee}code,pre{padding:0 3px 2px;font-family:Monaco,Menlo,Consolas,'Courier New',monospace;font-size:12px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}code{padding:2px 4px;color:#d14;white-space:nowrap}pre{display:block;margin:0 0 20px;font-size:13px;word-break:break-all;word-wrap:break-word;white-space:pre;white-space:pre-wrap}.text-center{text-align:center}.gray{color:#404040}.orange{color:#e55b36}.label-green{background-color:#16a765;border:1px solid #16a765;color:#fff;padding:0 5px 1px;font-size:11px text-decoration:none;outline:0}.label-orange{background-color:#ec7000;border:1px solid #ec7000;color:#fff;padding:0 5px 1px;font-size:11px text-decoration:none;outline:0}.label-yellow{background-color:#fbe983;border:1px solid #fbe983;color:#594c05;padding:0 5px 1px;font-size:11px text-decoration:none;outline:0}ul.sidebar{background:#ebebeb;display:block;list-style-type:none}ul.sidebar li{display:block;margin:0}ul.sidebar li a{text-decoration:none;color:#666;padding:10px 16px;cursor:pointer;border-bottom:1px solid #777;border-top:1px solid #FFF;display:block;margin:0}ul.sidebar li a.last{border-bottom-width:0}ul.sidebar li a h1,ul.sidebar li a h2,ul.sidebar li a h3,ul.sidebar li a h4,ul.sidebar li a h5,ul.sidebar li a h6,ul.sidebar li a p{margin-bottom:0!important}.container{display:block!important;max-width:600px!important;margin:0 auto!important;clear:both!important}.content{padding:30px 15px;max-width:600px;margin:0 auto;display:block;border-collapse:collapse;border:1px solid #e7e7e7}.content table{width:100%}.column{width:300px;float:left}.column tr td{padding:15px}.column-wrap{padding:0!important;margin:0 auto;max-width:600px!important}.column table{width:100%}.social .column{width:280px;min-width:279px;float:left}.clear{display:block;clear:both}@media only screen and (max-width:600px){a[class=btn]{margin-bottom:10px!important;background-image:none!important;margin-right:0!important}div[class=column]{width:auto!important;float:none!important}table.social div[class=column]{width:auto!important}}";
            tags.push(this._tag("style", style, ""));

            html.push(tags.join(""));  
        }
    }
}