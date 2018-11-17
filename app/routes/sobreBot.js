module.exports = function (app, message, args, comando)
{
    if(comando === 'ping')
    {
        var comandoPing = require('../controller/comandoPing.js')(message);
    }
}