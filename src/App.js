import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NotFound from './pages/NotFound';
import Telecom from './pages/Telecom';
import HealthCare from './pages/HealthCare';
import Insurance from './pages/Insurance';
import Travel from './pages/Travel';
import Finance from './pages/Finance';
import Education from './pages/Education';


function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Telecom</Link>
            </li>
            <li>
              <Link to="/healthcare">Healthcare</Link>
            </li>
            <li>
              <Link to="/insurance">Insurance</Link>
            </li>
            <li>
              <Link to="/travel">Travel</Link>
            </li>
            <li>
              <Link to="/finance">Finance</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Telecom} />
          <Route path="/healthcare" component={HealthCare} />
          <Route path="/insurance" component={Insurance} />
          <Route path="/travel" component={Travel} />
          <Route path="/finance" component={Finance} />
          <Route path="/education" component={Education} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
