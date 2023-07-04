var express = require('express');
var app = express();

app.get('/', function (req, res) {
    return res.send('Hello World !');
});

app.get('/page', function (req, res) {
    return res.send('/page');
});

// app.listen(3000, () => console.log('Example app listening on port 3000!'));
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
