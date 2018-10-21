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
    console.log('New connection : ' + pseudo);

    users.push({ pseudo: socket.handshake.session.pseudo, id: socket.handshake.session.ID });

    socket.handshake.session.save();
    socket.broadcast.emit('updateUsers', {users: users});
    console.log('Users : ' + getUserNames());
  });

  //Envoi de data d'un client à l'autre
  socket.on('data', function (data) {
    var pseudo = data.pseudo;
    var message = data.message;
    console.log('Sending : ' + data.message.task + " and " + data.message.theme + " to user " + pseudo);
    for (var i = 0; i < users.length; i++) {
      if (users[i].pseudo == pseudo) {
        socket.to(users[i].id).emit('data', message);
        console.log("Sended to " + pseudo);
      }
    }
  });

  socket.on('disconnect', function (data) {
    socket.handshake.session.save();
    console.log('User disconnected : ' + data);
    removeUser(socket.id);
    socket.broadcast.emit('updateUsers', {users: users});
  });

});

function removeUser(id){
  for(let i=0; i<users.length; i++){
      if(users[i].id==id) users.splice(i,1);
  }
}

function getUserNames() {
  let res = "";
  for(let i=0; i<users.length; i++){
    res += users[i].pseudo + " ";
  }
  return res;
}

process.on('uncaughtException', function (err) {
  // handle the error safely
  console.log(err)
});

console.log('Server is ready ! Port :', PORT);

//On travail sur le port 8080
server.listen(PORT);