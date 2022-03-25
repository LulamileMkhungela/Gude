
const {validationResult} = require("express-validator")
const User = require('../../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const loginUserController = async (req,res) => {

    const err = validationResult(req)

    if (err.array().length > 0){
        return res.status(200).json({
            validate : true,
            err : err.array()
        })
    }else {

        const {password} = req.body

        //Check if user email exist
        await User.findOne({email : req.body.email}, (e,adv) => {

            if(e){
                return res.status(500).json({
                    err : true,
                    msg : e.message
                })
            }else{
                if (adv){

                    //Compare hash password
                    bcrypt.compare(password,adv.password, (e,resp) => {
                        if (e){
                            return res.status(500).json({
                                err : true,
                                msg : e.message
                            })
                        }else{
                            //If password match
                            if (resp){

                                const token = jwt.sign({
                                    id : adv._id,
                                    firstname: adv.firstname,
                                    lastname: adv.lastname,
                                    email : adv.email

                                }, process.env.PERSONAL_ACCESS_TOKEN)

                                //res.cookie('jwt',token,{maxAge : 90000, httpOnly : true, secure : false})
                                return res.status(200).json({
                                    err : false,
                                    msg : 'User logged in successful',
                                    loggedIn : true,
                                    token : token
                                })


                            }else{
                                return res.status(200).json({
                                    err : true,
                                    msg : 'Invalid Email/Password'
                                })
                            }
                        }
                    })

                }else{
                    return res.status(200).json({
                        err : true,
                        msg : 'Invalid Email/Password'
                    })
                }
            }

        }).clone()

    }

}

module.exports = loginUserController