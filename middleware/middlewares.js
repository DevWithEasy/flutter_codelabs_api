const morgan = require('morgan')
const cors = require('cors')
const express = require('express')

const middlewares = [
    cors(),
    morgan('dev'),
    express.urlencoded({extended: false}),
    express.json()
]

const applyMidleware = (app) =>{
    middlewares.map(m=>app.use(m))
}
module.exports = applyMidleware