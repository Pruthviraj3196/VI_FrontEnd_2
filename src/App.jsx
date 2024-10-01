import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Services from './pages/Services';
import Support from './pages/Support';
import Training from './pages/Training';
import Applyinternship from './components/Training/Applyinternship';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path='/traning' element={<Training />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/support" element={<Support />} />
        <Route path="/applyinternship" element={<Applyinternship />} />
      </Routes>
    </Router>
  );
}

export default App;
