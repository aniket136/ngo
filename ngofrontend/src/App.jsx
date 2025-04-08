// App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footers';
import Home from './pages/Home';
import About from './pages/About';
import ProjectsPage from './pages/ProjectsPage';
import Contact from './components/Contact';
import FAQ from './pages/Faq';
import Banner from './pages/Banner';
import Gallery from './pages/Gallery';
import Volunteer from "./pages/Volunteer";
import Donate from "./pages/Donate";
function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      {/* Sticky Navbar */}
      <Navbar />
    
      {/* Page content */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Donate" element={  <Donate/>} />
          <Route path="/programs" element={<ProjectsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Only show these sections on Home page */}
        {isHome && (
          <>
                <Gallery />
                <Volunteer/>
                <Banner />
                <FAQ />
                
          </>
        )}
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
