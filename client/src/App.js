import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import Workers from './components/workers/Workers';
import Worker from './components/workers/Worker';
import Services from './components/services/Services';
import Service from './components/services/Service';

// nav routes
const App = () => (
  <>
    <Navbar />
    <Switch>    
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/workers" component={Workers} />
      <Route exact path="/worker/:id" component={Worker} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/service/:id" component={Service} />
      <Route component={NoMatch} />
    </Switch>
  </>
)

export default App;
