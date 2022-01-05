module.exports = function (middle) {

    return async (req, res, next) => {
        try {
            await middle(req, res);
        }
        catch (ex) {

            next(ex);
        }

    }

}