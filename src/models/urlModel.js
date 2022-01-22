const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    urlCode: {
        type: String,
        unique: true,
        lowercase: true,
        required: 'Enter a Short code',
        trim: true,
    },

    longUrl: {
        type: String,
        required: true,
    },

    shortUrl: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true })


module.exports = mongoose.model('urlShorten', urlSchema)
