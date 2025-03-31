"use client";

import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
export default function LoginModal() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      await signIn("credentials", {
        username: username,
        password,
        redirect: false,
      });
      router.replace("/");
    } catch (err) {
      console.error(err);
      setMessage("아이디와 비밀번호가 일치하지 않습니다.");
    }
  };
  const onClickClose = () => {
    router.back();
  };

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="w-screen h-full flex justify-center absolute bg-black/40 dark:bg-[#5b7083]/40 top-0 left-0 right-0 bottom-0">
      <div className="bg-white dark:bg-black relative top-[5%] w-[600px] rounded-2xl flex flex-col h-[600px]">
        <button
          onClick={onClickClose}
          className="w-[34px] h-[34px] rounded-full border-none cursor-pointer bg-white dark:bg-black absolute left-4 top-4 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 dark:fill-white">
            <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z" />
          </svg>
        </button>

        <div className="px-20 pt-9 pb-5 text-[31px] font-bold">로그인</div>

        <form onSubmit={onSubmit} className="flex flex-col flex-1">
          <div className="flex-1 px-20">
            <div className="flex flex-col h-14 relative my-3">
              <label className="w-full inline-block absolute top-0 border border-[#cfd9de] rounded px-2 pt-2 h-14 text-sm text-[#536471] focus-within:text-red-500">
                <input
                  name="username"
                  type="text"
                  value={username}
                  onChange={onChangeId}
                  placeholder="이메일"
                  className="w-full border-none text-[17px] mt-4 px-2 pb-2 outline-none bg-transparent"
                />
              </label>
            </div>

            <div className="flex flex-col h-14 relative my-3">
              <label className="w-full inline-block absolute top-0 border border-[#cfd9de] rounded px-2 pt-2 h-14 text-sm text-[#536471] focus-within:text-red-500">
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={onChangePassword}
                  placeholder="비밀번호"
                  className="w-full border-none text-[17px] mt-4 px-2 pb-2 outline-none bg-transparent"
                />
              </label>
            </div>
          </div>

          <div className="px-20 py-6">
            <button
              type="submit"
              className="w-full h-[50px] rounded-full bg-[#0f1419] hover:bg-[#272c30] text-white text-[17px] cursor-pointer border-none disabled:opacity-50"
            >
              로그인
            </button>
          </div>
          <div className="text-red-500 px-20">{message}</div>
        </form>
      </div>
    </div>
  );
}
