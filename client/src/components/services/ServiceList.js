import Service from './Service';

const ServiceList = ({ workerId, services, updateService, deleteService }) => {

  return (
    <>
      { services.map( s =>
        <Service {...s} workerId={workerId} updateService={updateService} deleteService={deleteService} />
      )}
    </>
  )
}

export default ServiceList;