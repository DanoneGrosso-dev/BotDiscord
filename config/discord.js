var discord = require('discord.js');
var app = new discord.Client();


// evento ready
app.on('ready', () => console.log('Bot ' + app.user.username + ' iniciado com sucesso'));

// evento message
var clientMessage = require('./message.js')(app);

module.exports = app;