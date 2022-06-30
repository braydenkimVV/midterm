import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Students from './components/Students';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css'


function App() {
  return (
    <Router>
      <div className="App">
        <h1>SAIT</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/list">Students list</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/contact' element={< Contact />}></Route>
        <Route exact path='/list' element={< Students />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
