const mongoose = require('mongoose');
const Joi = require('joi');
const res = require('express/lib/response');
const passwordComplexity = require("joi-password-complexity");
// let complexityOptions = {
//     min: 10,
//     max: 30,
//     lowerCase: 1,
//     upperCase: 1,
//     numeric: 1,
//     symbol: 1,
//     requirementCount: 2,
// };
const regex1 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const errorRegex = new Error("Invalid Password");
const jwt = require('jsonwebtoken');
const config = require('config');
const { boolean } = require('joi');
const registerSchema = new mongoose.Schema({

    name: {
        type: String,
        maxlength: 15
    },

    email: {
        type: String, required: true

    },

    password: {

        type: String

    },
    isAdmin: Boolean
});
registerSchema.methods.addToken = function () {
    const result = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('privateKey'), { expiresIn: '1h' });
    return result;

}
const User = mongoose.model("User", registerSchema);


function validationRegister(body) {

    const schema = Joi.object({
        name: Joi.string().max(15),
        email: Joi.string().email().required(),
        password: Joi.string().regex(regex1)
    });
    const result = schema.validate(body);
    return result;
}


exports.registerSchema = registerSchema;

exports.User = User;
exports.validationRegister = validationRegister;