import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProrpCaseStudy from './pages/ProrpCaseStudy';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/prorp" element={<ProrpCaseStudy />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;