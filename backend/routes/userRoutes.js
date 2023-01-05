const express = require('express')
const upload = require("../middleware/upload");
const {
  loginUser,
  registerUser,
  updateUser,
  addUserProducts
} = require('../controllers/userController.js')

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/info', updateUser)
userRouter.post('/addUserProducts', upload.single('file'), addUserProducts)

module.exports = userRouter
