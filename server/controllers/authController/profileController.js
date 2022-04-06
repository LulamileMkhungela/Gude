const User = require('../../models/User')
const Student= require('../../models/Student');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const profileController = {
    getUserInfor: async (req, res) => {
        const user =  await User.findOne({_id:req.user.id})
        

        // const {acc_type} = req.body;
    
        if (user.acc_type === 'student'){
            try {

               //Fetch From Table Students
            const student = await  Student.find({_student_id: req.user.id}).select('-password')
            const user = await User.findById(req.user.id, 'firstname lastname')
            // console.log(user)
            const userInfo = {student_info : student,user_info : user}
            res.json(userInfo)
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
            

        }else{
            //Fetch From Table Users
            try {

                const user = await User.findById(req.user.id).select('-password')
      
                res.json(user)
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
            
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