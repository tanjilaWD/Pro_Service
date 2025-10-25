import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import WhyOurCompany from "./Components/WhyOurCompany";



const App = () => {
  useEffect(()=>{
   AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 100
   });
  }, []);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <WhyOurCompany/>
    </div>
  );
};

export default App;
