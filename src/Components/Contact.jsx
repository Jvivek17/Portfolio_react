import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact-section"
      className="border-b border-neutral-900 pb-16 pt-16 bg-neutral-950"
    >
      <div className="container mx-auto px-8">
        <h2 className="mb-16 text-center text-4xl font-bold text-purple-500">
          Contact Me
        </h2>

        <div className="flex flex-wrap md:flex-nowrap items-start justify-center md:justify-between gap-10">
          {/* Left Section: Contact Message */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-4">
              Feel free to reach out to me
            </h3>
            <p className="text-lg text-gray-400">
              Whether you have a question or just want to say hi, I'll try my
              best to get back to you!
            </p>
          </div>

          {/* Right Section: Contact Info */}
          <div className="w-full md:w-1/2 bg-neutral-800 p-8 rounded-lg shadow-lg text-gray-300">
            <div className="mb-6 flex items-center">
              {/* <h4 className="text-2xl font-bold text-purple-500 mb-2 pr-5 items-center">
                Email
              </h4> */}
              <FaEnvelope className="text-3xl text-purple-500" />
              <p className="hover:text-purple-400 transition duration-300 text-lg pl-5">
                <a href="mailto:jlakshmivivek@gmail.com">
                  jlakshmivivek@gmail.com
                </a>
              </p>
            </div>

            <div className="mb-6 flex items-center">
              {/* <h4 className="text-xl font-semibold text-purple-500 mb-2 pr-5">
                LinkedIn
              </h4> */}
              <FaLinkedin className="text-3xl text-blue-500" />
              <p className="hover:text-purple-400 transition duration-300 text-lg pl-5">
                <a
                  href="https://linkedin.com/in/j-lakshmi-vivek-6b602720b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/j-lakshmi-vivek-6b602720b
                </a>
              </p>
            </div>

            <div className=" flex items-center">
              {/* <h4 className="text-xl font-semibold text-purple-500 mb-2 pr-5">
                GitHub
              </h4> */}
              <FaGithub className="text-3xl text-gray-300" />
              <p className="hover:text-purple-400 transition duration-300 text-lg pl-5">
                <a
                  href="https://github.com/Jvivek17"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Jvivek17
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
