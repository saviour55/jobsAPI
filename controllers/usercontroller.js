const {User} = require('../models/usermodel');
const {Jobs} = require('../models/jobsmodel');
const bcrypt= require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()



const register = async (req, res)=>{
    console.log('register request recieved:', req.body)
    const {email, password} = req.body

    const hashedpassword = await bcrypt.hash(password, 10)
     await User.create({email, password:hashedpassword})
     res.status(200).json({message: 'user added successfully'})
}


const login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({
      where: {
          email
      }
  })

  const userData = user.dataValues
  console.log(userData)
  if (!user) {
      return res.status(400).json({ message: 'User does not exist' })
  }

  const valid = await bcrypt.compare(password, userData.password)

  const payload = {
      userId: user.userId
  }
  console.log(payload)
  if (valid) {
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY) 
    res.status(200).json({ message: 'User Logged In successfully', token})
}
}
const logout = async (req, res) => {
    // Invalidate the token by simply not accepting it for further use.
    // Generally, this means the client should remove the token on their side.
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    // Optionally, you could implement a blacklist mechanism to store invalidated tokens on the server side.
    // Here, we're simply informing the client to remove the token.
    res.status(200).json({ message: 'Logged out successfully. Please remove the token on the client side.' });
};

module.exports = { register, login, logout };





