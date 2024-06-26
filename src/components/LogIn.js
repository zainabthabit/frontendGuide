import React, { useState } from 'react';

const LogIn = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section>
      <p className="mb-1 mt-5 pr-8  text-[14px] text-right leading-normal">البريد الألكتروني</p>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="إكتب بريدك الألكتروني"
        className=" w-[350px] h-[40px] text-[12px] text-right pr-3 border border-[#49BBBD] rounded-[50px] "></input>
      <p className="mb-1 mt-5 pr-8  text-[14px] text-right leading-normal">كلمة المرور </p>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="إكتب كلمة المرور"
        className=" w-[350px] h-[40px] pr-3 text-[12px] text-right border border-[#49BBBD] rounded-[50px] "></input>

      <button
        onClick={() => {
          if (email && password) {
            onLogin(email, password);
          }
        }}
        className=" rounded-[50px] mt-5  bg-[#49BBBD]   w-32   h-[30px]  text-slate-100 text-[15px] leading-none text-mauve11  cursor-pointer">
        تسجيل الدخول
      </button>
    </section>
  );
};

export default LogIn;
