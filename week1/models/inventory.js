const mongoose = require("mongoose")
const schema = mongoose.Schema

const inventorySchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Inventory', inventorySchema)