import React from "react";
const Content = () => {
    return <div className="  mb-5 h-auto  flex flex-col items-center justify-center ">

        <div className=" mt-[35px] mb-[35px]   w-[75%] h-[450px]rounded-tl-[40px]   rounded-br-[40px]  flex justify-between items-center">
            <img src='guid2.png' className='   ' alt=""></img>
            <div className=" pt-[20px] pr-8  w-[50%] h-[100%]  flex flex-col items-center justify-center rounded-br-[40px] ">
                <p className="  text-center text-[35px] font-serif  text-slate-800">
                    ما هو دليل المعلم الالكتروني                </p >
                <p className="  text-right text-[18px]"> الموقع عبارة عن منصة تعليمية تقدم تجربة مبتكرة لتدريب المعلمين على طرائق التدريس بطريقة ممتعة بإستخدام مقاطع فيديو قصيرة مقدمة من خلال أفضل المدربين ومعالجة بالمؤثرات البصرية والرسوم المتحركة اللازمة لتوصيل أمتع تجربة تعليمية مع مدونات قوية عبر الإنترنت تجمع بين جميع الأدوات اللازمة لإدارة الصف الدراسي بإمتياز كما يوفر أحدث الطرق والأدوات اللازمة لتطوير مهارات التدريسيين والأساتذة</p>

            </div>
        </div>
        <div id="browse" className=" flex justify-between w-[70%] ">

            <div className="flex flex-col items-center relative pt-8 ">
                <img src='videoIcon.png' className='  w-[150px] h-[150px] rounded-full shadow-lg  absolute top-1  ' alt=""></img>

                <div className=" mt-[50px] pt-[100px] w-[300px] h-[300px] rounded-2xl bg-white shadow-lg flex flex-col items-center">
                    <h2 className=" text-[15px] font-bold">فيديوات تفاعلية </h2>
                    <p className=" pt-4 px-[40px] text-[15px] text-center">الفيديوات والمدونات مزودة من قبل أكفأ المدربين والأساتذة المختصين بطرائق التدريس و التعليم الحديثة</p>
                    <button className=" rounded-[50px] mt-5  bg-[#29B9E7]   hover:text-orange-400 w-32  h-[38px] text-slate-100 text-[15px] leading-none text-mauve11  cursor-pointer">تصفح </button>

                </div>
            </div>
            <div className="flex flex-col items-center relative pt-8 ">
                <img src='blogIcon.png' className='  w-[150px] h-[150px] rounded-full shadow-lg bg-blue-500 absolute top-1  ' alt=""></img>

                <div className=" mt-[50px] pt-[100px] w-[300px] h-[300px] rounded-2xl bg-white shadow-lg flex flex-col items-center">
                    <h2 className=" text-[15px] font-bold">مدونات علمية  </h2>
                    <p className=" pt-4 px-[40px] text-[15px] text-center"> والمدونات مزودة من قبل أكفأ المدربين والأساتذة المختصين بطرائق التدريس وأساليب التعليم الحديثة</p>
                    <button className=" rounded-[50px] mt-5  bg-[#49BBBD]   hover:text-orange-400 w-32  h-[38px] text-slate-100 text-[15px] leading-none text-mauve11  cursor-pointer">تصفح </button>

                </div>
            </div>
            <div className="flex flex-col items-center relative pt-8 ">
                <img src='personIcon.png' className='  w-[150px] h-[150px] rounded-full shadow-lg bg-cyan-500 absolute top-1  ' alt=""></img>

                <div className=" mt-[50px] pt-[100px] w-[300px] h-[300px] rounded-2xl bg-white shadow-lg flex flex-col items-center">
                    <h2 className=" text-[15px] font-bold">مدربين كفوئين  </h2>
                    <p className=" pt-4 px-[40px] text-[15px] text-center">     أكفأ المدربين والأساتذة المختصين بطرائق التدريس وأساليب التعليم الحديثة</p>
                    <button className=" rounded-[50px] mt-5  bg-[#5B72EE]   hover:text-orange-400 w-32  h-[38px] text-slate-100 text-[15px] leading-none text-mauve11  cursor-pointer">تصفح </button>

                </div>
            </div>
        </div>
    </div>;
};
export default Content;
