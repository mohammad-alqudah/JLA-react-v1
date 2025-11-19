import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AllNews from './pages/AllNews';
import NewsDetail from './pages/NewsDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';

import FIATA from './pages/FIATA';
import JLAMember from './pages/JLAMember';
import FIATADiploma from './pages/FIATADiploma';
import Experts from './pages/Experts';
import FAQs from './pages/FAQs';
import ContactPage from './pages/ContactPage';
import MediaCentre from './pages/MediaCentre';

function App() {
  return (

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/all-news" element={<AllNews />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/fiata" element={<FIATA />} />
          <Route path="/jla-member" element={<JLAMember />} />
          <Route path="/fiata-diploma" element={<FIATADiploma />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/media-centre" element={<MediaCentre />} />
        </Routes>
      </Router>

  );
}

export default App;
