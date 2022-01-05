const router = require('express').Router();
const req = require('express/lib/request');
const joi = require('joi');
const bcrypt = require('bcrypt');
const { User } = require('../Model/user');
const jwt = require('jsonwebtoken');
const config = require('config');
const author = require('../MiddleWares/authMiddle');
router.get('/me', author, async (req, res) => {

    const result = await User.findById(req.user._id).select('-password');
    res.send(result);

})


router.post('/', async (req, res) => {

    const { error } = validate(req.body);
    if (error) {
        res.status(400).send("Invalid Input");
        return;
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        res.status(400).send("Invalid Input: Email");
        return;
    }
    const hashed = await bcrypt.compare(req.body.password, user.password);
    if (!hashed) {
        res.status(400).send("Invalid Input:Password");
        return;
    }
    console.log(user);
    const privacy = user.addToken();
    console.log(privacy);
    res.send(privacy)

})

function validate(req) {

    const schema = joi.object({

        email: joi.string().email(),
        password: joi.string()

    })

    const result = schema.validate(req);
    return result;
}


module.exports = router;