let express = require('express');
let app = express();

// devido ao socket.io utiliza o servidor nativo do node
let http = require('http').createServer(app);
let io = require('socket.io')(http);

io.on('connection', (socket) => {
    
    socket.on("msg", (data) => {
        //console.log(data);
        // com o socket resposta individual
        // com io globais funciona como um broadcast
        io.emit('showmsg', data);
    });
});

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index');
});

http.listen(8080, () => {
    console.log('server start');
});