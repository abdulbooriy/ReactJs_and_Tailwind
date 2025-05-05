import React from "react";

const CategoryTabs = () => {
  return (
    <section className="h-[65px] bg-[#FFFFFF]">
      <ul className="flex pt-[22px] pb-[13px] gap-[100px] justify-center font-[Lora]">
        <li>
          <a href="#">
            <span>Nature</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>Photography</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>Relaxation</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>Vacation</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>Travel</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>Adventure</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default CategoryTabs;
