const express = require('express')

const { getUsers, addUser, deleteUser, updateUser, searchUser } = require('../controllers/userControllers')

const { validationmiddleware } = require('../middlewares/userDetailsValidation')

const userRoutes = express.Router()

//get

userRoutes.get("/getusers", getUsers )    //all users

userRoutes.get("/searchuser", searchUser)  //single user

//post

userRoutes.post("/adduser", validationmiddleware, addUser)

//put 

userRoutes.put("/updateuser/:id", updateUser)

//delete

userRoutes.delete("/deleteuser/:id", deleteUser)

module.exports = userRoutes
