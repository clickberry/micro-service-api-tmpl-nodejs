var util = require('util');
var config = require('clickberry-config');
var Publisher=require('clickberry-nsq-publisher');

function Bus(options) {
    Publisher.call(this, options);
}

util.inherits(Bus, Publisher);

Bus.prototype.publishSample = function (message, callback) {
    this._bus.publish('topic-name', message, function (err) {
        if (err) return callback(err);
        callback();
    });
};

module.exports = Bus;