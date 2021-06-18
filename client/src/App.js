import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Nabar from './components/shared/Navbar';
// nav routes
  const App = () => (
    <>
      <Nabar />
      <Switch>      
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
       <Route exact path="/about" component={About} />
      </Switch>
     
    </>
  )

export default App;
