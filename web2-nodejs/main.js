var qs = require('querystring');
var sanitizeHtml = require('sanitize-html');
var path = require('path');
var express = require('express');
var app = express();
var fs = require('fs');
var template = require('./lib/template.js');
var bodyParser = require('body-parser');
// var compression = require('compression');

app.use(bodyParser.urlencoded({extended: false}));
// app.use(compression());
app.get(function(request, response, next){
    fs.readdir('*', './data', function (err, filelist) {
        request.list = filelist;
        next();
    });
});


app.get('/', function (request, response) {
        var title = 'Welcome';
        var description = "Hello Node JS"
        var list = template.list(request.list)
        var html = template.HTML(
            title,
            list,
            `<h2>${title}</h2>${description}`,
            `<a href="/create">create</a>`
        )
        response.send(html);
});

app.get('/page/:pageId', function (request, response) {
        var filteredId = path.parse(request.params.pageId).base;
        fs.readFile(`data/${filteredId}`, 'utf8', function (err, description) {
            var title = request.params.pageId;
            var sanitizeTitle = sanitizeHtml(title);
            var sanitizeDescription = sanitizeHtml(description, {allowedTags: ['h1']});
            var list = template.list(request.list)
            var html = template.HTML(
                sanitizeTitle,
                list,
                `<h2>${sanitizeTitle}</h2>${sanitizeDescription}`,
                `<a href="/create">create</a> <a href="/update/${sanitizeTitle}">update</a>
                <form action="/delete_process" method="post">
                    <input type="hidden" name="id" value="${sanitizeTitle}">
                    <input type="submit" value="delete">
                </form>`
            );
            response.send(html);
    });
});

app.get('/create', function (request, response) {
        var title = 'Web-Create';
        var list = template.list(request.list)
        var html = template.HTML(
            title,
            list,
            `<form action="/create_process" 
            method="POST">
            <p><input type="text" name="title" placeholder="title"></p>
            <p><textarea name="description" placeholder="description"></textarea></p>
            <p><input type="submit"></p>
            </form>
            `,
            ``
        );
        response.send(html);
});

app.post('/create_process', function (request, response) {
    var post = request.body;
    var title = post.title;
    var description = post.description;
    fs.writeFile(`data/${title}`, description, 'utf8', function (err) {
        response.redirect('/?id=${title}');
    });
});

app.get('/update/:pageId', function (request, response) {
        filteredId = path.parse(request.params.pageId).base;
        fs.readFile(`data/${filteredId}`, 'utf8', function (err, description) {
            var title = request.params.pageId;
            var list = template.list(request.list)
            var html = template.HTML(
                title,
                list,
                `<form action="/update_process" method="post">
                <input type="hidden" name="id" value="${title}">
                <p><input type="text" name="title" placeholder="title" value="${title}"></p>
                <p><textarea name="description" placeholder="description">${description}</textarea></p>
                <p><input type="submit"></p>
                </form>
                `,
                `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
            )
            response.send(html);
    });
});

app.post('/update_process', function (request, response) {
    var post = request.body;
    var id = post.id
    var title = post.title;
    var description = post.description;
    fs.rename(`data/${id}`, `data/${title}`, function (err) {
        fs.writeFile(`data/${title}`, description, 'utf8', function (err) {
            response.redirect('/?id=${title}');
        });
    });
});

app.post('/delete_process', function (request, response) {
    var post = request.body;
    var id = post.id
    var filteredId = path.parse(id).base;
    fs.unlink(`data/${filteredId}`, function (err) {
        response.redirect('/');
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});