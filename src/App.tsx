import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import AllNews from './pages/AllNews';
import NewsDetail from './pages/NewsDetail';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-news" element={<AllNews />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
