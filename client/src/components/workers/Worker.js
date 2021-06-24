import Axios from 'axios';
import {useEffect, useState } from 'react';
import Services from "../services/Services";

// const Worker = ({ id, first_name, last_name, specialty, updateWorker, deleteWorker }) => {
//   return(
//     <>
//       <h3><a href={`/workers/Worker/${id}`}>{first_name} {last_name}</a></h3>
//       <h4>Specialty: {specialty}</h4>
//       {/* <h4><a href={`/workers/Worker/${id}/services`}>Services</a></h4> */}
//       <button onClick={ () => deleteWorker(id) }>Delete Worker</button>
//       <Services workerId={id} />
//       {/* <Services workerId={id} updateWorker={updateWorker}/> */}
//     </>
//   )
// }

const Worker = (props) => {
  const {id} = props.match.params;
  const [worker, setWorker] = useState({});

  const getWorker = async () => {
    let res = await Axios.get(`/api/worker/${id}`);
    setWorker (res.data);
    console.log(res.data);
  }

  useEffect(() => {
    getWorker();
  }, []);

  return (
    <>
      <h1>{worker.first_name}{worker.last_name}</h1>
      <Services serviceId={id} />
    </>
  )
}
export default Worker;