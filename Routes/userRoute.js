const router = require('express').Router();
const { registerSchema, User, validationRegister, validatePassword } = require('../Model/user');
const _ = require('lodash');
const bcrypt = require('bcrypt');


// const passwordComplexity = require("joi-password-complexity");
// const regex1 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
let complexityOptions = {
   min: 10,
   max: 30,
   lowerCase: 1,
   upperCase: 1,
   numeric: 1,
   symbol: 1,
   requirementCount: 2,
};
router.post('/', async (req, res) => {

   const { error } = validationRegister(req.body);
   if (error) {

      res.send(error.details[0].message);
      return;

   };
   let user = await User.findOne({ email: req.body.email });
   if (user) {

      res.status(404).send("User already registered");
      return;
   };

   // if (!req.body.password.match(regex1)) {
   //    res.status(404).send("Password in valid");
   //    return;

   // }
   user = new User(_.pick(req.body, ['name', 'email', 'password']));
   // if (!passwordComplexity(complexityOptions).validate(user.password)) {
   //    res.status(404).send("Password in valid");
   //    return;
   // }

   const salt = await bcrypt.genSalt(10);
   user.password = await bcrypt.hash(user.password, salt);
   await user.save();
   const token = user.addToken();

   res.header('x-new-token', token).send(_.pick(user, ['_id', 'name', 'email']));
   console.log(user);

})
module.exports = router;

