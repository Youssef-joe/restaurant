const { body } = require('express-validator')

const userValidation = [
    body('username').trim().notEmpty().withMessage("username field is required"),
    body('userEmail').trim().notEmpty().withMessage("user email field is required").isEmail().withMessage("please entere a valid email"),
    body('userPass').trim().notEmpty().withMessage('user password field is required')
]

module.exports = userValidation