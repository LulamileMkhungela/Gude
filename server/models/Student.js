const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    _student_id : {
        type : String,
        required : true
    },
    contact : {
        type : Number,
        required : true
    },
    alt_contact : {
        type : Number,
        default : null
    },
    student_email : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    tertiary_name : {
        type : String,
        default:null
    }
},{
    timestamps : true
})

module.exports = mongoose.model('Student', studentSchema)