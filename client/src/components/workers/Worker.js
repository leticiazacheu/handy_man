import Services from "../services/Services";

const Worker = ({ id, first_name, last_name, specialty, updateWorker, deleteWorker }) => {
  return(
    <>
      <h3>{first_name} {last_name}</h3>
      <h4>Specialty: {specialty}</h4>
      <button onClick={ () => deleteWorker(id) }>Delete Worker</button>
      <Services workerId={id} updateWorker={updateWorker} />
    </>
  )
}
export default Worker;