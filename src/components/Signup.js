import React, { useState } from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import classnames from 'classnames';

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={classnames(
        'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
        className
      )}
      {...props}
      ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

const Signup = ({ onSignup }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('trainee');

  return (
    <section>
      <p className="mb-1 mt-5 pr-8 text-[14px] text-right leading-normal">الاسم الكامل</p>
      <input
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="إكتب إسمك الكامل"
        className=" w-[350px] h-[40px] pr-3 border text-[12px] text-right border-[#49BBBD] rounded-[50px] "></input>
      <p className="mb-1 mt-5 pr-8 text-[14px] text-right leading-normal">البريد الألكتروني</p>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="إكتب بريدك الألكتروني"
        className="text-right pr-3 w-[350px] h-[40px] border text-[12px] border-[#49BBBD] rounded-[50px] "></input>

      <p className="mb-1 mt-5 pr-8  text-[14px] text-right leading-normal">كلمة المرور </p>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="إكتب كلمة المرور"
        className="text-right w-[350px] pr-3 h-[40px] border text-[12px] border-[#49BBBD] rounded-[50px] "></input>
      <Select.Root value={role} onValueChange={(v) => setRole(v)}>
        <Select.Trigger
          className="mb-1 mt-5 inline-flex items-center justify-center  px-[15px]  leading-none  gap-[5px]  text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none w-[350px] h-[40px] pr-3 border text-[12px] bg-white text-right border-cyan-500 rounded-[50px]"
          aria-label="role">
          <Select.Value placeholder="إختر الدور" />
          <Select.Icon className="text-violet11">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
            <Select.Viewport className="p-[5px]  ">
              <Select.Group>
                <SelectItem value="trainer">مدرب</SelectItem>
                <SelectItem value="trainee">متدرب</SelectItem>
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      <button
        onClick={() => {
          if (fullName && email && password) {
            onSignup(fullName, email, password, role);
          }
        }}
        className=" rounded-[50px] mt-5  bg-[#49BBBD] w-32  h-[30px] text-slate-100 text-[15px] leading-none text-mauve11  cursor-pointer">
        إنشاء حساب
      </button>
    </section>
  );
};

export default Signup;
