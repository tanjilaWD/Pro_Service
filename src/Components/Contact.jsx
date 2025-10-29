import { CiMail } from "react-icons/ci";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: CiMail,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      title: "Email",
      contact: "info@example.com",
      aosDelay: "200",
    },
    {
      id: 2,
      icon: FaPhoneAlt,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      title: "Phone",
      contact: "+123 456 7890",
      aosDelay: "250",
    },
    {
      id: 3,
      icon: FaMapMarkerAlt,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "Address",
      contact: "123 Main Street, City, Country",
      aosDelay: "300",
    },
  ];

  const formfields = [
    {
      id: "name",
      type: "text",
      label: "Full name",
      placeholder: "Enter your full name",
      delay: "150",
    },
    {
      id: "email",
      type: "email",
      label: "Email Address",
      placeholder: "Enter your email address",
      delay: "200",
    },
    {
      id: "message",
      type: "textarea",
      label: "Message",
      placeholder: "Enter your message here....",
      rows: 5,
      delay: "250",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:py-16 md:py-20 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className="flex flex-col items-center justify-center text-center mb-10"
          data-aos="fade-down"
        >
          <div className="max-w-2xl space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900">
              Get In{" "}
              <span className="font-bold text-black">
                Touch<span className="text-green-500">.</span>
              </span>
            </h2>
            <div className="flex gap-3 mt-4 justify-center">
              <span className="w-5 h-5 rounded-full border-2 border-pink-500"></span>
              <span className="w-5 h-5 rounded-full border-2 border-yellow-500"></span>
              <span className="w-5 h-5 rounded-full border-2 border-green-500"></span>
            </div>
          </div>
        </div>

        {/* Form and Info */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Form */}
          <div className="flex-1 bg-white rounded-2xl md:rounded-xl shadow-lg md:shadow-xl p-6 sm:p-8 border border-gray-100">
            <form className="space-y-6">
              {formfields.map((field) => (
                <div
                  key={field.id}
                  data-aos="fade-up"
                  data-aos-delay={field.delay}
                >
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      rows={field.rows}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      placeholder={field.placeholder}
                    ></textarea>
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      placeholder={field.placeholder}
                    />
                  )}
                </div>
              ))}
              <div data-aos="fade-up" data-aos-delay="300">
                <button
                  type="button"
                  className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-pink-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Send Message
                  <IoIosSend className="size-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <div
              className="w-full max-w-md h-64 sm:h-72 md:h-80 overflow-hidden shadow-lg rounded-xl md:rounded-2xl mb-8"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <img
                src="/image/contact.png"
                alt="Contact"
                className="object-cover w-full transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 w-full max-w-md">
              {contactInfo.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 bg-white rounded-xl shadow-md p-4"
                    data-aos="fade-left"
                    data-aos-delay={item.aosDelay}
                  >
                    <div
                      className={`size-12 ${item.iconBg} rounded-lg flex items-center justify-center`}
                    >
                      <IconComp className={`size-6 ${item.iconColor}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.contact}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
