var MongoClient = require('mongodb').MongoClient, assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/superscriptDB';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    removeDocument(db,function(){
        db.close();
    });
});


var removeDocument = function(db, callback) {
    // Get the documents collection
    var users = db.collection('users');
    var topics = db.collection('topics');
    var replies = db.collection('replies');

    users.remove({},function(err,res){
        console.log(res);
    });
    topics.remove({},function(err,res){
        console.log(res);
    });
    replies.remove({},function(err,res){
        console.log(res);
    });

    callback();

};
