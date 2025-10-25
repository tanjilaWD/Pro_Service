import { LuUsers } from "react-icons/lu";
import { FiTarget } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
    return (
      <section
  id="about"
  className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 
  min-h-screen py-12 px-4 sm:py-16 md:py-20 md:px-12 lg:px-20 
  flex flex-col lg:flex-row items-center justify-between"
>
  <div className="flex-1 w-full lg:mr-8 xl:mr-12 relative order-2 lg:order-1 mt-10 lg:mt-0">
    <div className="w-full max-w-md mx-auto lg:max-w-lg xl:max-w-xl 
      aspect-[4/3] overflow-hidden shadow-lg md:shadow-xl relative z-10 
      -rotate-2 rounded-[40%_60%_70%_30%/40%_50%_60%_60%] hover:rotate-0 
      transition-transform duration-700" 
       data-aos = 'fade-right'
        data-aos-dealy= '200'
      >
       
      <img
        src="/image/about.png"
        alt="About"
        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
      />
    </div>
    {/* <div className="hidden md:block absolute border-2 border-pink-500 -bottom-4 -right-4 size-16 md:size-20 lg:w-24 lg:h-20 rounded-full z-0"
  data-aos = 'zoom-in'
  data-aos-dealy= '500'
  ></div> */}
  </div>
   {/* <div className="hidden md:block absolute border-2 border-pink-500 -top-4 -left-4 size-16 md:size-20 lg:w-24 lg:h-20 rounded-full z-0"
  data-aos = 'zoom-in'
  data-aos-dealy= '600'
  ></div> */}
  <div className="flex-1 w-full max-w-2xl mx-auto lg:max-0 space-y-6 md:space-y-8 relative z-20 order-1 lg:order-2">
<div className="mb-6 md:mb-8" data-aos='fade-left'>
  <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 text-center lg:text-left">
    Agency {" "}
    <span className="font-bold text-black block lg:inline">Overview <span className="text-green-500">.</span>
</span>
</h2>
<div className="flex gap-3 mt-4 justify-center lg:justify-start">
   <span className="w-5 h-5 rounded-full border-2 border-pink-500"></span>
   <span className="w-5 h-5 rounded-full border-2 border-yellow-500"></span>
   <span className="w-5 h-5 rounded-full border-2 border-green-500"></span>
</div>
</div>
<p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center lg:text-left" 
data-aos = 'fade-left'
data-aos-dealy = '100'
>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, tempora! Ipsam, delectus at, nulla quod dolorum voluptates enim similique rerum corporis laudantium illo magnam! Assumenda, odit. Adipisci accusamus in excepturi.
</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 md:mt-10"
data-aos = 'fade-up'
data-aos-dealy = '200'
>
<div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 shadow-md md:shadow-lg transition-all hover:shadow-xl">
  <div className="size-10 md:size-12 flex items-center justify-center rounded-lg bg-pink-100 mb-3 md:mb-4">
<LuUsers className="text-pink-600 size-5 md:size-6"/>
</div>
<h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
  Export Team
</h3>
<p className="text-gray-600 text-xs md:text-sm">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
</p>
</div> 
</div>

<div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 md:mt-10"
data-aos = 'fade-up'
data-aos-dealy = '200'
>
 <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 shadow-md md:shadow-lg transition-all hover:shadow-xl">
  <div className="size-10 md:size-12 flex items-center justify-center rounded-lg bg-yellow-100 mb-3 md:mb-4">
<FiTarget className="text-yellow-600 size-5 md:size-6"/>
</div>
<h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
 Our Mission
</h3>
<p className="text-gray-600 text-xs md:text-sm">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
</p>
</div> 
</div>
<div className="flex justify-center lg:justify-start mt-8 md:mt-10"
data-aos = 'fade-up'
data-aos-delay = '300'
>
<button className="px-6 py-3 md:px-8 md:py-4 bg-pink-500 text-white rounded-full font-medium hover:shadow-lg flex items-center gap-2 text-sm md:text-base">
Learn more About Us
<FaArrowRight className="size-4 md:size-5"/>
</button>
</div>
</div>
</div>
</section>

    );
};

export default About;