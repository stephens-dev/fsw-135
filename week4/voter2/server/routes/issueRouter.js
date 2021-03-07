const express = require("express")
const issueRouter = express.Router()
const Issue = require('../models/issue')

issueRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedIssue)
    })
  })

  issueRouter.get("/", (req, res, next) => {
    Issue.find((err, Issue) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(Issue)
    })
    
 })

 issueRouter.get("/user", (req, res, next) => {
  Issue.find({ user: req.user._id }, (err, Issue) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(Issue)
  })
})


 issueRouter.delete("/:issueId", (req, res, next) => {
     Issue.findOneAndDelete(
         {_id: req.params.issueId},
         (err, deletedIssue) => {
             if(err) {
                 res.status(500)
                 return next(err)
             }
             return res.status(200).send("Successfully Deleted")
         }
     )
 })

module.exports = issueRouter