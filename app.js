/**
 * Created by jeffreywpearson on 12/3/15.
 */


var Hapi = require('hapi');
var Inert = require('inert');
var nodeRules = require('node-rules');

var measureList = ['NQF0002','NQF0018','NQF0022','NQF0028','NQF0031','NQF0032','NQF0033','NQF0036','NQF0043','NQF0055','NQF0056'];


var server = new Hapi.Server();

server.connection({ port: 3000 });
server.register(Inert, function () {});

server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
        file: './help.html'
    }
});

server.route({
    method: 'GET',
    path: '/help',
    handler:  {
        file: 'help.html'
    }
});

server.route({
    method: 'GET',
    path: '/listSupportedMeasures',
    handler: {
        file: './help.html'
    }
});

server.route({
    method: 'GET',
    path: '/validateMeasures',
    handler: function (request, reply) {
        //STEP 1: unencode the ccda into the source xml.
        //STEP 2: submit to blue button parser to get the ccda in json format.
        //STEP 3: submit to test engine.
        //STEP 4: return results of test.
        reply("validate measures");
    }
});


server.start(function (err) {

    if (err) {
        throw err;
    }

    console.log('Server running at:', server.info.uri);
});