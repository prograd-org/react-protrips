import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AddTrip from './components/AddTrip';
import Display from './components/Display';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="workplace">
          <Switch>
            {/* <Route exact path="/" component={Home} />
            <Route path="/addTrip" component={AddTrip} />
            <Route path="/display" component={Display} /> */}
            <Route exact path="/" component={Display} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
