const User = require('../../models/User')
const sendMail = require('../sendMail')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {CLIENT_URL} = process.env
const forgotpasswordController = {
    
    forgotPassword: async (req, res) => {
        try {
            const {email} = req.body
            const user = await User.findOne({email})
            if (!user) return res.status(400).json({success: false, error: "This email does not exist."})
            const access_token = createAccessToken({id: user._id})
            console.log(access_token)
            const url = `${CLIENT_URL}/user/reset/${access_token}`
            sendMail(email, url, "Reset your password")
            res.json({msg: "Re-send the password, please check your email."})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
        resetPassword: async (req, res) => {
            try {
                const {password} = req.body
                console.log(password)
                console.log(req.user);


                const passwordHash = await bcrypt.hash(password, 12)
                await User.findOneAndUpdate({_id: req.user.id}, {
                    password: passwordHash
                })
                res.json({success: true, msg: "Password successfully changed!"})
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        }
        
    
}
const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
}
module.exports = forgotpasswordController 