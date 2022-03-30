const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const profileController = {
    getUserInfor: async (req, res) => {
        const {acc_type} = req.body;
        if (acc_type === 'student'){
            //Fetch From Table Students

        }else{
            //Fetch From Table Users
        }
        try {

         const user = await User.findById(req.user.id).select('-password')
      
            res.json(user)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateUser: async (req, res) => {
        try {
            const {firstname,lastname,} = req.body
            await User.findOneAndUpdate({_id: req.user.id}, {
                firstname,lastname
            })

            res.json({msg: "Update Success!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

}


module.exports = profileController