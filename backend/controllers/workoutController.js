const { Mongoose } = require("mongoose")
const Workout = require("../models/workoutModel")
const mongoose = require("mongoose")

// get all workouts data
const getAllWorkout = async (req,res) =>{
    const workout = await Workout.find({}).sort({createdAt : -1})
    res.status(200).json(workout)
}
// get a single workout data
const getWorkout = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }

    const workout = await Workout.findById(id)
    
    if(!workout){
        return res.status(404).json({error: "No such workout!!"})
    }
    res.status(200).json(workout)
}


// create new workout
const createWorkout = async (req,res) => {

    const {tittle,reps,load} = req.body
    // add to databse
    try{
        const workout = await Workout.create({tittle,reps,load})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// delete a workout
const deleteWorkout = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }

    const workout = await Workout.findByIdAndDelete({_id : id})

    if(!workout){
        return res.status(404).json({error: "No such workout!!"})
    }
    res.status(200).json({ 
        message: "Berhasil dihapus",    
        data: workout 
    });  

}

// update a workout
const updateWorkout = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"No such Workout"})
    }

    const workout = await Workout.findByIdAndUpdate({_id : id},{
        ...req.body
    })

    if(!workout){
        return res.status(404).json({error:"No such Workout!!"})
    }

    res.status(200).json({
        message:"Data berhasil di update",
        data:workout,
       
    })
    

}


module.exports = {
    getAllWorkout,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}