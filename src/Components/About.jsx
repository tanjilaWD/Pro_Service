

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
      transition-transform duration-700">
      <img
        src="/image/about.png"
        alt="About"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</section>

    );
};

export default About;