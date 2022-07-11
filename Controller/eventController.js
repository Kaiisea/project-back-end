const express = require("express");
const Model = require("../Model/eventModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Get all registrations
router.get("/",(req, res) => {
    Model.find().then((data) => {
        res.status(200).json({
            status: 'succeeded',
            data,
            error: null
        })
    }).catch((error) => {
        res.status(404).json({
            status: 'failed',
            data: [],
            error: error.message
        });
    })
});

// Get doc by id
router.get("/:id", (req, res) => {
    Model.findById(req.params.id).exec().then((data) => {
        res.status(200).json({
            status: 'succeeded',
            data,
            error: null
        })
    }).catch((error) => {
        res.status(404).json({
            status: 'failed',
            data,
            error: error.message
        });
    })
});

// Post document 
router.post("/", (req, res) => {
    const data = new Model({
        twitch_username: req.body.twitch_username,
        email: req.body.email,
        formId: req.body.formId,
    });
    data.save().then((data) => {
        res.status(201).json({
            status: 'succeeded',
            data,
            error: null
        });
    }).catch((error) => {
        res.status(404).json({
            status: 'failed',
            data,
            error: error.message
        });
    });

});

// Update document by id 
router.patch("/:id", (req, res) => {
    let id = req.params.id;
    let data = req.body;
    let options = {
        new: true,
    }
    Model.findByIdAndUpdate(id, data, options).then((data) => {
        res.status(200).json({
            status: 'succeeded',
            data,
            error: null
        });
    }).catch((error) => {
        res.status(404).json({
            status: 'failed',
            data,
            error: error.message
        });
    });
});

// Delete document by id
router.delete("/:id", (req, res) => {
    let id = req.params.id;
    Model.findByIdAndDelete(id).then((data) => {
        res.status(200).json({
            status: 'succeeded',
            data,
            error: null
        });
    }).catch((error) => {
        res.status(404).json({
            status: 'failed',
            data,
            error: error.message
        });
    });
});

module.exports = router;
