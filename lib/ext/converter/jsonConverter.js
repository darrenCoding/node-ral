/*
 * fis
 * http://fis.baidu.com/
 * 2014/8/5
 */

'use strict';

var Converter = require('../../converter.js').Converter;
var logger = require('../../logger.js')('JsonConverter');
var util = require('util');

function JsonConverter(){
    Converter.call(this);
}

util.inherits(JsonConverter, Converter);

JsonConverter.prototype.unpack = function(convertContext, buffer){
    var data, obj;
    try {
        data = this.decode(buffer, convertContext.encoding);
        obj = JSON.parse(data);
    }catch(e){
        logger.notice('unpack json data failed ' + ' ServiceID=' + convertContext.serviceID);
        throw e;
    }
    logger.trace('unpack json data succ ServiceID=' + convertContext.serviceID);
    return obj;
};

JsonConverter.prototype.pack = function(convertContext, data){
    var buffer;
    try{
        buffer = this.encode(JSON.stringify(data), convertContext.encoding);
    }catch(e){
        logger.notice('pack json data failed data=' + data + ' ServiceID=' + convertContext.serviceID);
        throw e;
    }
    logger.trace('pack json data succ ServiceID=' + convertContext.serviceID);
    return buffer;
};

JsonConverter.prototype.getName = function(){
    return 'json';
};

module.exports = JsonConverter;