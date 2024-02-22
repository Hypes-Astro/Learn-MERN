
const WorkoutDetail = ({workout}) => {
    return(
        <div className="data w-1/3 p-4 mb-4 rounded-lg bg-red-100">
            <h1>Judul  : {workout.tittle}</h1>
            <h1>Reps  : {workout.reps}</h1>
            <h1>Load  : {workout.load}</h1>
        </div>
    )
}

export default WorkoutDetail