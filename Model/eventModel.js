const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
    twitch_username: {
        required: true,
        unique: true,
        type: String,
    },
    email: {
        required: true,
        unique: true,
        type: String,
    },
    formId: {
        type: String,
    }
},
{
    versionKey:false,
}
);

module.exports = mongoose.model("event", eventSchema);