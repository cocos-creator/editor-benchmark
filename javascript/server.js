// init express
var Express = require('express');
var app = Express();
var cwd = __dirname;
var port = 8513;

// create an error with .status.
function error(status, msg) {
    var err = new Error(msg);
    err.status = status;
    return err;
}

// routes
//app.get('/', function(req, res) {
//    res.sendFile( cwd + '/test/visual-tests/index.html');
//});

// serves all the static files
app.get(/^(.+)$/, function(req, res) {
    //console.log('static file request : ' + req.params);
    //console.log('send: ' + process.cwd() + req.params[0]);
    res.sendFile( cwd + req.params[0]);
});

app.use(function(err, req, res, next) {
    // whatever you want here, feel free to populate
    // properties on `err` to treat it differently in here.
    res.status(err.status || 500).send({ error: err.message });
});

app.use(function(req, res) {
    res.status(404).send({ error: "404 Error." });
});

// start the server
var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});
