const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const rentalSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 10,
        minlength: 0,
        required: true
    },
    movie: new mongoose.Schema({

        name: {
            type: String,
            maxlength: 10,
            minlength: 0
            // required:true
        },
        dailyRentalRate: {
            type: Number,
            maxlength: 10,
            minlength: 0
        },
        numberInStock: {
            type: Number,
            maxlength: 10,
            minlength: 0
        }
    })

    ,

    genre: new mongoose.Schema({

        name: {
            type: String,
            maxlength: 10,
            minlength: 0,
            required: true
        }
    })
    ,
    dateOut: {
        type: Date,
        required: true,
        default: Date.now
    }
})


const Rental = mongoose.model("Rental", rentalSchema);

function validationRental(para) {
    const validateSchema = Joi.object({
        name: Joi.string().min(0).max(10).required(),
        movieId: Joi.objectId().required(),
        genreId: Joi.objectId().required(),
        value: Joi.number().min(0).max(10).required()

    });
    const Result = validateSchema.validate(para);
    return Result;

}



exports.rentalSchema = rentalSchema;
exports.Rental = Rental;
exports.validationRental = validationRental;


