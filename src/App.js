
import { BrowserRouter , Route, Link } from 'react-router-dom';

import Home from './components/home'
import WeatherDisplay from './components/weatherDisplay';


import './App.css';

const App = () =>(

  <BrowserRouter>
  
  <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
</li>
        </ul>
      </nav>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/weather" component={WeatherDisplay} />
    </div>
  
</BrowserRouter>
)
  
export default App;



