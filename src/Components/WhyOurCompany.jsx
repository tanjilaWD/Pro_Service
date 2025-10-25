

const WhyOurCompany = () => {
    return (
        <section id="company" className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 py-12 sm:py-16 md:py-12 lg:px-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-6 md:mb-8" data-aos = 'fade-down'>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900">
                Why Our <span className="text-black font-bold">Company</span>   
                <span className="text-green-500 "> ?</span>     
                    </h2>
                <div className="flex gap-3 mt-4 justify-center ">
                <span className="w-5 h-5 rounded-full border-2 border-pink-500"></span>
                <span className="w-5 h-5 rounded-full border-2 border-yellow-500"></span>
                <span className="w-5 h-5 rounded-full border-2 border-green-500"></span>    
                </div>    
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ">
               <div className="relative w-full flex justify-center order-2 lg:order-1">
                <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-[460px] md:h-[500] lg:h-[520px] overflow-hidden bg-gray-50 shadow-lg md:shadow-xl absolute top-0 z-0 rounded-[30%_10%_20%_70%/60%_30%_70%_30%]">

                </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default WhyOurCompany;