import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import About from '../components/About';
import Courses from '../components/Courses';
import News from '../components/News';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Letter from '../components/Letter';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Slider />
      <Letter />
      <Courses />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}
