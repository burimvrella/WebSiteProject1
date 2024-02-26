import './App.css';

import {BrowserRouter as Router} from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import AnimatedRoute from './components/animatedroute/AnimatedRoute';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <AnimatedRoute />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
