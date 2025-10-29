import { RiPokerHeartsLine } from "react-icons/ri";
import { FiAward } from "react-icons/fi";
const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-gray-50 py-12 px-4 sm:px-6 md:px-8 lg:py-16 lg:px-20 flex flex-col lg:flex-row items-center justify-between mt-16">
         <div className="flex-1 lg:ml-28 w-full max-w-xl space-y-6 relative z-20">
            <h2 className="text-4xl sm:text-5xl text-gray-900 text-center lg:text-left" 
            data-aos='fade-right'
            >
              
              Professionels{" "}
              <span className="font-bold text-black block lg:inline">
                Service <span className="text-green-500">.</span>
               </span>
             </h2>
            <div
              data-aos='fade-right'
              data-aos-delay= '100'
              className="flex gap-3 mt-4 justify-center lg:justify-start">
                <span className="w-5 h-5 rounded-full border-2 border-pink-500"></span>
                <span className="w-5 h-5 rounded-full border-2 border-yellow-500"></span>
                <span className="w-5 h-5 rounded-full border-2 border-green-500"></span>
             </div>
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center lg:items-start mt-6">
           {/* card 1 */}
              <div
                 data-aos='zoom-in'
                data-aos-delay= '100'

              className="bg-white w-72 rounded-3xl p-6 border border-gray-100 shadow-xl transition">
              <div className="ml-4 size-10 flex items-center justify-center rounded-lg bg-pink-100 mb-4">
              <RiPokerHeartsLine className="text-pink-600 size-6" />
              </div>
              <h3 className="ml-4 text-lg font-semibold text-gray-800">
                Service Subtitle One
              </h3>
              <p className="ml-4 text-gray-500 text-sm mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
             </div>

            {/* card 2 */}
            <div
             data-aos='zoom-in'
             data-aos-delay= '300'
             className="bg-white w-72 rounded-3xl p-6 border border-gray-100 shadow-xl transition">
             <div className="ml-4 size-10 flex items-center justify-center rounded-lg bg-yellow-100 mb-4">
             <FiAward className="text-yellow-600 size-6" />
             </div>
              <h3 className="ml-4 text-lg font-semibold text-gray-800">
                    Service Subtitle Two
              </h3>
              <p className="ml-4 text-gray-500 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
              </div>
            </div>
           </div>
        <div
        data-aos='fade-left'
       data-aos-delay= '400'
        className="flex-1 mt-12 lg:mt-0 lg:ml-12 relative w-full flex justify-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg-w-[600px] lg:h-[500px] overflow-hidden border-8 border-white shadow-lg lg:shadow-lg rounded-[60%_40%_30%_60%/60%_30%_70%_30%] relative z-10">
              <img src="/image/hero.png" alt="Hero" className="object-cover w-full h-full"/> 
          </div>

          </div>   
         </section>
    );
};

export default Hero;