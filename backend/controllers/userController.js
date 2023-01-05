const User = require('../models/userModel.js')
const bcrypt = require('bcryptjs')
const Jwt = require('jsonwebtoken')

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
  

  
  module.exports = {
    registerUser,
    loginUser,
  }