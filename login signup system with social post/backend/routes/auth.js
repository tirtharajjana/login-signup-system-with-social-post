const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const authController = require('../controllers/auth')

const User = require("../models/user");

router.post(
    '/signup',
    [
        body('name').trim().not().isEmpty(),
        body('email').isEmail().withMessage("Please enter a valid email address")
            .custom(async (email) => {
                const user = await User.find(email);
                // console.log(user[0].length);
                if (user[0].length > 0) {
                    return Promise.reject("Emial already exist")
                }
            }).normalizeEmail(),
        body('password').trim().isLength({ min: 7 })
    ], authController.signup
)

module.exports = router;  