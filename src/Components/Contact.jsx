import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    const contactInfo = [
        {
        id: 1,
        icon: <CiMail /> ,
        iconBg: 'bg-pink-100',
        iconColor: 'text-pink-600',
        title: 'Email',
        contact: 'info@example.com',
        aosDelay: '200'
    },
     {
        id: 2,
        icon: <FaPhoneAlt /> ,
        iconBg: 'bg-yellow-100',
        iconColor: 'text-yellow-600',
        title: 'Phone',
        contact: '+123 456 7890',
        aosDelay: '250'
    },
     {
        id: 3,
        icon: <FaMapMarkerAlt /> ,
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        title: 'Address',
        contact: '123 Main Street, City, Country',
        aosDelay: '300'
    }
];
  
const formfeilds = [
    {
        id: 'name',
        type: 'text',
        label: 'Full name',
        placeholder: 'Enter your full name',
        delay: '150'
    },
    {
        id: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'Enter your email address',
        delay: '200'
    },
    {
        id: 'message',
        type: 'textarea',
        label: 'Message',
        placeholder: 'Enter your message here....',
        rows: 5,
        delay: '250'
    }
]
    return (
        <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:py-16 md:py-20 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-10"
         data-aos = 'fade-down'>
        <div className="max-w-2xl space-y-6">
        <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900">Get In {" "} 
           <span className="font-bold text-black">
            Touch 
            <span className="text-green-500">.</span>
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
     <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
        <div className="flex-1 bg-white rounded-2xl md:rounded-xl shadow-lg md:shadow-xl p-6 sm:p-8 border border-gray-100">
            <form className="space-y-6">
              {formfeilds.map((field)=>(
                <div key={field.id}
                data-aos = 'fade--up'
                data-aos-delay={field.delay}>
                    <label htmlFor={field.id}
                    className="block text-sm font-medium text-gray-700 mb-2">
                        {field.label}
                    </label>
                    {
                    field.type === 'textarea' ? (
                    <textarea
                    id = {field.id}
                    name = {field.id}
                    rows = {field.rows}
                    className="size-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder={field.placeholder}>

                            </textarea>
                        ):(
                          <input type="text"/>
                        )
                    }

                </div>
              ))}
            </form>

        </div>
     </div>

            </div>

        </section>
    );
};

export default Contact;