import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import ScrollToTop from './components/ScrollToTop';
import AOS from "aos";
import "aos/dist/aos.css";

const Home = lazy(() => import('./pages/Home'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));

AOS.init({ duration: 1000, once: true });

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-[#020617]" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<ProjectPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;