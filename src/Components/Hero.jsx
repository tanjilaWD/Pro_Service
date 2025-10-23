

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-gray-50 py-12 px-4 sm:px-6 md:px-8 lg:py-16 lg:px-20 flex flex-col lg:flex-row items-center justify-between mt-10">
         <div className="flex-1 lg:ml-28 w-full max-w-xl space-y-6 relative z-20">
            <h2 className="text-4xl sm:text-5xl text-gray-900 text-center lg:text-left">
              Professionels{" "}
              <span className="font-bold text-black block lg:inline">
                Service <span className="text-green-500">.</span>
              </span>
            </h2>
           <div className="flex gap-3 mt-4 justify-center lg:justify-start">
          <span className="w-5 h-5 rounded-full border-2 border-pink-500"></span>
          <span className="w-5 h-5 rounded-full border-2 border-yellow-500"></span>
          <span className="w-5 h-5 rounded-full border-2 border-green-500"></span>
           </div>
            </div>   

        </section>
    );
};

export default Hero;