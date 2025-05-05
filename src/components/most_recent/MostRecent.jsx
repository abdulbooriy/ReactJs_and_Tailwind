import React from "react";
import weather__ballon from "../../assets/images/weather__ballon.png";
import william__wong__image from "../../assets/images/william__wong.svg";
import sunny__sedup from "../../assets/images/sunny__sedup.png";
import mat__vollegas from "../../assets/images/mat__vogels.svg";
import water__falls from "../../assets/images/watr__falls.png";
import ocean__image from "../../assets/images/ocean__image.png";
import windy__image from "../../assets/images/windy__image.png";
import rainbow__image from "../../assets/images/rainbow__image.png";

const MostRecent = () => {
  return (
    <section className="bg-[#F7F7F7] pt-[60px] h-[900px]">
      <h1 className="font-[Oxygen] text-[20px] font-[400] text-[#2E2E2E] text-center">
        Most Recent
      </h1>
      <div className="w-[188px] h-[1px] bg-[#DEDEDE] m-auto mt-[16px]"></div>
      <div className="container mx-auto flex flex-wrap gap-y-1 gap-x-6 mt-[39px]">
        <div className="w-[296px] h-[291px] bg-[white] mb-[50px]">
          <div>
            <img
              className="w-full h-[150px]"
              src={weather__ballon}
              alt="weather ballon"
            />
          </div>

          <div>
            <div className="h-[93px] border-b-1 border-b-[#EFEFEF] pt-[14px] pl-[13px]">
              <h2 className="text-[16px] font-[400] font-[Lora]">
                Still Standing Tall
              </h2>
              <p className="text-[13px] font-[400] font-[Oxygen] text-[#7A7A7A] pt-[6px] pb-[33-px]">
                Life begins at the end of your comfort zone.
              </p>
            </div>

            <div className="flex items-center gap-[70px] pl-[13px] bg-[#FCFCFC]">
              <div className="h-[48px] flex  items-center gap-2.5">
                <img src={william__wong__image} alt="william wong image" />
                <p className="text-[#999999] font-[Oxygen]">William Wong</p>
              </div>

              <div>
                <p className="text-[#999999] font-[Oxygen]">9/25/2015</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[296px] h-[291px] bg-[white] mb-[50px]">
          <div>
            <img
              className="w-full h-[150px]"
              src={sunny__sedup}
              alt="sunny sedup image"
            />
          </div>

          <div>
            <div className="h-[93px] border-b-1 border-b-[#EFEFEF] pt-[14px] pl-[13px]">
              <h2 className="text-[16px] font-[400] font-[Lora]">
                Sunny Side Up
              </h2>
              <p className="text-[13px] font-[400] font-[Oxygen] text-[#7A7A7A] pt-[6px] pb-[33-px]">
                No place is ever as bad as they tell you it’s going to be.
              </p>
            </div>

            <div className="flex items-center gap-[70px] pl-[13px]  bg-[#FCFCFC]">
              <div className="h-[48px] flex  items-center gap-2.5">
                <img src={mat__vollegas} alt="mat vollegas image" />
                <p className="text-[#999999] font-[Oxygen]">Mat Vogels</p>
              </div>

              <div>
                <p className="text-[#999999] font-[Oxygen]">9/25/2015</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[296px] h-[291px] bg-[white] mb-[50px]">
          <div>
            <img
              className="w-full h-[150px]"
              src={water__falls}
              alt="water falls image"
            />
          </div>

          <div>
            <div className="h-[93px] border-b-1 border-b-[#EFEFEF] pt-[14px] pl-[13px]">
              <h2 className="text-[16px] font-[400] font-[Lora]">
                Water Falls
              </h2>
              <p className="text-[13px] font-[400] font-[Oxygen] text-[#7A7A7A] pt-[6px] pb-[33-px]">
                We travel not to escape life, but for life not to escape us.
              </p>
            </div>

            <div className="flex items-center gap-[70px] pl-[13px] bg-[#FCFCFC]">
              <div className="h-[48px] flex  items-center gap-2.5">
                <img src={mat__vollegas} alt="mat vollegas image" />
                <p className="text-[#999999] font-[Oxygen]">Mat Vogels</p>
              </div>

              <div>
                <p className="text-[#999999] font-[Oxygen]">9/25/2015</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[296px] h-[291px] bg-[white] mb-[50px]">
          <div>
            <img
              className="w-full h-[150px]"
              src={ocean__image}
              alt="ocean image"
            />
          </div>

          <div>
            <div className="h-[93px] border-b-1 border-b-[#EFEFEF] pt-[14px] pl-[13px]">
              <h2 className="text-[16px] font-[400] font-[Lora]">
                Through the Mist
              </h2>
              <p className="text-[13px] font-[400] font-[Oxygen] text-[#7A7A7A] pt-[6px] pb-[33-px]">
                Travel makes you see what a tiny place you occupy in the world.
              </p>
            </div>

            <div className="flex items-center gap-[70px] pl-[13px] bg-[#FCFCFC]">
              <div className="h-[48px] flex  items-center gap-2.5">
                <img src={william__wong__image} alt="william wong image" />
                <p className="text-[#999999] font-[Oxygen]">William Wong</p>
              </div>

              <div>
                <p className="text-[#999999] font-[Oxygen]">9/25/2015</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[296px] h-[291px] bg-[white] mb-[50px]">
          <div>
            <img
              className="w-full h-[150px]"
              src={windy__image}
              alt="windy image"
            />
          </div>

          <div>
            <div className="h-[93px] border-b-1 border-b-[#EFEFEF] pt-[14px] pl-[13px]">
              <h2 className="text-[16px] font-[400] font-[Lora]">
                Awaken Early
              </h2>
              <p className="text-[13px] font-[400] font-[Oxygen] text-[#7A7A7A] pt-[6px] pb-[33-px]">
                Not all those who wander are lost.
              </p>
            </div>

            <div className="flex items-center gap-[70px] pl-[13px] bg-[#FCFCFC]">
              <div className="h-[48px] flex  items-center gap-2.5">
                <img src={mat__vollegas} alt="william wong image" />
                <p className="text-[#999999] font-[Oxygen]">Mat Vogels</p>
              </div>

              <div>
                <p className="text-[#999999] font-[Oxygen]">9/25/2015</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[296px] h-[291px] bg-[white] mb-[50px]">
          <div>
            <img
              className="w-full h-[150px]"
              src={rainbow__image}
              alt="rainbow image"
            />
          </div>

          <div>
            <div className="h-[93px] border-b-1 border-b-[#EFEFEF] pt-[14px] pl-[13px]">
              <h2 className="text-[16px] font-[400] font-[Lora]">
                Try it Always
              </h2>
              <p className="text-[13px] font-[400] font-[Oxygen] text-[#7A7A7A] pt-[6px] pb-[33-px]">
                The world is a book, and those who do not travel read only one
                page.
              </p>
            </div>

            <div className="flex items-center gap-[70px] pl-[13px] bg-[#FCFCFC]">
              <div className="h-[48px] flex  items-center gap-2.5">
                <img src={mat__vollegas} alt="william wong image" />
                <p className="text-[#999999] font-[Oxygen]">Mat Vogels</p>
              </div>

              <div>
                <p className="text-[#999999] font-[Oxygen]">9/25/2015</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostRecent;
