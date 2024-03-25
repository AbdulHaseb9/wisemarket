import React from "react";

export const Categorieslink = () => {
  return (
    <div className="px-5 md:px-8 hidden lg:block">
      <div className="flex justify-around gap-2 py-3">
        <div className="flex items-center text-sm cursor-pointer">
          <p className="font-semibold text-xs">All Categories</p>
          <i className="fa fa-angle-down mx-1"></i>
        </div>
        <div className="flex items-center text-sm cursor-pointer">
          <p className="font-semibold text-red-500">Hot Offers</p>
          <i className="fa fa-angle-down mx-1"></i>
        </div>
        <nav className="text-sm font-semibold text-[#707070]">
          <ul className="flex items-center gap-4 flex-wrap">
            <li className="relative group/showli">
              <a
                href="#"
                className="hover:text-[#1BAB6E] transition-all duration-200 relative after:content-[' '] after:w-0 hover:after:w-full after:bg-[#1bab6e] after:h-[2px] after:absolute after:left-0 after:-top-3 after:transition-all after:after:duration-300"
              >
                Mobile
              </a>
              <ul className="hidden absolute bg-white z-30 group-hover/showli:block">
                <li className="font-semibold text-base px-8 py-2 hover:bg-[#1bab6f7a] cursor-pointer">Apple</li>
                <li className="font-semibold text-base px-8 py-2 hover:bg-[#1bab6f7a] cursor-pointer">Samsung</li>
                <li className="font-semibold text-base px-8 py-2 hover:bg-[#1bab6f7a] cursor-pointer">Infinix</li>
                <li className="font-semibold text-base px-8 py-2 hover:bg-[#1bab6f7a] cursor-pointer">Xiamoi</li>
                <li className="font-semibold text-base px-8 py-2 hover:bg-[#1bab6f7a] cursor-pointer">Realme</li>
                <li className="font-semibold text-base px-8 py-2 hover:bg-[#1bab6f7a] cursor-pointer">techno</li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#1BAB6E] transition-all duration-200 relative after:content-[' '] after:w-0 hover:after:w-full after:bg-[#1bab6e] after:h-[2px] after:absolute after:left-0 after:-top-3 after:transition-all after:duration-500"
              >
                Laptop
              </a>
              <ul className="hidden absolute bg-white z-30 group-hover/showli:block">
                <li className="font-semibold text-base px-8 py-2 hover:bg-[#1bab6f7a] cursor-pointer">Apple</li>
                <li className="font-semibold text-base px-8 py-2 hover:bg-[#1bab6f7a] cursor-pointer">Samsung</li>
                <li className="font-semibold text-base px-8 py-2 hover:bg-[#1bab6f7a] cursor-pointer">Infinix</li>
                <li className="font-semibold text-base px-8 py-2 hover:bg-[#1bab6f7a] cursor-pointer">Xiamoi</li>
                <li className="font-semibold text-base px-8 py-2 hover:bg-[#1bab6f7a] cursor-pointer">Realme</li>
                <li className="font-semibold text-base px-8 py-2 hover:bg-[#1bab6f7a] cursor-pointer">techno</li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#1BAB6E] transition-all duration-200 relative after:content-[' '] after:w-0 hover:after:w-full after:bg-[#1bab6e] after:h-[2px] after:absolute after:left-0 after:-top-3 after:transition-all after:duration-500"
              >
                Tablets
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#1BAB6E] transition-all duration-200 relative after:content-[' '] after:w-0 hover:after:w-full after:bg-[#1bab6e] after:h-[2px] after:absolute after:left-0 after:-top-3 after:transition-all after:duration-500"
              >
                Smart Watches
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#1BAB6E] transition-all duration-200 relative after:content-[' '] after:w-0 hover:after:w-full after:bg-[#1bab6e] after:h-[2px] after:absolute after:left-0 after:-top-3 after:transition-all after:duration-500"
              >
                Accessories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#1BAB6E] transition-all duration-200 relative after:content-[' '] after:w-0 hover:after:w-full after:bg-[#1bab6e] after:h-[2px] after:absolute after:left-0 after:-top-3 after:transition-all after:duration-500"
              >
                Wireless EarBurds
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#1BAB6E] transition-all duration-200 relative after:content-[' '] after:w-0 hover:after:w-full after:bg-[#1bab6e] after:h-[2px] after:absolute after:left-0 after:-top-3 after:transition-all after:duration-500"
              >
                Home and lifestyle
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#1BAB6E] transition-all duration-200 relative after:content-[' '] after:w-0 hover:after:w-full after:bg-[#1bab6e] after:h-[2px] after:absolute after:left-0 after:-top-3 after:transition-all after:duration-500"
              >
                Gaming
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#1BAB6E] transition-all duration-200 relative after:content-[' '] after:w-0 hover:after:w-full after:bg-[#1bab6e] after:h-[2px] after:absolute after:left-0 after:-top-3 after:transition-all after:duration-500"
              >
                Kids
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
