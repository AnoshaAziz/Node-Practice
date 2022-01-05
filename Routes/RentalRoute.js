const res = require('express/lib/response');
const mongoose = require('mongoose');
const { Movie } = require('../Model/Movie');
const { Genre } = require('../Model/Genre');
const { rentalSchema, Rental, validationRental } = require('../Model/Rental')
const router = require("express").Router();
const _ = require('lodash');
const auth = require('../MiddleWares/authMiddle');
const admin = require('../MiddleWares/admin');
const returnFunction = require('../MiddleWares/returnFunction');
const Fawn = require('fawn');
Fawn.init("mongodb://localhost:27017/LifeOn");



async function addRental(name, value) {

    const rental = new Rental({

        name: name,
        value: value
    })
    const result = await rental.save();
    console.log(result);
}
// addRental("Farhan",5);

router.get('/', returnFunction(async (req, res) => {

    throw new Error("Something Happened");
    const rental = await Rental.find();
    if (!rental) {
        res.status(404).send("Not Available");
        return;
    }
    res.send(rental);

}));

router.get('/:id', returnFunction(async (req, res) => {

    const rental = await Rental.findById(req.params.id);
    if (!rental) {
        res.status(404).send("Not Available");
        return;
    }
    res.send(rental);

}));

router.post('/', auth, returnFunction(async (req, res) => {

    const { error } = validationRental(req.body);

    if (error) {
        res.status(404).send(error.details[0].message);
    }

    //    if(!mongoose.Types.ObjectId.isValid(req.body.movieId)){
    //     res.send("Problem occured");
    //    }
    const movie = await Movie.findById(req.body.movieId);
    if (!movie) {
        res.send("Not Available");
        return;
    };
    // if(!mongoose.Types.ObjectId.isValid(req.body.genreId)){
    //     res.send("Problem occured");
    //    }
    const genre = await Genre.findById(req.body.genreId);
    if (!genre) {
        res.send("Not Available");
        return;
    };
    if (movie.numberInStock == 0) {
        res.send("Not Available katham");
        return;
    }

    const movieSelected = _.pick(movie, ['_id', 'name', 'title', 'dailyRentalRate', 'numberInStock']);
    const genreSelected = _.pick(genre, ['_id', 'name']);
    // const rental = new Rental(_.pick(req.body, ['_id', 'name', 'value']));
    // rental.movie = new Movie(movieSelected);
    // rental.genre = new Genre(genreSelected);
    const rental = new Rental(
        {
            name: req.body.name,
            value: req.body.value,
            movie: new Movie(movieSelected),

            genre: new Genre(genreSelected)
        });
    try {
        new Fawn.Task()
            .save('rentals', rental)
            .update('movies', { _id: movie._id }, {
                $inc: { numberInStock: -1 }
            })
            .run();
        res.send(rental);
        //    console.log(rental);
        //    console.log(movie.numberInStock);
        // const result =await rental.save();
        // console.log(result);

    }
    // const result =await rental.save();
    // console.log(result);

    catch (ex) {

        res.status(500).send("something went wrong");
    }



    // const result= await rental.save();
    // console.log(result);


}));


router.delete('/:id', returnFunction([auth, admin], async (req, res) => {


    const result = await Rental.findByIdAndRemove(req.params.id);
    console.log(result);
    res.send(result);

}));

module.exports = router;