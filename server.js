var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var port = process.env.PORT || 8000;

require('./app/routes')(app);

app.listen(port);

console.log('Server running on port', port);

module.exports = app;
