"use client";

import { useActionState } from "react";
import onSubmit from "@/app/(beforeLogin)/_lib/signup";
import { useRouter } from "next/navigation";

export default function SignupModal() {
  const [state, formAction] = useActionState(onSubmit, { message: null });
  const router = useRouter();
  return (
    <div className="w-screen h-full flex justify-center absolute bg-black/40 dark:bg-[#5b7083]/40 top-0 left-0 right-0 bottom-0">
      <div className="bg-white dark:bg-black relative top-[5%] w-[600px] rounded-2xl flex flex-col h-[700px]">
        <button
          onClick={() => router.back()}
          className="w-[34px] h-[34px] rounded-full border-none cursor-pointer bg-white dark:bg-black absolute left-4 top-4 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 dark:fill-white">
            <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z" />
          </svg>
        </button>

        <div className="px-20 pt-9 pb-5 text-[31px] font-bold">회원가입</div>

        <form action={formAction} className="flex flex-col flex-1">
          <div className="flex-1 px-20">
            <div className="flex flex-col h-14 relative my-3">
              <label className="w-full inline-block absolute top-0 border border-[#cfd9de] rounded px-2 pt-2 h-14 text-sm text-[#536471] focus-within:text-red-500">
                <input
                  type="email"
                  placeholder="이메일"
                  name="email"
                  className="w-full border-none text-[17px] mt-4 px-2 pb-2 outline-none bg-transparent"
                />
              </label>
            </div>

            <div className="flex flex-col h-14 relative my-3">
              <label className="w-full inline-block absolute top-0 border border-[#cfd9de] rounded px-2 pt-2 h-14 text-sm text-[#536471] focus-within:text-red-500">
                <input
                  type="text"
                  placeholder="닉네임"
                  name="nickname"
                  className="w-full border-none text-[17px] mt-4 px-2 pb-2 outline-none bg-transparent"
                />
              </label>
            </div>

            <div className="flex flex-col h-14 relative my-3">
              <label className="w-full inline-block absolute top-0 border border-[#cfd9de] rounded px-2 pt-2 h-14 text-sm text-[#536471] focus-within:text-red-500">
                <input
                  type="password"
                  placeholder="비밀번호"
                  name="password"
                  className="w-full border-none text-[17px] mt-4 px-2 pb-2 outline-none bg-transparent"
                />
              </label>
            </div>

            <div className="flex flex-col h-14 relative my-3">
              <label className="w-full inline-block absolute top-0 border border-[#cfd9de] rounded px-2 pt-2 h-14 text-sm text-[#536471] focus-within:text-red-500">
                <input
                  type="password"
                  placeholder="비밀번호 확인"
                  name="passwordConfirm"
                  className="w-full border-none text-[17px] mt-4 px-2 pb-2 outline-none bg-transparent"
                />
              </label>
            </div>

            {/* <div className="my-3">
          <TurnstileComponent onVerify={handleVerify} />
        </div> */}
          </div>

          <div className="px-20 py-6">
            <button
              type="submit"
              className="w-full h-[50px] rounded-full bg-[#0f1419] hover:bg-[#272c30] text-white text-[17px] cursor-pointer border-none disabled:opacity-50"
            >
              회원가입
            </button>
          </div>
          <div className="text-red-500">{state.message}</div>
        </form>
      </div>
    </div>
  );
}
