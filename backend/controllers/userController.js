const User = require('../models/userModel.js')
const bcrypt = require('bcryptjs')
const Jwt = require('jsonwebtoken')
const multer = require('multer');
const formdata = multer();

/**
 * @api {post} api/v1/user/register Register User
 * @apiName createUser
 * @apiGroup User
 * @apiPermission public
 * @apiDescription Register a new user to Na My Work
 * @apiBody {fullName, email, password}
 * */

const registerUser = async (req, res) => {
  console.log(req)
    const { fullName, email, password } = req.body
  
    if (!fullName || !email || !password) {
      return res.status(422).json({ error: 'Fill in all fields' })
    }
  
    if (password < 6) {
      return res
        .status(422)
        .json({ error: 'Password must be more than six character' })
    }
    const user = await User.findOne({ email })
    if (user) {
      return res.status(422).json({ error: 'User already register' })
    }
  
    // Hash password
    const hashPassword = await bcrypt.hash(password, 10)
  
    const CreateUser = await User.create({
      fullName,
      email,
      password: hashPassword,
    })
    return res.status(201).json({
      success: true,
      message: 'Account Created Successfully',
    })
  }
  
  /**
   * @api {post} api/v1/user/login User Login
   * @apiName login User
   * @apiGroup User
   * @apiPermission public
   * @apiDescription Login User To Na My Work
   * @apiBody {email, password}
   * */
  
  const loginUser = async (req, res) => {
    const { email, password } = req.body
  
    if (!email || !password) {
      return res.status(422).json({ error: 'All fields are required' })
    }
  
    const user = await User.findOne({ email }).select('+password')
  
    //Check If The User Signed Uo With Gooogle.
  
    if (user.googleId) {
      return res.status(422).json({
        error: 'You Signed Up With Google. Please Login With Google To Continue',
      })
    }
  
    //Check If There's No User
    if (!user) {
      return res.status(422).json({
        error: 'User Does Not Exist. Please register To continue.',
      })
    }
  
    //Password Comparation with the Encrypted Password
  
    const isMatch = await bcrypt.compare(password, user.password)
  
    //Removing password from the reponse
    user.password = null
  
    if (isMatch) {
      const token = Jwt.sign({ user_id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
      })
  
      res.status(200).json({ token, user })
    } else {
      return res.status(401).json('Invalid Login Details. Please Try Again.')
    }
  }
  

  /**
 * @api {post} api/v1/user/info update User
 * @apiName updateUser
 * @apiGroup User
 * @apiPermission public
 * @apiDescription Update User Infomation on Na my Work. Any of the information have been passed to the body of the request
 * @Description The profilePicture, portfolio and resume are files upload.
 * @apiBody {_id, country, phone, resume, business_name, business_type, profilePicture}
 * */

const updateUser = async (req, res) => {
  const {
    _id,
    fullName,
    phone,
    location,
    city,
    business_name,
    business_type,
    profilePicture,
  } = req.body

  const findUser = await User.findById(_id)

  if (!findUser) {
    return res.status(422).json({
      err: 'User Not Found. Please Register To Continue.',
    })
  }
  const users = await User.findOneAndUpdate(
    { _id },
    { 
      fullName:fullName,
      phone: phone,
      location:location,
      city:city,
      business_name: business_name,
      business_type: business_type,
      profilePicture: profilePicture,
    },
  )
  //Update User Info In database
  return res
    .status(200)
    .json({ users, message: 'User Info Updated Successfully' })
}

const addUserProducts = async (req, res) => {
  console.log(req.body)
  console.log(req.file.filename)
  const {
    _id,
    file,
    desc,
    rating
  } = req.body
  const product = {
    desc: desc,
    rating: rating
  }
  User.updateOne(
    { _id: _id },
    { 
      $push:{productAndServices: product}
    },(err)=>{
      if (!err) {
        res.status(201).json({success :"Succesfully updated"})
    } else {
        console.log(err)
    }
    }
  )
}


  
  module.exports = {
    registerUser,
    loginUser,
    updateUser,
    addUserProducts
  }