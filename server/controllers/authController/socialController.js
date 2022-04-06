const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { OAuth2Client } = require('google-auth-library');
const fetch = require('node-fetch');

const client = new OAuth2Client(process.env.MAILING_SERVICE_CLIENT_ID)
const socialController = {
    facebookLogin: async (req, res) => {
        try {
            const {accessToken, userID} = req.body

            const URL = `https://graph.facebook.com/v2.9/${userID}/?fields=id,name,email,picture&access_token=${accessToken}`
            
            const data = await fetch(URL).then(res => res.json()).then(res => {return res})

            const {email, name, picture} = data

            const password = email + process.env.FACEBOOK_SECRET

            const passwordHash = await bcrypt.hash(password, 12)

            const user = await User.findOne({email})

            if(user){
                const isMatch = await bcrypt.compare(password, user.password)
                if(!isMatch) return res.status(400).json({msg: "Password is incorrect."})
                res.json({msg: "Login success!"})
            } 
            else{
                const newUser = new User({
                    firstname:name, email, password: passwordHash, profileImg: picture.data.url
                })

                await newUser.save()
                res.json({msg: "Login success!"})
            }


        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    googleLogin: async (req, res) => {
        // try {
            const {tokenId} = req.body

            const verify = await client.verifyIdToken({idToken: tokenId, audience: process.env.MAILING_SERVICE_CLIENT_ID})
            console.log(verify);
                    
        //     const {email_verified, email, name, picture} = verify.payload

        //     const password = email + process.env.GOOGLE_SECRET

        //     const passwordHash = await bcrypt.hash(password, 12)

        //     if(!email_verified) return res.status(400).json({msg: "Email verification failed."})

        //     const user = await User.findOne({email})

        //     if(user){
        //         const isMatch = await bcrypt.compare(password, user.password)
        //         if(!isMatch) return res.status(400).json({msg: "Password is incorrect."})

               

        //         res.json({msg: "Login success!"})
        //     }else{
        //         const newUser = new User({
        //             firstname:name, email, password: passwordHash, profileImg: picture.data.url
        //         })

        //         await newUser.save()
        //         res.json({msg: "Login success!"})
        //     }


        // } catch (err) {
        //     return res.status(500).json({msg: err.message})
        // }
    },
    
}
module.exports = socialController