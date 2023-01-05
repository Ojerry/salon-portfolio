const mongoose = require("mongoose")

// Schema
const userSchema = new mongoose.Schema(
    {
        fullName:  { type: String, required: [true, 'Full Name Is Required'] },
        email: { type: String, required: [true, 'Email is Required'],},
        password:  { type: String, select: false,},
        phone:  { type: Number, default: null },
        business_type:  { type: String, default: '' },
        business_name:  { type: String, default: '' },
        location:  { type: String, default: '' },
        city:  { type: String, default: '' },
        profilePicture:   { type: String, default: '' },
        productAndServices: {
            type: Array, default:[{photoFileName: '', desc:'',rating:''}]
        },
    },
    {
      createdAt: { type: Date, default: Date.now() },
      updatedAt: { type: Date, default: Date.now() },
    },
)

const User = mongoose.model('User', userSchema)

// exports.User = User
module.exports = User