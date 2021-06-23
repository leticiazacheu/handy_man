import React from 'react';
import Comments from '../comments/Comments';

const Service = ({ id, complete, rating, title, worker_id, updateService, deleteService }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>Rating: {rating}</h2>
      <h2>Complete: {complete}</h2>
      <button onClick={() => updateService(id) }>Edit Service</button>
      <button onClick={() => deleteService(id) }>Delete Service</button>
      <Comments serviceId={id} updateService={updateService} deleteService={deleteService} />
    </>
  )
}

export default Service;