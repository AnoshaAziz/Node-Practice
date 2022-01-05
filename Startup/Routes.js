const express = require("express");
const router = require('../Routes/Route');
const Rental = require('../Routes/RentalRoute');
const userRoute1 = require('../Routes/userRoute');
const authenticate = require('../Routes/auth');
const error = require('../MiddleWares/Error');

module.exports = function (expressObj) {

    expressObj.use(express.json());
    expressObj.use('/genre/movie', router);
    expressObj.use('/api/rentals', Rental);
    expressObj.use('/api/users', userRoute1);
    expressObj.use('/api/auth', authenticate);
    expressObj.use(error);

}