import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";

const services = [
  "SEO & Organic Growth",
  "Paid Advertising",
  "Social Media Marketing",
  "Website Development",
];




function App() {
  return (
    <>
      <Navbar />
     <main>
  <Hero />
  <Services />
  <About />
  <Process />
  <WhyChooseUs />
  <Testimonials />
  <Portfolio />
  <Contact />
</main>

<Footer />


    </>
  );
}

export default App;
