import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-[500px] border bg-[url(./assets/images/hero__image.png)] bg-no-repeat bg-center bg-cover flex items-center justify-center text-center text-white">
      <div>
        <h1 className="text-[50px] font-[400] font-[Lora]">
          Let's do it together.
        </h1>
        <p className="text-[17px] font-[400] mt-[20px] mb-[31px] opacity-65 font-[Oxygen]">
          We travel the world in search of stories. Come along for the ride.
        </p>
        <button className="py-3 px-8 bg-primary text-center text-[13px] font-[400] rounded-[3px] hover:bg-amber-700 font-[Oxygen]">
          View Latest Posts
        </button>
      </div>
    </section>
  );
};

export default Hero;
