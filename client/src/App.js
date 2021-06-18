import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
//import About from './components/shared/About';
// nav routes
  const App = () => (
    <>
      <Switch>      
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
       {/* <Route exact path="/about" component={About} /> */}
      </Switch>
     
    </>
  )

export default App;
