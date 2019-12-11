var mongoose = require('mongoose');

//environment variables:
require('dotenv').config();
const mongoUser = process.env.mongoUser;
const mongoPass = process.env.mongoPass;

//var uri = 'mongodb://localhost/funkoshop';
var uri = "mongodb+srv://" + mongoUser + ":" + mongoPass + "@clustergame-safci.mongodb.net/funkoshop?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('connecting', function () {
    console.log('Connecting to ', uri);
});
db.on('connected', function () {
    console.log('Connected to ', uri);
});
db.on('disconnecting', function () {
    console.log('Disconnecting from ', uri);
});
db.on('disconnected', function () {
    console.log('Disconnected from ', uri);
});
db.on('error', function (err) {
    console.error('Error', err.message);
});

mongoose.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .catch(function (err) {
        console.error('Error', err.message);
    });

module.exports = mongoose.connection;