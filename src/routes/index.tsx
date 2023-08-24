import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth, DashBoard } from '../pages';
import { PrivateRoute } from './PrivateRoute';


function MakeRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<PrivateRoute><DashBoard /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default MakeRoutes;