const { User } = require('../../Model/user');
const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose = require('mongoose');


describe('Test addToken Method', () => {


    it("addToken", () => {
        const payload = {
            _id: mongoose.Types.ObjectId(),
            isAdmin: true
        };
        const user = new User(payload);
        const s = (user._id);
        console.log(s);
        const result = user.addToken();
        const decode = jwt.verify(result, config.get('privateKey'));
        expect(decode).toMatchObject(payload);


    });
})
