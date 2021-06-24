import axios from 'axios';
import { useState } from 'react';
import Service from './Service';

const ServiceForm = (props) => {
  const [service, setService] = useState({type:"", complete:false, rating:""});
  console.log(props);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/workers/${workerId}/services", { type:"", complete:false, rating:""})
      .then((res) => {
        console.log(res.data);
        props.history.goBack();
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <input
        name = "type"
        value = {service.type }
        onChange = { (e) => setService({...service, type:e.target.value}) }
        required
        placeholder = "type"
        />
      <input
        type="checkbox"
        name = "complete"
        defaultChecked={service.value}
        onChange = { (e) => setService({...service, complete:e.target.checked}) }
        placeholder = "complete"
        required
        />
      <input
        name = "rating"
        value = {service.rating }
        onChange = { (e) => setService({...service, rating:e.target.value}) }
        placeholder = "rating"
        required
      />
      <button type="submit">Submit</button>
      </form>
    </>
  )
}

// const ServiceForm = ({ addService }) => {
//     const [service, setService] = useState({ type: "", complete: "", rating: ""})

//     const handleSubmit = (e) => {
//       e.preventDefault()
//       addService(service)
//       setService({ type: "", complete: "", rating: "" })
//     }
     
//   return(
//     <form onSubmit={handleSubmit}>
//       <input
//         name = "type"
//         value = { service.type }
//         onChange = { (e) => setService({...service, type: e.target.value}) }
//         required
//         placeholder = "type"
//         />
//       <input
//         name = "complete"
//         value = { service.complete }
//         onChange = { (e) => setService({...service, complete: e.target.value}) }
//         placeholder = "complete"
//         required
//         />
//       <input
//         name = "rating"
//         value = { service.rating }
//         onChange = { (e) => setService({...service, rating: e.target.value}) }
//         placeholder = "rating"
//         required
//       />
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

export default ServiceForm;