import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/user';

const NavBar = () => {
  const { isLoggedIn, user, logout } = useUserStore();

  const navigate = useNavigate();

  return (
    <nav className=" flex flex-row-reverse justify-between gap-10 text-sm md:text-sm bg-[#49BBBD] text-white shadow-lg   ">
      <ul className=" pr-6 flex justify-end gap-[70px] text-[20px] flex-row-reverse  ">
        <li>
          <img src="logoFinal.png" alt="Logo" className=" h-[60px] w-[60px]rounded-full"></img>
        </li>
        <Link to="/">
          <li className="py-8">الصفحة الرئيسية</li>
        </Link>
        {isLoggedIn && (
          <>
            <Link to="/Videos">
              <li className="py-8">فيديواتي</li>
            </Link>
            <Link to="/Blogs">
              <li className="py-8">مدوناتي</li>
            </Link>
          </>
        )}
        <Link to="/ContactUs">
          <li className="py-8">تواصل معنا</li>
        </Link>
        <Link to="/WhoAreWe">
          <li className="py-8">من نحن؟</li>
        </Link>
      </ul>
      <div className=" flex justify-center items-center pl-10  ">
        {!isLoggedIn ? (
          <button
            onClick={() => navigate('/auth')}
            type="button"
            className=" bg-[#ffffff4f]  h-[40px] w-[120px] text-[18px] hover:bg-[#49BBBD]  text-white  rounded-full ">
            تسجيل دخول
          </button>
        ) : (
          <button
            onClick={() => {
              logout();
              navigate('/');
            }}
            type="button"
            className=" bg-[#ffffff4f]  h-[40px] w-[120px] text-[18px] hover:bg-[#49BBBD]  text-white  rounded-full ">
            تسجيل خروج {user?.fullName}
          </button>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
