import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white py-6 px-4 text-center">
      <footer className="flex flex-col md:flex-row items-center justify-between bg-[bannercpc.png] bg-cover text-white px-0 lg:px-10 md:px-10 py-4 bruno-ace-regular pt-5">
        {/* Logo Section */}
        <div className="flex flex-col md:flex-row text-center py-2 items-center space-x-0 md:space-x-4">
          <img src="/bannercpc.png" alt="Company Logo" className="h-24" />
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-md font-medium mt-4 md:mt-0">
            {["Terms of Use", "Privacy"].map((item, index) => (
              <li key={index} className="relative text-center md:text-left">
                <a
                  href="/"
                  className="hover:text-gray-400 after:block after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-[#8f1db4] after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <ul className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-md font-medium mt-4 md:mt-0">
          {[
            { name: "Instagram", icon: <FaInstagram />, link: "/" },
            { name: "LinkedIn", icon: <FaLinkedin />, link: "/" },
            { name: "Github", icon: <FaGithub />, link: "/" },
          ].map((social, index) => (
            <li key={index} className="relative flex items-center gap-2">
              <a
                href={social.link}
                className="hover:text-violet-400 flex items-center"
              >
                {social.icon} {social.name}
              </a>
            </li>
          ))}
        </ul>
      </footer>
      <hr className="border-gray-600 my-4" />
      <div className="animate-pulse text-sm">©2025 Cyber Peace Corps : KIIT Chapter. All Rights Reserved.</div>
    </div>
  );
};

export default Footer;