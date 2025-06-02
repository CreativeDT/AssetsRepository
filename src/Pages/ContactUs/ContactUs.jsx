import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import backgroundImage from "../../Assets/banner-abstract.jpg";

const ContactUs = () => {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full mx-auto my-8 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side - Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Let's Get In Touch
              </h2>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-teal-500 mr-3"
                  size="lg"
                />
                <div className="text-gray-700">
                  <p>info@global-csg.com</p>
                  <a
                    href="mailto:anupam.srivastava@global-csg.com,deepak.kashyap@global-csg.com"
                    className="inline-block mt-2 text-sm text-blue-600 hover:underline"
                  >
                    Contact Us →
                  </a>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-teal-500 mr-3"
                  size="lg"
                />
                <p className="text-gray-700">
                  2111 University Park Drive, Suite 600 <br />
                  Okemos, MI 48864, United States
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Send Us a Message
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Company*
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label
                    htmlFor="hearAboutUs"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    How did you hear about us?*
                  </label>
                  <textarea
                    id="hearAboutUs"
                    rows="2"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="tellUsMore"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Tell us more!
                  </label>
                  <textarea
                    id="tellUsMore"
                    rows="3"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
