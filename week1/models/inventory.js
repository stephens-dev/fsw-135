const mongoose = require("mongoose")
const Schema = mongoose.Schema

const inventorySchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('inventory', inventorySchema)