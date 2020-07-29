const mongoose =require('mongoose')

const UserSchema = new mongoose.Schema({
    FirstName : String,
    LastName : String,
    Email : String,
    Password : String,
    MobileNumber : String 
})

module.exports = mongoose.model('User', UserSchema)