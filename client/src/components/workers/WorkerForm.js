import { useState } from 'react';

const WorkerForm = ({ addWorker }) => {
  const [worker, setWorker] = useState({ first_name: "", last_name: "", specialty:"" })
  // const [firstName, setFirstName] = useState("")
  // const [phone, setPhone] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    addWorker(worker)
    setWorker({ first_name: "", last_name: "", specialty: "" })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name='first_name'
        value={worker.first_name}
        onChange={(e) => setWorker({...worker, first_name: e.target.value })}
        placeholder="First name"
        required
      />
      <input
        name='last_name'
        value={worker.last_name}
        onChange={(e) => setWorker({...worker, last_name: e.target.value })}
        placeholder="Last name"
        required
      />
      <input
        name='specialty'
        value={worker.specialty}
        onChange={(e) => setWorker({...worker, specialty: e.target.value })}
        placeholder="Specialty"
        required
      />
      <button>Submit</button>
    </form>
  )
}
export default WorkerForm;