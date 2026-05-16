import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ duration: 1000, once: true });

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;