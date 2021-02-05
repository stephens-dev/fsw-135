const express = require("express")
const userRouter = express.Router()
const User = require('../models/user.js')


    userRouter.get("/:userId", (req, res, next) => {
        User.find(
            {_id: req.params.userId},
            (err, user) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(user)
            })
    })

    userRouter.get("/", (req, res, next) => {
       User.find((err, user) => {
           if(err) {
               res.status(500)
               return next(err)
           }
           return res.status(200).send(user)
       })
       
    })

    userRouter.post("/", (req, res, next) => {
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedUser)
        })
    })

    userRouter.put("/:userId", (req, res, next) => {
        User.findOneAndDelete(
            {_id: req.params.userId},
            (err, deletedUser) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send("Successfully Deleted")
            }
        )
    })

    userRouter.put("/:userId", (req, res, next) => {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            req.body,
            (err, updatedUser) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedUser)
            }
        )
    })
    module.exports = userRouter