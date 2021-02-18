const mongoose = require("mongoose")
const Schema = mongoose.Schema

const issueSchema = new Schema ({
    select: {
        type: String,
        required: true
    },
    textbox: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Issue", issueSchema)