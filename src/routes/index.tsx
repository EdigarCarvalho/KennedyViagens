import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth, DashBoard } from '../pages';

function MakeRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/dashboard" element={<DashBoard/>} />
      </Routes>
    </Router>
  );
}

export default MakeRoutes;