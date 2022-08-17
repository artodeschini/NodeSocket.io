let express = require('express');
let app = express();

// devido ao socket.io utiliza o servidor nativo do node
let http = require('http').createServer(app);
let io = require('socket.io')(http);

io.on('connection', (socket) => {
    //console.log(socket);
    //console.log(socket.id);
    socket.on('boasvindas', (data) => {
        console.log('executando boas vindas');
        console.log(data);
    });

    socket.on('palavra', (data) => {
        console.log('executando palavra');
        console.log(data);

        // respondendo do servidor para o cliente
        socket.emit('resultado', data + ' resposta enviada em ' + new Date());
    });
});

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index');
});

http.listen(8080, () => {
    console.log('server start');
});