const express = require("express")

const router = express.Router()


// Get all workout
router.get('/', (req,res) => {
    res.json({mssg:'Get All workout'})
})

// Get single workout
router.get('/:id', (req,res) => {
    res.json({mssg:'Get a single workout'})
})

// Post a new workout
router.post('/', (req,res) => {
    req.body
    res.json({mssg:'Post a new workout'})
})

// Delete a workout
router.delete('/:id', (req,res) => {
    res.json({mssg:'Delete a workout'})
})

// Update a workout
router.patch('/:id', (req,res) => {
    res.json({mssg:'Update a workout'})
})

module.exports = router