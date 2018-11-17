module.exports = function(app)
{

    var prefix = "t!";

    var consign = require('consign');
    app.on('message', message => {

        if (message.author.bot) return;
        if (message === null) return;
        if (message.author === null) return;
        if (message.content.indexOf(prefix) !== 0) return;
        if (!message.content.startsWith(prefix)) return;



        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const comando = (args.shift().toLowerCase()) || message.guild.members.get(args[0]);




        consign({
            verbose: false
        }).include('./app/routes').into(app, message, args, comando);
        
 
        
    });
}