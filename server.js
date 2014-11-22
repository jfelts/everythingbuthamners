var gzippo = require('gzippo')
  , express = require('express')
  , app = express()
  , path = require('path');

//app.use(express.logger('dev'));

var winston = require('winston')
  , logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: path.join(__dirname,'Logs','info.log') })
    ]
    , exceptionHandlers: [
        new winston.transports.File({ filename: path.join(__dirname,'Logs','exceptions.log') })
    ]
    , exitOnError: false
  });


app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 3000);
