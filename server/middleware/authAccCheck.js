const User = require('../../server/models/User')
const Student= require('../../server/models/Student');


const authAccCheck =async(req,res,next)=>{
    const user =  await User.findOne({_id:req.user.id})
    console.log(user)
    if (user.acc_type === 'student'){
        try {
               //Fetch From Table Students
                const student = await  Student.find({_student_id: req.user.id}).select('-password')
                const user = await User.findById(req.user.id, 'firstname lastname')
               // console.log(user)
               const userInfo = {student_info : student,user_info : user}
               res.json(userInfo)
               next()
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


}
module.exports= authAccCheck;