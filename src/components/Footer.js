import React from "react";
import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
    return (
        <div className="flex  flex-col  bg-slate-700  p-2 h-44 text-white">
            <div
                className="gap-5  items-center flex justify-center  flex-col 
    "
            >
                <div className="flex flex-col ">
                    <div className="flex justify-center gap-3">
                        <div className="flex flex-col justify-center">
                            <p className="pl-2  text-sm text-white p-1 ">دليل المعلم </p>
                            <p className="pl-2 text-sm  text-[#FBF695] "> الالكتروني</p>
                        </div>

                    </div>
                </div>

                {/* <div className="border-[1px] border-slate-600 h-96"></div> */ }

                <div className="flex    ">
                    <ul className="flex flex-row-reverse text-sm gap-4 items-center ">
                        <Link to="/" className="hover:underline">
                            <li className=" md:py-0">الصفحة الرئيسية</li>
                        </Link>
                        <Link to="/Videos" className="hover:underline">
                            <li className=" md:py-0">فيديواتي</li>
                        </Link>
                        <Link to="/Blogs" className="hover:underline">
                            <li className=" md:py-0">مدوناتي</li>
                        </Link>
                        <Link to="/ContactUs" className="hover:underline">
                            <li className=" md:py-0">تواصل معنا</li>
                        </Link>
                        <Link to="/WhoAreWe" className="hover:underline">
                            <li className=" md:py-0">من نحن؟</li>
                        </Link>
                    </ul>
                </div>
                <div className="flex">
                    <ul className="flex flex-row-reverse text-lg gap-4 items-center">
                        <li>
                            <IoLogoInstagram />
                        </li>
                        <li>
                            <CiFacebook />
                        </li>
                        <li>
                            <TiSocialLinkedinCircular />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Footer;
