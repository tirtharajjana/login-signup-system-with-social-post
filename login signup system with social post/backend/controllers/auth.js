const { validation, validationResult } = require('express-validator');

express.signup = (async (req, res, next) => {
    const errors=validationResult(req);

    if()
})