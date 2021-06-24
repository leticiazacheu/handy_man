import axios from 'axios';
import { useState } from 'react';

const WorkerForm = ({ props }) => {
  // const [worker, setWorker] = useState({ first_name: "", last_name: "", specialty:"" })
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [specialty, setSpecialty] = useState("")
  console.log(props);
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("/api/workers", {first_name:first_name, last_name:last_name, specialty:specialty})
      .then((res) => {
        console.log(res.data)
        // props.history.goBack();
      })
      .catch((err) => alert(err));
    };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name='first_name'
        value={first_name}
        onChange={(e) => setFirstName(e.target.value )}
        placeholder="First name"
        required
      />
      <input
        name='last_name'
        value={last_name}
        onChange={(e) => setLastName(e.target.value )}
        placeholder="Last name"
        required
      />
      <input
        name='specialty'
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value )}
        placeholder="Specialty"
        required
      />
      <button>Submit</button>
    </form>
  )
}

export default WorkerForm;