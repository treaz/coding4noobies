var PORT = 8002;

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// let static middleware do its job
app.use(express.static(__dirname));

app.use(cookieParser());

// set a cookie
app.use(function (req, res, next) {
    // check if client sent cookie
    var cookie = req.cookies.trackingCookie;
    if (cookie === undefined) {
        // no: set a new cookie
        res.cookie('trackingCookie', "magicCookie", { maxAge: 900000 });
        console.log('cookie created successfully');
    }
    else {
        // yes, cookie was already present 
        console.log('cookie exists', cookie);
    }

    next(); // <-- important!
});


app.listen(PORT, () => console.log('Listening on '+PORT))

app.post('/register', function (req, res) {
    console.log(req.body);
    res.send("recieved your request!");
});

app.post('/login', function (req, res) {
    console.log(req.body);
    // res.send("recieved your request!");
    res.cookie('isLoggedIn', req.body.username, { maxAge: 900000 });
    res.redirect('/');
});