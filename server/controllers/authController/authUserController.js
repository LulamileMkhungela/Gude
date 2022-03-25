
const jwt = require('jsonwebtoken')

const authUserController = (req,res) => {

    const cookie = req.body.jwt
    console.log(req.body)

    try{
        jwt.verify(cookie,process.env.PERSONAL_ACCESS_TOKEN, (e,authData) => {

            if (e){
                return res.status(200).json({
                    err : true,
                    msg : 'User Not Authenticated'
                })
            }else{
                return res.status(200).json({
                    err : false,
                    msg : 'User verified',
                    userInfo : authData
                })
            }
        })
    }catch (e){
        return res.status(200).json({
            err : true,
            msg : 'User Not Authenticated'
        })
    }

}

module.exports = authUserController