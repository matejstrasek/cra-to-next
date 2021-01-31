import './App.css';
import Home from 'next-js/src/components/Home';
import Cats from 'next-js/src/components/Cats';
import Dogs from './components/Dogs';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <h1>Create React App</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cats">Cats</Link>
              </li>
              <li>
                <Link to="/dogs">Dogs</Link>
              </li>
            </ul>

            <hr />

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/cats">
                <Cats />
              </Route>
              <Route path="/dogs">
                <Dogs />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
