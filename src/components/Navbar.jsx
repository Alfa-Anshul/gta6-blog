import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav>
      <Link to="/" className="nav-brand">VICE CHRONICLE</Link>
      <div className="nav-links">
        <Link to="/" className={`nav-link ${path === '/' ? 'active' : ''}`}>Intel</Link>
        <Link to="/gta6" className={`nav-link ${path === '/gta6' ? 'active' : ''}`}>The Dive</Link>
        <Link to="/competitors" className={`nav-link ${path === '/competitors' ? 'active' : ''}`}>Competitors</Link>
        <Link to="/risk" className={`nav-link ${path === '/risk' ? 'active' : ''}`}>Risks</Link>
        <Link to="/post-era" className={`nav-link ${path === '/post-era' ? 'active' : ''}`}>Post-Era</Link>
      </div>
    </nav>
  );
}
