import React from 'react';

const WhoAreWe = () => {
  return (
    <div className=' flex flex-col items-center mt-[50px] mb-32 w-full h-full'>
      <h1 className=' mb-[50px] text-[50px] font-bold '>عن دليل المعلم الالكتروني</h1>
      <div className='  w-full h-full flex flex-row-reverse  justify-evenly  '>
        <div className='rounded-tl-[80px] hover:scale-105 hover:shadow-xl rounded-br-[80px] shadow-lg bg-[#49bbbd68]   rounded-tr-[80px]  w-[600px] h-[350px] flex flex-col justify-evenly items-end'>
          <span className=' text-right text-[30px] pr-10    font-bold z-10'>من نحن؟</span>
          <p className=' text-right text-[25px] w-[600px] h-200px text-balance z-10 pr-10 	 '>
            نحن فريق متخصص في تطوير الحلول التعليمية الرقمية، نسعى جاهدين لتوفير أدوات ومصادر تعليمية مبتكرة تسهم في
            تحسين جودة التعليم . تأسس "دليل المعلم الإلكتروني" برؤية واضحة تهدف إلى استخدام التكنولوجيا لتعزيز العملية
            التعليمية وجعلها أكثر فاعلية وشمولية
          </p>
        </div>
        <img src='team.jpeg' className='h-[350px] w-[350px] ' alt=''></img>
      </div>

      <div className=' mt-[100px]  w-full h-full flex flex-row justify-evenly  '>
        <div className='rounded-tl-[80px] rounded-bl-[80px] hover:scale-105 hover:shadow-xl shadow-lg bg-[#5b71ee5b]   rounded-tr-[80px]   rounded-tr-[40px]  w-[600px] h-[350px] flex flex-col justify-evenly items-end'>
          <span className=' text-right text-[30px] pr-10   font-bold z-10'>الفيديوهات التفاعيلية </span>
          <p className=' text-right text-[25px] w-[600px] h-200px text-balance z-10 pr-10 	 '>
            في عصر التكنولوجيا المتسارع، أصبحت الفيديوهات التفاعلية جزءًا أساسيًا من العملية التعليمية الحديثة. في "دليل
            المعلم الإلكتروني"، ندرك أهمية استخدام هذه الوسيلة المبتكرة لتعزيز تجربة التعلم، وتقديم المحتوى التعليمي
            بطريقة جذابة وفعالة.
          </p>
        </div>
        <img src='videos.jpeg' className=' ' alt=''></img>
      </div>
      <hr className='w-[80%] mt-20 border-[1px]  border-[#49BBBD] '></hr>
      <h1 className=' mb-28  mt-20 text-[50px] font-bold '> فريق العمل</h1>
      <div className='  w-full h-full flex flex-row-reverse  justify-evenly  '>
        <div className='rounded-tl-[80px] rounded-br-[80px] hover:scale-105 hover:shadow-xl shadow-lg bg-[#b549bd58]   rounded-tr-[80px]  w-[600px] h-[350px] flex flex-col justify-evenly items-end'>
          <span className=' text-right text-[30px] pr-10    font-bold z-10'> بنين</span>
          <p className=' text-right text-[25px] w-[600px] h-200px text-balance z-10 pr-10 	 '>
            نحن فريق متخصص في تطوير الحلول التعليمية الرقمية، نسعى جاهدين لتوفير أدوات ومصادر تعليمية مبتكرة تسهم في
            تحسين جودة التعليم . تأسس "دليل المعلم الإلكتروني" برؤية واضحة تهدف إلى استخدام التكنولوجيا لتعزيز العملية
            التعليمية وجعلها أكثر فاعلية وشمولية
          </p>
        </div>
        <img src='baneen.jpg' className='h-[350px] w-[350px] rounded-full ' alt=''></img>
      </div>

      <div className=' mt-[100px]  w-full h-full flex flex-row justify-evenly  '>
        <div className='mt-[50px] rounded-tl-[80px] rounded-bl-[80px] hover:scale-105 hover:shadow-xl shadow-lg bg-[#eee75b74]   rounded-tr-[80px]   rounded-tr-[40px]  w-[600px] h-[250px] flex flex-col justify-evenly items-end'>
          <span className=' text-right text-[30px] pr-10   font-bold z-10'>زينب ثابت </span>
          <p className=' text-right text-[25px] w-[600px] h-200px text-balance z-10 pr-10'>
            آني زينب... مبرمجة في مديرية التربية لمحافظة النجف الاشرف, أعمل كمدربة برامج ألكترونية مع منظمة اليونيسيف,
            وحاصلة على شهادة الماجستير في تنقيب البيانات.
          </p>
        </div>
        <img src='zainab.jpg' className='h-[350px] w-[350px] rounded-full ' alt=''></img>
      </div>
    </div>
  );
};
export default WhoAreWe;
