const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const members = require("./Controller/memberController");
const login = require("./Controller/loginController");
const schedule = require("./Controller/scheduleController");
const minecraftEvent = require("./Controller/minecraftEventController");
const extensibleEvent = require("./Controller/extensibleEventController");
const specialEvent = require("./Controller/specialEventController");
const birthdayEvent = require("./Controller/birthdayEventController");

// Access of the environment variables
require("dotenv").config();

// Connection String to the database
const conn = process.env.DATABASE_URL;
const port = 8000;

// Connection to the database
mongoose.connect(conn);
const database = mongoose.connection;

// Checking the connection to the database
database.on("error", (error)=>{
    console.log(error);
});
database.once("connected", ()=>{
    console.log("Succesfully connected");
});

const app = express();
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use("/members", members);
app.use("/login", login);
app.use("/schedule", schedule);
app.use("/minecraftEvent", minecraftEvent);
app.use("/extensibleEvent", extensibleEvent);
app.use("/specialEvent", specialEvent);
app.use("/birthdayEvent", birthdayEvent);


app.listen(port, ()=>{
    console.log("server running at http://localhost:" + port);
});

