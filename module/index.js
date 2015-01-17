/**
 * Created by huangyao on 14-10-1.
 */
 var _ = require('lodash');
var fs =require('fs');
var config = require('../config.js');
var path = config.path;
var mongoose = require("mongoose");

// mongoose.connect();

var models = {

  init : function (callback) {
    fs.readdir(path+'/module',function (err,files) {
      if(err){
        throw err;
      }
      //  console.log(files);
      return callback(files.filter(function (item) {
        return (item!=="index.js");
      }));
    });
  },
};


models.init(function (files) {
  for (var item in files) {
    //reuire all modules
    var file = require('./'+files[item]);
    _.extend(models,file);
  }
});


module.exports = models;
