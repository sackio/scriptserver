#!/usr/bin/env node

var Path = require('path')
  , Optionall = require('optionall')
  , Async = require('async')
  , _ = require('underscore')
  , Belt = require('jsbelt')
  , Winston = require('winston')
  , Events = require('events')
  , Moment = require('moment')
  , Str = require('underscore.string')
;

module.exports = function(S){

////////////////////////////////////////////////////////////////////////////////
//// METHODS
////////////////////////////////////////////////////////////////////////////////

  S.instance.express.all('/github/webhook.json', function(req, res){
    return res.status(200).json({
      'status': 'OK'
    });
  });

  setTimeout(function(){
    return S.emit('ready');
  }, 0);

};
