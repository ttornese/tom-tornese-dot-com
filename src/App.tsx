import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import { Nav } from './components/Nav';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { Work } from './components/Work';

function App() {
  return (
    <div>
      <Router basename={import.meta.env.BASE_URL}>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
