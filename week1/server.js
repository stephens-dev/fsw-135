const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const inventory = require('./models/inventory')

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

app.use("/", require("./routes/inventory"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(9000, () => {
    console.log("The server is running on port 9000")
})