import React from "react";
import road__ahead__image from "../../assets/images/road__ahead.jpg";
import top__down__image from "../../assets/images/top__down.png";
import mat__vogels__image from "../../assets/images/mat__vogels.svg";
import william__wong__image from "../../assets/images/william__wong.svg";

const FeaturePosts = () => {
  return (
    <section className="text-center bg-[#F7F7F7] pt-[60px]">
      <h1 className="font-[Oxygen] text-[20px] font-[400] text-[#2E2E2E]">
        Featured Posts
      </h1>
      <div className="w-[188px] h-[1px] bg-[#DEDEDE] m-auto mt-[16px]"></div>
      <div className="flex mt-[33px] justify-center gap-5">
        <div className="w-[460px] relative">
          <img
            className="rounded-[3px] w-full h-full"
            src={road__ahead__image}
            alt="road ahead image"
          />
          <div className="absolute top-[157px] flex flex-col items-start left-5">
            <h1 className="text-[27px] font-[400] font-[Lora] text-[#FFFFFF]">
              The Road Ahead
            </h1>
            <p className="text-[14px] font-[400] text-[#FFFFFF] opacity-70 font-[Oxygen] pt-1.5">
              The road ahead might be paved - it might not be.
            </p>
            <div className="flex items-center justify-between gap-[215px] pt-7">
              <div className="flex items-center gap-2.5 cursor-pointer">
                <img src={mat__vogels__image} alt="mat vogels image" />
                <p className="text-[12px] font-[400] text-[#FFFFFF] opacity-70 font-[Oxygen]">
                  Mat Vogels
                </p>
              </div>
              <div>
                <p className="text-[12px] font-[400] text-[#FFFFFF] opacity-70 font-[Oxygen]">
                  September 25, 2015
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[460px] relative">
          <img
            className="rounded-[3px] w-full h-full"
            src={top__down__image}
            alt="road ahead image"
          />
          <div className="absolute top-[157px] flex flex-col items-start left-5">
            <h1 className="text-[27px] font-[400] font-[Lora] text-[#FFFFFF]">
              From Top Down
            </h1>
            <p className="text-[14px] font-[400] text-[#FFFFFF] opacity-70 font-[Oxygen] pt-1.5">
              Once a year, go someplace you’ve never been before.
            </p>
            <div className="flex items-center justify-between gap-[215px]  pt-7">
              <div className="flex items-center gap-2.5 cursor-pointer">
                <img src={william__wong__image} alt="mat vogels image" />
                <p className="text-[12px] font-[400] text-[#FFFFFF] opacity-70 font-[Oxygen]">
                  William Wong
                </p>
              </div>
              <div>
                <p className="text-[12px] font-[400] text-[#FFFFFF] opacity-70 font-[Oxygen]">
                  September 25, 2015
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturePosts;
