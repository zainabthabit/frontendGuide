import React from "react";
import emailjs from 'emailjs-com';


const ContactWithUs = () => {
    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_18c9vzh', 'template_fpzjoen', e.target, 'rQ8A9G4edZOhF-4X0')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
    }
    return <div id='login' className="   flex flex-col items-center  ">
        <div className=" mt-[50px] mb-[50px]   w-[60%] h-[550px] bg-slate-600 rounded-tl-[40px] shadow-lg  rounded-br-[40px]  flex justify-between items-center">
            <img src='teachingGuid.jpeg' className=' w-[50%] h-[100%] rounded-tl-[40px] ' alt=""></img>

            <div className=" pt-[20px]   w-[50%] h-[100%]  bg-slate-200 flex flex-col items-center rounded-br-[40px] ">
                <div className="flex p-8 flex-col">
                    <h1 className="text-2xl">إتصل بنا </h1>
                    <p className="text-lg">كن على تواصل معنا</p>
                </div>
                <div className="flex justify-center ">
                    <form className="flex flex-col items-center gap-5 h-96 w-96" onSubmit={ sendEmail }>
                        <input name="from_name" placeholder="إكتب إسم المستخدم" className=" w-[350px] h-[40px] pr-3 border text-[12px] text-right border-[#49BBBD] rounded-[50px] "></input>
                        <input name="from_email" placeholder="إكتب بريدك الألكتروني" className="text-right pr-3 w-[350px] h-[40px] border text-[12px] border-[#49BBBD] rounded-[50px] "></input>
                        <input name="subject" placeholder="إكتب عنوان الرســالة" className="text-right pr-3 w-[350px] h-[40px] border text-[12px] border-[#49BBBD] rounded-[50px] "></input>


                        <textarea name="html_message"
                            rows="6"
                            cols="40"
                            placeholder=" الرسالة"
                            className=" ml-2 text-xs  text-right pr-3 w-[350px]  border text-[12px] border-[#49BBBD] rounded-[20px]"
                        ></textarea>
                        <button className=" rounded-[50px] mt-5  bg-[#49BBBD]    w-32  h-[30px] text-slate-100 text-[15px] leading-none text-mauve11  cursor-pointer">إرســـال</button>

                    </form>
                </div>
            </div>


        </div>
    </div>
};

export default ContactWithUs;
