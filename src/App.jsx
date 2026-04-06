import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GTADive from './pages/GTADive';
import CompetitorAnalysis from './pages/CompetitorAnalysis';
import RiskAssessment from './pages/RiskAssessment';
import PostEra from './pages/PostEra';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gta6" element={<GTADive />} />
        <Route path="/competitors" element={<CompetitorAnalysis />} />
        <Route path="/risk" element={<RiskAssessment />} />
        <Route path="/post-era" element={<PostEra />} />
      </Routes>
    </Router>
  );
}

export default App;
