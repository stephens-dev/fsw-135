const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const Inventory = require('./models/inventory')

app.use(express.json())
app.use(morgan('dev'))


mongoose.connect('mongodb://localhost:27017',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
    () => console.log("Connected to the DB")
)

app.get("/", (req, res, next) => {
    Inventory.find((err, inventory) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)
    })
})

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(9000, () => {
    console.log("The server is running on port 9000")
})