import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Service from './Components/Services/Service';
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Work/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Service />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
