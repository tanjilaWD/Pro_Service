import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";



const App = () => {
  useEffect(()=>{
   AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false,
    offset: 100
   });
  }, []);
  return (
    <div>
      <Navbar/>
      <Hero/>
    </div>
  );
};

export default App;
