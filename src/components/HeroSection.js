import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="w-full h-[450px] flex shadow-xl   bg-[#49BBBD]  justify-evenly "
      style={{
        borderBottomRightRadius: '150px',
      }}>
      <img src="herosection.png" alt="" className=" "></img>
      <div className=" w-[40%] h-[100%] pt-10 flex flex-col items-center justify-center gap-[15px] ">
        <h1 className=" text-[40px] text-white">دليل المعلم الألكتروني</h1>
        <h1 className="text-[37px] text-amber-600	">تدريب كفوء لتعليم أفضل</h1>
        <p className="text-[30px] text-white text-center">
          بيئة جاذبة ، ومجتمع يضم خلاصة التجارب والخبرات لأصحاب الكفاءة
        </p>
        <a
          className=" bg-[#ffffff4f]  h-[40px] w-[120px] pt-1 mt-10 text-center text-[18px] hover:bg-[#49BBBD]  text-white  rounded-full "
          href="#browse">
          تصفح مجاناً
        </a>
      </div>
    </div>
  );
};
export default HeroSection;
