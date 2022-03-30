const User = require('../../models/User')
const Student = require('../../models/Student')
const sendMail = require('../sendMail')
const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')

const {google} = require('googleapis')
const {OAuth2} = google.auth
const client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID)
const {CLIENT_URL} = process.env


//Export the module
module.exports = {
    signUpUserController: async (req, res) => {

        const err = validationResult(req)

        if (err.array().length > 0) {
            return res.status(200).json({
                err: err.array(),
                validate: true
            })
        } else {
            const {firstname, lastname, email, password} = req.body

            //Check if email exist
            await User.findOne({email: req.body.email}, (e, adv) => {

                if (e) {
                    return res.status(200).json({
                        err: true,
                        msg: e.message
                    })
                } else {

                    if (adv) {
                        return res.status(200).json({
                            err: true,
                            msg: 'Email Already Taken, Please Use A Different Email.'
                        })
                    } else {

                        // //Hash User Password
                        bcrypt.hash(password, 10, (e, hash) => {
                            if (e) {
                                return res.status(200).json({
                                    err: true,
                                    msg: e.message
                                })
                            } else {

                                //Create a new user
                                const user = new User({
                                    _id: mongoose.Types.ObjectId(),
                                    firstname,
                                    lastname,
                                    email,
                                    password: hash,
                                    acc_type: 'user'
                                })

                                user.save((e, result) => {

                                    if (e) {
                                        return res.status(200).json({
                                            err: true,
                                            msg: e.message
                                        })
                                    }
                                    return res.status(201).json({
                                        err: false,
                                        msg: 'Account created successfully, You can now login',
                                        resp: result
                                    })
                                })

                            }
                        })

                    }
                }

            }).clone()
        }
    },
    checkIfStudent: (req, res) => {
        const {_user_id} = req.body;
        console.log(_user_id)
        Student.find({_student_id: _user_id}, (e, adv) => {
            if (e) {
                return res.status(200).json({
                    err: true,
                    msg: e,
                    isStudent: false
                })
            } else {
                if (adv.length > 0) {
                    return res.status(200).json({
                        err: false,
                        msg: 'User Is A Student',
                        isStudent: true
                    })
                } else {
                    return res.status(200).json({
                        err: true,
                        msg: 'User Not A Student',
                        isStudent: false
                    })
                }
            }
        })
    },
    registerStudent: async (req, res) => {
        const err = validationResult(req)
        if (err.array().length > 0) {
            console.log('Errors There')
            return res.status(200).json({
                errData: err.array(),
                validate: true
            })
        } else {
            const {_user_id, contact, alt_contact, student_email, location} = req.body
            
            if (student_email.includes('@')) {
                const splitMail = student_email.split('@')[0];
                if (!isNaN(splitMail)) {
                    //Write email confirmation here
                    try {
                      

                        const user = await Student.findOne({student_email})
                        
                        if (user) {
                            return res.status(200).json({
                                err: true,
                                msg: 'Email Already Exist',
                                mailExist : true
                            })
                        }

                        const newUser = {
                            _user_id, contact, alt_contact, student_email, location
                        }
                        const activation_token = createActivationToken(newUser)
                        const url = `${CLIENT_URL}/student/activate/${activation_token}`
                        sendMail(student_email, url, "Verify your email address")

                        res.status(200).json({
                            err: false,
                            msg: 'Register Success! Please Open Your Email And Confirm Your Email To Start Selling On Gude.'
                        })
                    } catch (error) {
                        return res.status(200).json({
                            err: true,
                            msg: error.message
                        })
                    }

                } else {
                    return res.status(200).json({
                        err: true,
                        msg: 'Invalid Student Email, Email Should Start With A Student Number'
                    })
                }

            } else {
                return res.status(200).json({
                    err: true,
                    msg: 'Invalid Student Email Format'
                })
            }
        }
    },
    activateEmail: async (req, res) => {
        try {
            const {activation_token} = req.body
            const user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET)
            const { _user_id, contact, alt_contact, student_email, location} = user
            const check = await Student.findOne({student_email})
            if (check) {
                return res.status(200).json({
                    err: true,
                    msg: "This email already exists."
                })
            }
            //find user from table user and update account type to student

            const userAcc_type = await User.findByIdAndUpdate(_user_id,{acc_type:'student'},(e,doc)=>{
                if(e)
                {
                    return res.status(200).json({
                        err: true,
                        msg: e,
                        isStudent: false
                    })
                }
                else{
                    const newUser = new Student({
                        _student_id:_user_id, contact, alt_contact, student_email, location,tertiary_name:null
                    })
                     newUser.save()
                    res.status(201).json({
                        err: false,
                        msg: "Account has been activated! u can now sell on Gude"
                    })

                }
            })

            
        } catch (error) {


            return res.status(200).json({
                err: true,
                msg: "Error Sending An Email, For Confirmation"
            })
        }
    },
}
const createActivationToken = (payload) => {
    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '5m'})
}
const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
}
const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}


// const {contact,altContact,studentEmail,location} = req.body

// if (studentEmail.includes('@')){
//     const splitMail = studentEmail.split('@')[0];
//     if (!isNaN(splitMail)) {
//         //Write email confirmation here

//     }else{
//         return res.status(200).json({
//             err : true,
//             msg : 'Invalid Student Email, Email Should Start With A Student Number'
//         })
//     }

// }else{
//     return res.status(200).json({
//         err : true,
//         msg : 'Invalid Student Email Format'
//     })
// }