import Worker from './Worker';

const WorkerList = ({ workers, updateBlog, deleteWorker}) => (
  <>
    { workers.map( b => 
      <>
        <Worker {...w} updateWorker={updateWorker} deleteWorker={deleteWorker} />
        <hr />
      </>
    )}
  </>
)
export default WorkerList;