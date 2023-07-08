var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');

router.get('/', function (request, response) {
    var title = 'Welcome';
    var description = "Hello Node JS"
    var list = template.list(request.list)
    var html = template.HTML(
        title,
        list,
        `<h2>${title}</h2>${description}
        <img src="/images/godfather.jpg" style="width:400px; display:block; margin-top:20px;">
        `,
        `<a href="/topic/create">create</a>`
    )
    response.send(html);
});

module.exports = router;