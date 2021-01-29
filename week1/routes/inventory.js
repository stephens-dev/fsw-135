const express = require("express")
const inventory = require("../models/inventory")
const inventoryRouter = express.Router()


inventoryRouter.get("/", (req, res, next) => {
    inventory.find((err, items) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

inventoryRouter.post("/", (req,res,next) => {
    const newItem = new inventory(req.body)
    newItem.save((err, savedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})


inventoryRouter.get("/:itemId", (req, res, next) => {
    inventory.find(
       {_id: req.params.itemId},
       (err, items) => {
           if(err) {
               res.status(500)
               return next(err)
           }
           return res.status(200).send(items)
       })
})

inventoryRouter.delete("/:itemId", (req, res, next) => {
    inventory.findOneAndDelete(
        {_id: req.params.itemId},
        (err, deletedItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send("Succsessfully Deleted")
        }
    )
})

inventoryRouter.put("/:itemId", (req, res, next) => {
    inventory.findOneAndUpdate(
        {_id: req.params.itemId},
        req.body,
        {new: true},
        (err, updatedItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})

module.exports = inventoryRouter