const mongoose = require('mongoose');
const router = require("express").Router();
const { genreSchema, Genre } = require('../Model/Genre');
const { Movie, validateError } = require('../Model/Movie');
const auth = require('../MiddleWares/authMiddle')


async function AddGenre(name) {

    const genre = new Genre({
        name: name
    })

    const result = await genre.save();
    console.log(result);

}
// AddGenre("Farhan");


router.get('/', async (req, res) => {

    const movie = await Movie.find();
    res.send(movie);
});

router.get('/:id', async (req, res) => {

    const movie = await Movie.find({ _id: req.params.id })
        .select('genre -_id');
    if (!movie) {
        res.status(404).send("not available")
    }
    res.send(movie);

})

router.post('/', auth, async (req, res) => {
    const { error } = validateError(req.body);

    if (error) {
        console.log(error.details[0].message);
    }

    const movie = new Movie({

        name: req.body.name,
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    });

    const result = await movie.save();
    res.send(result);


})

module.exports = router;

