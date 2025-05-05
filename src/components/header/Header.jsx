import React from "react";

const Header = () => {
  return (
    <header className="w-full absolute">
      <div className="container mx-auto">
        <nav className="h-[74px] flex items-center justify-between text-white">
          <h1 className="text-[26px] font-[400] capitalize font-[Lora]">
            Escape.
          </h1>
          <ul className="flex gap-[41px] uppercase font-[Oxygen]">
            <li>
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Categories</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
