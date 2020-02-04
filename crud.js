var express = require('express');
var posts = require('./controller/posts');
var db = require('./db');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db // db connection
    next();
})

app.get('/posts/index', posts.index);
app.post('/posts/create', posts.add);
app.post('/posts/view', posts.view);
app.post('/posts/update', posts.update);
app.post('/posts/delete', posts.delete);


app.listen(3000);