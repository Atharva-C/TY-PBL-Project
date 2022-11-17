const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const encrypt = (password) => {
    return bcrypt.hashSync(password, 10)
}

const compare = (password, hash) => {
    return bcrypt.compareSync(password, hash)
}

const makeToken = (user) => {
    return jwt.sign(
        {username: user.username},
        process.env.JWT_SECRET,
        { expiresIn: 60*60 }
    )
}

const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET).username
    } catch(e) {
        return null;
    }
}

module.exports = {
    User: mongoose.model('User', UserSchema),
    encrypt,
    compare,
    makeToken,
    verifyToken
}