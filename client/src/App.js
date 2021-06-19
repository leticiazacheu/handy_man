import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Navbar from './components/shared/Navbar';
import Workers from './components/workers/Workers';
// import WorkerList from './components/workers/WorkerList';
//import About from './components/shared/About';
// nav routes
  const App = () => (
    <>
      <Navbar />
      <Switch>      
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/workers" component={Workers} />
        {/* <Route exact path="/workerlist" component={WorkerList} /> */}
      </Switch>
     
    </>
  )

export default App;
