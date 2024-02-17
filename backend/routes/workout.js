const express = require("express")
const Workout = require("../models/workoutModel")

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
router.post('/', async (req,res) => {

    const {tittle,reps,load} = req.body

    try{
        const workout = await Workout.create({tittle,reps,load})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }

    
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


// Kapan menggunakan asyn dan syc dan caranya gimana