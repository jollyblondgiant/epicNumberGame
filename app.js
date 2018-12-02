var express, app, server, io

express = require("express");
app = express();
server = app.listen(420)
io = require("socket.io")(server);
var counter = 0;

app.use(express.static(__dirname + "/node_modules"));
app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get('/', function(req, res, next){
    res.render("index");
});

io.on('connection', function(client){
    client.on('join', function(data){
    })
    client.on('click', function(){
        counter ++
        client.emit('broad', counter);
        client.broadcast.emit('broad', counter)
        console.log(counter)
    })
    client.on('reset', function(){
        counter = 0
        client.emit('broad', counter);
        client.broadcast.emit('broad', counter)
        console.log(counter)
    })
})