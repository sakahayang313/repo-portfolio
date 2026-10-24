import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProrpCaseStudy from './pages/ProrpCaseStudy';
import ProjectsCatalogue from './pages/ProjectsCatalogue';
import ProjectDetail from './pages/ProjectDetail';
import ItInfrastructure from './pages/ItInfrastructure';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/prorp" element={<ProrpCaseStudy />} />
          <Route path="/projects" element={<ProjectsCatalogue />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/infrastructure" element={<ItInfrastructure />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;