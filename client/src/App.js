import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import Workers from './components/workers/Workers';

// nav routes
const App = () => (
  <>
    <Navbar />
    <Switch>    
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/workers" component={Workers} />
      <Route component={NoMatch} />
    </Switch>
  </>
)

export default App;
