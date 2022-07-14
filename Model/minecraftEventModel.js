const mongoose = require("mongoose");
const minecraftEventSchema = new mongoose.Schema({
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

module.exports = mongoose.model("minecraftEvent", minecraftEventSchema);