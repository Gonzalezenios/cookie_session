const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    email: {type: String, unique: true, lowercase: true, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true}
}, {
    timestamps: true
})