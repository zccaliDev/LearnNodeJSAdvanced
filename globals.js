

global.Request = require("request");
global._ = require("lodash")
global.Fs = require("fs");
global.Path = require("path");
global.Util = require("utile");
global.Services = require("./services")();
global.UrlJoin = require("url-join");

global.Env = _.isEmpty(process.env.NODE_ENV) ? "development" : process.NODE_ENV;
