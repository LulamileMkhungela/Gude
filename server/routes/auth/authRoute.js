
const express = require('express')

const router = express.Router()
const auth = require('../../middleware/auth');
/*
    Import Middlewares
 */

const signUpUserController = require('../../controllers/authController/signUpUserController')
const loginUserController = require('../../controllers/authController/loginUserController')
const authUserController = require('../../controllers/authController/authUserController')
const forgotpassword = require('../../controllers/authController/forgotpasswordController')
const {body} = require('express-validator')

/*
    Register User Routes
 */
const validateUserSignUp = [
    body('firstname','Firstname required*').isLength({min : 1}),
    body('lastname','Lastname required*').isLength({min : 1}),
    body('email','Enter valid email*').notEmpty(),
    body('password','Password min 8 required*').notEmpty()
]

const validateUserLogin = [
    body('email','Email required').notEmpty(),
    body('password','Password required').notEmpty()
]

const registerStudentValidation = [
    body('contact', 'Contact Required').notEmpty(),
    body('student_email', 'Student Email Required').notEmpty(),
    body('location','Location Required').notEmpty()
]
router.post('/signup',validateUserSignUp, signUpUserController.signUpUserController)
router.post('/check-student', signUpUserController.checkIfStudent)
router.post('/login',validateUserLogin, loginUserController)
router.post('/user', authUserController)
router.post('/signup/student',registerStudentValidation,signUpUserController.registerStudent)
router.post('/student/activate',signUpUserController.activateEmail);
router.post('/forgot',forgotpassword.forgotPassword);
router.post('/reset',auth,forgotpassword.resetPassword);

module.exports = router

