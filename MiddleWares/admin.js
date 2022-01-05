module.exports = function (req, res, next) {

    if (!req.user.isAdmin) {

        res.status(403).status("You're forbidden");
        return console.log("You're forbidden")

    }

    next();


}