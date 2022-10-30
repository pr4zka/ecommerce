const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config/index')

const generateToken = (user) => {
    const token = jwt.sign({id: user.id}, JWT_SECRET, {expiresIn: '7d'})
    return token
}

const verifyToken = (user) => {
    const token = jwt.verify(user, JWT_SECRET)
    return token
}

module.exports = {
    generateToken,
    verifyToken
}