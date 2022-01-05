const mongoose = require('mongoose');

const genreSchema = mongoose.Schema({

    name: {type:String,
    maxlength:10}

})

const Genre = mongoose.model('Genre',genreSchema );

exports.genreSchema=genreSchema;
exports.Genre=Genre;