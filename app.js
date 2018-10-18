var app = require('express')(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server),
  session = require("express-session")({
    secret: "mdp",
    resave: true,
    saveUninitialized: true
  }),
  sharedsession = require("express-socket.io-session");
ent = require('ent'), // Permet de bloquer les caractères HTML (sécurité équivalente à htmlentities en PHP)
  fs = require('fs');

//On attache la session à notre application
app.use(session);

io.use(sharedsession(session, {
  autoSave: true
}));

const PORT = 8080;

//Tableau associatif : pseudo => socketid
var users = [];

//LIAISON - COMMUNICATION
//-------------------------------------------------------------------------------

//Partage des sessions avec socket io
io.use(sharedsession(session));

//Communication entre le serveur et le client
io.sockets.on('connection', function (socket) {

  // Dès qu'on nous donne un nom, on le stocke en variable de session
  socket.on('newClient', function (pseudo) {
    var pseudo = ent.encode(pseudo);
    var ID = socket.id;
    //On stock le pseudo et l'id dans la session
    socket.handshake.session.pseudo = pseudo;
    socket.handshake.session.ID = ID;

    users.push({ pseudo: socket.handshake.session.pseudo, id: socket.handshake.session.ID });

    socket.handshake.session.save();
    socket.broadcast.emit('updateUsers', {users: users});
  });

  //Envoi de data d'un client à l'autre
  socket.on('data', function (data) {
    var pseudo = data.ID;
    var message = data.message;
    for (var i = 0; i < users.length; i++) {
      if (users[i].pseudo == pseudo) {
        socket.to(users[i].id).emit('message', message);
      }
    }
  });

  socket.on('disconnect', function (data) {
    socket.handshake.session.save();
    socket.broadcast.emit('updateUsers', {users: users});
  });

});

process.on('uncaughtException', function (err) {
  // handle the error safely
  console.log(err)
});

console.log('Server is ready ! Port :', PORT);

//On travail sur le port 8080
server.listen(PORT);