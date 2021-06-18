import Services from "../services/Services";

const Worker = ({ id, first_name, last_name, specialty, updateWorker, deleteWorker }) => {
  return(
    <>
      <h1>{first_name} {last_name}</h1>
      <h3>Specialty: {specialty}</h3>
      <button onClick={ () => deleteWorker(id) }>Delete Worker</button>
      <Services workerId={id} />
    </>
  )
}
export default Worker;