import { useEffect, useState } from "react"
import WorkoutDetail from "../components/workoutDetail"



const Home = () => {

    const [workouts,setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch("/api/workouts")
            const json = await response.json()
            
           

            if(response.ok){
                console.log("Tes : ",json)
                setWorkouts(json)

                for (let i = 0; i < json.length; i++) {
                    const element = json[i]._id;
                    console.log("masuk ",element)
                }

            }

            
        }

        fetchWorkouts()
    }, [])

    return(
        <div className="Home px-20">
            
            <p className="text-green-400" >Home</p>

            <div className="data ">
                {/* detail page card */}
                {workouts && workouts.map((workout) =>(
                    // <p key={workout.id}> {workout.tittle} </p>
                    <WorkoutDetail key={workout._id} workout={workout}/>
                ))}
            </div>
        </div>
    )
}

export default Home