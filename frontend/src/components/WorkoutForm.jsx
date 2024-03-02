import { useState } from "react";
import { WorkoutContext } from "../context/workoutContext";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const { dispact } = useWorkoutContext();
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");

  const [dtime, setDtime] = useState("");

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, reps, load, dtime };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setLoad("");
      setReps("");
      setTitle("");
      setDtime("");
      setError(null);
      console.log("Add succed", json);
      dispact({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <form
      action=""
      className="create flex flex-col w-full"
      onSubmit={handleSubmit}
    >
      <h1>Add data</h1>

      <label>judul : </label>
      <input
        className="form border rounded h-10 mt-2"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>reps : </label>
      <input
        className="form border rounded h-10 mt-2"
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />

      <label>load : </label>
      <input
        className="form border rounded h-10 mt-2"
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />

      <input
        className="form border rounded h-10 mt-2"
        type="datetime-local"
        onChange={(e) => setDtime(e.target.value)}
        value={dtime}
      />

      <div className="button flex justify-center">
        <button className="mt-4 bg-green-100 p-2 rounded-full w-1/2">
          Add data
        </button>
      </div>
      {error && <div className="error"> {error} </div>}
    </form>
  );
};

export default WorkoutForm;
