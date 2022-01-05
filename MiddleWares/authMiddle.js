const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {

    const token = req.header('x-new-token');
    if (!token) {
        return res.status(400).send("Invalid REQUEST");
    }
    try {

        const decoded = jwt.verify(token, config.get('privateKey'));
        req.user = decoded;
        next();
    }
    catch (ex) {
        res.status(400).send(`Invalid REQUEST:Invalid Token ${ex}`);
    }


}