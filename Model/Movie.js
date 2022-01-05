const {genreSchema,Genre}= require('./Genre');
const mongoose = require('mongoose');
const Joi = require('joi');



const Movie= mongoose.model('Movie', mongoose.Schema({
    // _id:String,
    name:String,
    numberInStock: Number,
    dailyRentalRate:Number,
    numberInStock:Number
}));

function validateError(param){
const schemaAdd= Joi.object({
    name: Joi.string().max(10).required(),
    numberInStock:Joi.number().max(5).min(0),
    dailyRentalRate:Joi.number().max(5).min(0)

});
const Result= schemaAdd.validate(param);
return Result;

}

exports.Movie= Movie;
exports.validateError=validateError;
