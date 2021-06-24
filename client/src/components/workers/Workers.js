import { useState, useEffect } from 'react';
import axios from 'axios';
import WorkerList from './WorkerList';
import WorkerForm from './WorkerForm';

const Workers = () => {
  const [workers, setWorkers] = useState([])

  const getWorkers = async () => {
    try {
      let res = await axios.get("/api/workers");
      console.log(res.data);
      setWorkers(res.data)
    } catch (e) {
      console.log("error getting workers", e);
    }
  }

  useEffect (() => {
    getWorkers();
  }, [])
  
  // useEffect( () => {
  //   axios.get("/api/workers")
  //     .then( res => {
  //       setWorkers(res.data)
  //       console.log(res.data)
  //     })
  //     .catch( err => console.log(err) )
  // }, [])
  
  const addWorker = (worker) => {
    // { blog: {title: "asdfas", category: "adsfa"}}
    axios.post("/api/workers", { worker } )
      .then( res => {
        setWorkers([...workers, res.data ])
      })
      .catch( err => console.log(err) )
  }
  
  const updateWorker = (id, worker) => {
    axios.put(`/api/workers/${id}`, { worker } )
      .then( res => {
        const updatedWorkers = workers.map( w => {
          if (w.id === id) {
            return res.data
          }
          return w
        })
        setWorkers(updatedWorkers)
      })
      .catch( err => console.log(err) )
  }
  
  const deleteWorker = (id) => {
    axios.delete(`/api/workers/${id}`)
      .then( res => {
        setWorkers( workers.filter( w => w.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err) )
  }

  const renderWorkers = () => {
    return workers.map((worker) => (
      <>
        <h3><a href={`/worker/${worker.id}`}>{worker.first_name}{worker.last_name}</a></h3>
        <h4>Specialty: {worker.specialty}</h4>
        <button onClick={ () => deleteWorker }>Delete Worker</button>
        <br />
      </>
    ))
  }
  
  return(
    <>
      <h1>
        List of Workers
      </h1>
      {/* {workers.map((worker) => (
        <a href={`/worker/${worker.id}`}>{worker.first_name}</a>
      ))} */}
      <h3>Add a new worker:</h3>
      <WorkerForm addWorker={addWorker} />
      <br/>
      {/* <WorkerList 
        workers={workers}
        updateWorker={updateWorker} 
        deleteWorker={deleteWorker} /> */}
      {renderWorkers()}
    </>
  )
}

export default Workers;