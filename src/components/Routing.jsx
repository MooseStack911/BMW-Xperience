import { Routes, Route, Router } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Models from './Models';


const Routing = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/models" element={<Models />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    )
}

export default Routing