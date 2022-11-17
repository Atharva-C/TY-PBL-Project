require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { User, encrypt, compare, makeToken, verifyToken } = require('./models/User')
const { StatusCodes } = require('http-status-codes')

const bodyParser = require('body-parser')

app.use((req, res, next) => {
    console.log(`Request from ${req.originalUrl}`)
    next()
})

app.use(bodyParser.json())

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body)
    if(username == null || username.trim() == '' || password == null || password.trim() == '') {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: 'Both username and password must be provided'
        })
    }
    let user = await User.findOne({ username })
    if(user != null) {
        return res.status(StatusCodes.CONFLICT).json({
            message: 'User already exists'
        })
    }

    user = await User.create({ username, password: encrypt(password) })
    return res.status(StatusCodes.OK).json({
        username,
        token: makeToken(user),
        expiresIn: '1h'
    })
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if(username == null || username.trim() == '' || password == null || password.trim() == '') {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: 'Both username and password must be provided'
        })
    }
    const user = await User.findOne({ username })
    if(user == null) {
        return res.status(StatusCodes.CONFLICT).json({
            message: 'User doesn\'t exist'
        })
    }

    if(compare(password, user.password)) {
        // password is correct
        return res.status(StatusCodes.OK).json({
            username,
            token: makeToken(user),
            expiresIn: '1h'
        })
    } else {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: 'Incorrect password'
        })
    }
})

const auth = async (req, res, next) => {
    if(req.headers.auth == null) {
        res.status(StatusCodes.UNAUTHORIZED).json({
            message: 'Auth token not provided'
        })
    }
    const username = verifyToken(token)
    if(username == null) {
        return res.sendFile(path.join(__dirname, "public", "unauthorized.html"))
    } else {
        req.username = username
    }
    next()
}

app.use(express.static('./public'))
app.use(express.static('./private'))
const run = async () => {
    await mongoose.connect(process.env.MONGODB_URI)
    app.listen(process.env.PORT, console.log(`Listening on PORT ${process.env.PORT}`))
}
run()