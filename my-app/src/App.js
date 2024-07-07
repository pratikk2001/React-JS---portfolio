import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './components/home.css';
import './components/about.css';
import './components/service.css';
import './components/projects.css';
import './components/contact.css';
import './image/bg.jpg'

import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (

    <div>
      <Router>
        <Navbar />
        <Home />
        <About />
        <Service />
        <Projects />
        <Contact />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

    </div>


  );
}

export default App;
