import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-auto bg-black text-white px-6 py-3 bruno-ace-regular">
      {/* Logo */}
      <div>
        <img src="/logo.png" alt="Logo" className="size-24 object-contain" />
      </div>

      {/* Menu Items - Hidden on Small Screens */}
      <ul className="hidden md:flex gap-x-5 justify-between items-center">
        {["Home", "About Us", "Events", "Domain", "Time Line"].map((item, index) => (
          <li key={index} className="relative text-lg font-medium active:duration-300 active:translate-y-1 active:translate-x-1">
            <a
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="hover:text-gray-400 after:block after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-[#8f1db4] after:scale-x-0 
              after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
