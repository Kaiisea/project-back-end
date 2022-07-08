

const mongoose = require("mongoose");
const scheduleSchema = new mongoose.Schema({
    day: {
        required: true,
        type: Number,
    },
    month: {
        required: true,
        type: Number,
    },
    hour: {
        required: true,
        type: Number,
    },
    event: {
        required: true,
        type: String,
    },
    cover: {
        type: String,
    },
},
{
    versionKey:false,
}
);

module.exports = mongoose.model("schedule", scheduleSchema);