import React from 'react';
import Comments from '../comments/Comments';

const Service = ({ id, complete, rating, type, workerId, updateService, deleteService }) => {
  return (
    <>
      <h1>{type}</h1>
      <h2>Rating: {rating}</h2>
      <h2>Complete: {complete}</h2>
      <button onClick={() => updateService(id) }>Edit Service</button>
      <button onClick={() => deleteService(id) }>Delete Service</button>
      <Comments serviceId={id} updateService={updateService} deleteService={deleteService} />
    </>
  )
}

export default Service;