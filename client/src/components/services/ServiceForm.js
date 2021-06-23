import { useState, useEffect } from 'react';

const ServiceForm = ({ addService }) => {
    const [service, setService] = useState({ title: "", body: "", rating: null})

    const handleSubmit = (e) => {
      e.preventDefault()
      addService(service)
      setService()
    }
     
  return(
    <form onSubmit={handleSubmit}>
      <input
        name = "title"
        value = { service.title }
        onChange = { (e) => setService({...service, title: e.target.value}) }
        required
        placeholder = "title"
        />
      <input
        name = "body"
        value = { service.bodyrating }
        onChange = { (e) => setService({...service, bodyrating: e.target.value}) }
        placeholder = "body"
        required
        />
      <input
        name = "rating"
        value = { service.rating }
        onChange = { (e) => setService({...service, rating: e.target.value}) }
        placeholder = "rating"
        required
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default ServiceForm;