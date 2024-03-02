import { useWorkoutContext } from "../hooks/useWorkoutsContext";

const WorkoutDetail = ({ workout }) => {
  const { dispatch } = useWorkoutContext();
  const createdAt = workout.dtime;

  // Mengonversi string tanggal dan waktu ke objek Date
  const dateObject = new Date(createdAt);

  // Mendapatkan tanggal dalam format tanggal saja (DD-MM-YYYY)
  const date = dateObject.getDate(); // Mendapatkan tanggal (1-31)
  const month = dateObject.getMonth() + 1; // Mendapatkan bulan (0-11), tambahkan 1 karena bulan dimulai dari 0
  const year = dateObject.getFullYear(); // Mendapatkan tahun (4 digit)

  // Mendapatkan jam, menit, dan detik
  const hours = dateObject.getHours(); // Mendapatkan jam (0-23)
  const minutes = dateObject.getMinutes(); // Mendapatkan menit (0-59)

  // Menggabungkan tanggal, bulan, tahun, jam, menit, dan detik menjadi string format tanggal dan waktu
  const formattedDateTime = `${hours}:${minutes} - ${date}-${
    month < 10 ? "0" + month : month
  }-${year}`;

  // Output: "25-02-2024 13:32:15"
  const handleDelete = async () => {
    const response = await fetch("api/workouts/" + workout._id, {
      method: "DELETE",
    });

    const json = await response.json();
    console.log(json);

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="data w-1/2 p-4 mb-4 rounded-lg bg-red-100">
      <h1>Judul : {workout.title}</h1>
      <h1>Reps : {workout.reps}</h1>
      <h1>Load : {workout.load}</h1>
      <h1>Load : {formattedDateTime}</h1>
      <span onClick={handleDelete}>Hapus</span>
    </div>
  );
};

export default WorkoutDetail;
