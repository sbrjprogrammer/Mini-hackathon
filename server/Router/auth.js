
const express = require('express')
const controllers = require('../controllers/authController')
const Router = express.Router()
const User = require('../model/userSchema')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Authentication = require("../middleware/Authentication")



Router.get("/",controllers.get)
Router.post("/register", controllers.register)
Router.post('/sigin',controllers.sigin)
Router.get('/about',Authentication,controllers.about)
Router.get('/getData',Authentication,controllers.getData)
Router.post("/contact",Authentication,controllers.contact)
Router.get("/adminroute",Authentication,controllers.adminRouter)

Router.get('/logout',controllers.logout)

module.exports = Router
