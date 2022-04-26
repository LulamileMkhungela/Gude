const User = require('../../models/User')
const Student = require('../../models/Student');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const profileController = {
    getUserInfor: async (req, res) => {

        const user = await User.findOne({_id: req.user.id})
        // const {acc_type} = req.body;

        try {

            //Fetch From Table Students
            const student = await Student.findOne({_student_id: req.user.id}).select('-password')
            // console.log(user)
            const userInfo = {student_info: student, user_info: user}
            res.json(userInfo)
        } catch (err) {
            return res.status(200).json({msg: err.message})
        }

    },
    updateUser: async (req, res) => {
        const {acc_type} = req.body;
        try {
            if (acc_type === 'student') {
                //update from the student
                const {tertiary_name, contact, location} = req.body
                await Student.findOneAndUpdate({_student_id: req.user.id}, {tertiary_name, contact, location,})
            }
            //update on user
            const {firstname, lastname, profileImg} = req.body
            await User.findOneAndUpdate({_id: req.user.id}, {lastname, profileImg, firstname})
            res.json({msg: "Update Success!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }


}


module.exports = profileController