import { useEffect } from "react";
import WorkoutDetail from "../components/workoutDetail";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";

const Home = () => {
  // const [workouts, setWorkouts] = useState(null);

  const { workouts, dispact } = useWorkoutContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        // console.log("Tes : ", json);
        // setWorkouts(json);
        // for (let i = 0; i < json.length; i++) {
        //   const element = json[i]._id;
        //   console.log("masuk ", element);
        // }

        dispact({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  });

  return (
    <div className="Home px-20 flex justify-between">
      <div className="data w-full">
        {/* detail page card */}
        {workouts &&
          workouts.map((workout) => (
            // <p key={workout.id}> {workout.tittle} </p>
            <WorkoutDetail key={workout._id} workout={workout} />
          ))}
      </div>
      <div className="form w-1/3">
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
