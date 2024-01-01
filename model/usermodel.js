var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    item:{
        type:String
    },
    status:{
        type:String
    }
})
module.exports = mongoose.model('todo_tbl',userschema);