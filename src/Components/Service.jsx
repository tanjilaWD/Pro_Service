import { useState } from "react";
import { FaPaintBrush } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { CiCamera } from "react-icons/ci";
const Service = () => {
    const [activeService, setActiveService] useState(1);
    const service = [
        {
         id:1,
         icon:  <FaPaintBrush className="size-5 sm:size-6"/>,
         title: 'UI/UX Design',
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus pariatur, consequuntur maiores repellendus amet quae ",
         features: ['User Research', 'Wireframing', 'Prototyping', 'UI Design'] ,
         color: 'bg-pink-400',
         butColor: 'bg-pink-400 hover:bg-pink-500',
         iconColor:'text-pink-100',
         image: /image/service1.png
        },
         {
         id:2,
         icon:  <FaCode className="size-5 sm:size-6"/>,
         title: 'Web Development',
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus pariatur, consequuntur maiores repellendus amet quae ",
         features: ['User Research', 'Wireframing', 'Prototyping', 'UI Design'] ,
         color: 'bg-yellow-400',
         butColor: 'bg-yellow-400 hover:bg-pink-500',
         iconColor:'text-pink-100',
         image: /image/service2.png
        },
         {
         id:1,
         icon:  <CiCamera className="size-5 sm:size-6"/>,
         title: 'Photography',
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus pariatur, consequuntur maiores repellendus amet quae ",
         features: ['User Research', 'Wireframing', 'Prototyping', 'UI Design'] ,
         color: 'bg-green-400',
         butColor: 'bg-green-400 hover:bg-pink-500',
         iconColor:'text-pink-100',
         image: /image/service3.png
        }
    ]
    return (
        <section id="service" className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-green-50 py-12 px-4 sm:py-16 md:px-12 lg:px-20">
         <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center text-center mb-6"
        data-aos = 'fade-down'>
          <div className="flex-1 max-w-2xl mx-auto space-y-6 mb-10 lg:mb-0">
            <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900">
                    Our {" "}
                    <span>
                        Services <span>.</span>
                    </span>
                </h2>
                <div className="flex gap-3 mt-4 justify-center ">
                <span className="w-5 h-5 rounded-full border-2 border-pink-500"></span>
                <span className="w-5 h-5 rounded-full border-2 border-yellow-500"></span>
                <span className="w-5 h-5 rounded-full border-2 border-green-500"></span>    
                </div>
            </div>
        </div>  
        </div>    
        </div>   

        </section>
    );
};

export default Service;