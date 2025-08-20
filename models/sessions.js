const mongoose = require("mongoose");
const DB = require("../config/dbconfig.js");

let db = new DB();
const sessionSchema = new db.mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    expiredAt: {
        type: Date,
        required: true
    }
},
    {
        timestamps: true
    }
);

const Session = db.mongoose.model('Session', sessionSchema);

exports.Session = Session;
