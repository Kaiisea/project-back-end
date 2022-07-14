const mongoose = require("mongoose");
const extensibleEventSchema = new mongoose.Schema({
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
},
{
    versionKey:false,
}
);

module.exports = mongoose.model("extensibleEvent", extensibleEventSchema);