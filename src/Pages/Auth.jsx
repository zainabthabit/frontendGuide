import React, { useEffect, useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { useUserStore } from '../store/user';
import { useNavigate } from 'react-router-dom';
import Login from '../components/LogIn';
import axios from 'axios';
import Signup from '../components/Signup';

const Auth = () => {
  const [error, setError] = useState('');

  const { isLoggedIn, login, setUser } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8001/user/login', {
        email,
        password,
      });

      login(response.data.token);
      setUser(response.data.user);
    } catch (err) {
      setError(err.response.data.message || err.message);
    }
  };

  const handleSignup = async (fullName, email, password, role) => {
    try {
      const response = await axios.post('http://localhost:8001/user/signup', {
        fullName,
        email,
        password,
        role,
      });

      login(response.data.token);
      setUser(response.data.user);
    } catch (err) {
      setError(err.response.data.message || err.message);
    }
  };

  return (
    <section id="login" className="   flex flex-col items-center  ">
      <div className=" mt-[50px] mb-[50px]   w-[60%] h-[550px] bg-slate-600 rounded-tl-[40px] shadow-lg  rounded-br-[40px]  flex justify-between items-center">
        <img src="login.jpeg" className=" w-[50%] h-[100%] rounded-tl-[40px] " alt=""></img>

        <div className=" pt-[20px]   w-[50%] h-[100%]  bg-slate-200 flex flex-col items-center rounded-br-[40px] ">
          <p className="  text-center text-[30px] font-serif  text-slate-800">مرحبا بك في دليل المعلم</p>

          <Tabs.Root className=" pt-[20px] flex flex-col items-center bg-transparent w-[100%]   	 " defaultValue="tab2">
            <Tabs.List className=" w-[300px] h-[50px] rounded-[50px]  bg-[#49bbbd75] flex items-center  ">
              <Tabs.Trigger
                className=" rounded-[50px]  data-[state=active]:bg-[#49BBBD] px-5 h-[50px] flex-1 flex items-center justify-center text-slate-100 text-[15px]  leading-none text-mauve11 select-none  cursor-pointer"
                value="tab1">
                حساب جديد
              </Tabs.Trigger>
              <Tabs.Trigger
                className=" rounded-[40px]  data-[state=active]:bg-[#49BBBD] px-5 h-[50px] flex-1 flex items-center justify-center text-slate-100 text-[15px]  leading-none text-mauve11 select-none cursor-pointer"
                value="tab2">
                تسجيل الدخول
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className="grow p-5 text-slate-800 " value="tab1">
              <Signup onSignup={handleSignup} />
            </Tabs.Content>
            <Tabs.Content className="grow p-5 text-slate-800 " value="tab2">
              <Login onLogin={handleLogin} />
            </Tabs.Content>
          </Tabs.Root>
          {Boolean(error) && (
            <div className="mx-3 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Auth;
