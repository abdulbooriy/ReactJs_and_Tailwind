import React from "react";

const Footer = () => {
  return (
    <footer className="w-full min-h-[378px] h-full bg-[url(./assets/images/footer__image.png)] bg-no-repeat bg-cover flex flex-col">
      <div className="container m-auto flex flex-col items-center justify-center">
        <h1 className="font-[Oxygen] text-[25px] font-[400] text-[#EFEFEF] pt-[81px] text-center">
          Stay in Touch
        </h1>
        <div className="w-[188px] h-[1px] bg-[#DEDEDE] m-auto mt-[16px]"></div>

        <div className="w-[500px] mt-5 flex">
          <div className="w-[375px] h-[50px] bg-[#FFFFFF] py-[13px] px-[35px]">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent border-none outline-none font-[Oxygen] text-[14px] font-[400]"
            />
          </div>
          <button className="w-[125px] h-[50px] bg-[#FFFFFF] opacity-20 border-none text-[14px] font-[400] font-[Oxygen] rounded-[3px] cursor-pointer">
            <span>Submit</span>
          </button>
        </div>
      </div>
      <div className="w-full bg-[url(./assets/images/footer__bottom.png)] mt-[90px]">
        <div className="container h-[90px] mx-auto flex items-center justify-between">
          <h2 className="text-[26px] font-[400] font-[Lora] text-[#FFFFFF]">
            Escape.
          </h2>
          <ul className="flex gap-5 font-[Oxygen] text-[#FFFFFF99] opacity-60">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
