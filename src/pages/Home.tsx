import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import About from '../components/About';
import Courses from '../components/Courses';
import News from '../components/News';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Slider />
      <About />
      <Courses />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}
