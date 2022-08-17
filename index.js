let express = require('express');
let app = express();

// devido ao socket.io utiliza o servidor nativo do node
let http = require('http').createServer(app);

let socket = require('socket.io')(http);

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index');
});

http.listen(8080, () => {
    console.log('server start');
});